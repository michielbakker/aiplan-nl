import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { viteSingleFile } from "vite-plugin-singlefile";
import { createRequire } from "module";
import type prerenderType from "vite-plugin-prerender";
import {
	staticRoutePaths,
	resolveMetadataForPath,
	DEFAULT_METADATA,
} from "./src/router/routes";

const nodeRequire = createRequire(import.meta.url);
const prerender = nodeRequire("vite-plugin-prerender") as typeof prerenderType;
const JsDomRenderer = nodeRequire(
	"@prerenderer/renderer-jsdom"
) as new (options?: Record<string, unknown>) => any;
const { JSDOM } = nodeRequire("jsdom") as {
	JSDOM: typeof import("jsdom").JSDOM;
};

const applyMetadataToHtml = (html: string, route: string) => {
	let dom: import("jsdom").JSDOM | undefined;

	try {
		dom = new JSDOM(html);
	} catch {
		return html;
	}

	const { document } = dom.window;
	const metadata = resolveMetadataForPath(route);

	document.title = metadata.title;

	const deriveValue = (
		value: string | undefined,
		defaultValue: string | undefined,
		fallback: string
	) => {
		if (!value || value === defaultValue) {
			return fallback;
		}

		return value;
	};

	const ogTitle = deriveValue(
		metadata.openGraphTitle,
		DEFAULT_METADATA.openGraphTitle,
		metadata.title
	);
	const ogDescription = deriveValue(
		metadata.openGraphDescription,
		DEFAULT_METADATA.openGraphDescription,
		metadata.description
	);
	const twitterTitle = deriveValue(
		metadata.twitterTitle,
		DEFAULT_METADATA.twitterTitle,
		metadata.title
	);
	const twitterDescription = deriveValue(
		metadata.twitterDescription,
		DEFAULT_METADATA.twitterDescription,
		metadata.description
	);

	const upsertMeta = (
		attr: "name" | "property",
		value: string,
		content?: string
	) => {
		const selector = `meta[${attr}="${value}"]`;
		let meta = document.head.querySelector(selector);

		if (!content) {
			meta?.parentElement?.removeChild(meta);
			return;
		}

		if (!meta) {
			meta = document.createElement("meta");
			meta.setAttribute(attr, value);
			document.head.appendChild(meta);
		}

		meta.setAttribute("content", content);
	};

	const upsertLink = (rel: string, href?: string) => {
		const selector = `link[rel="${rel}"]`;
		let link = document.head.querySelector(selector);

		if (!href) {
			link?.parentElement?.removeChild(link);
			return;
		}

		if (!link) {
			link = document.createElement("link");
			link.setAttribute("rel", rel);
			document.head.appendChild(link);
		}

		link.setAttribute("href", href);
	};

	upsertMeta("name", "description", metadata.description);
	upsertMeta("property", "og:title", ogTitle);
	upsertMeta("property", "og:description", ogDescription);
	upsertMeta("property", "og:image", metadata.image);
	upsertMeta("property", "og:image:alt", metadata.imageAlt);
	upsertMeta("property", "og:url", metadata.url);

	upsertMeta("name", "twitter:title", twitterTitle);
	upsertMeta("name", "twitter:description", twitterDescription);
	upsertMeta("name", "twitter:image", metadata.image);
	upsertMeta("name", "twitter:card", metadata.image ? "summary_large_image" : "summary");
	upsertMeta("name", "twitter:image:alt", metadata.imageAlt);

	upsertLink("canonical", metadata.url);

	return dom.serialize();
};

export default defineConfig(({ mode, command }) => ({
	server: {
		host: "::",
		port: 8080,
	},
	plugins: [
		react(),
		mode === "development" && componentTagger(),
		viteSingleFile(),
		command === "build" &&
			prerender({
				staticDir: path.resolve(__dirname, "dist"),
				routes: staticRoutePaths,
				server: {
					host: "127.0.0.1",
					...(process.env.PRERENDER_SERVER_PORT
						? { port: Number(process.env.PRERENDER_SERVER_PORT) }
						: {}),
				},
				postProcess(renderedRoute) {
					renderedRoute.html = applyMetadataToHtml(
						renderedRoute.html,
						renderedRoute.route
					);
					return renderedRoute;
				},
				renderer: new JsDomRenderer({
					runScripts: "dangerously",
				}),
			}),
	].filter(Boolean),
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	assetsInclude: ["**/*.md"],
}));
