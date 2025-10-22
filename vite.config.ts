import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { pageEntries } from "./src/mpa/pageManifest";
import type { PageEntry } from "./src/mpa/pageManifest";
import type { PageMetadata } from "./src/router/routes";

const escapeHtml = (value?: string | null) =>
	value
		? value
				.replace(/&/g, "&amp;")
				.replace(/</g, "&lt;")
				.replace(/>/g, "&gt;")
				.replace(/"/g, "&quot;")
				.replace(/'/g, "&#039;")
		: "";

const encodeProps = (props?: Record<string, unknown>) => {
	if (!props || Object.keys(props).length === 0) {
		return "";
	}

	return ` data-props="${Buffer.from(JSON.stringify(props)).toString("base64")}"`;
};

const buildHead = (metadata: PageMetadata) => {
	const ogTitle = metadata.openGraphTitle ?? metadata.title;
	const ogDescription = metadata.openGraphDescription ?? metadata.description;
	const twitterTitle = metadata.twitterTitle ?? metadata.title;
	const twitterDescription =
		metadata.twitterDescription ?? metadata.description;
	const twitterCard = metadata.image ? "summary_large_image" : "summary";

	return `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(metadata.title)}</title>
    <meta name="description" content="${escapeHtml(metadata.description)}" />
    <meta name="author" content="AI Plan NL" />
    ${metadata.url ? `<link rel="canonical" href="${escapeHtml(metadata.url)}" />` : ""}

    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(ogTitle)}" />
    <meta property="og:description" content="${escapeHtml(ogDescription)}" />
    ${metadata.image ? `<meta property="og:image" content="${escapeHtml(metadata.image)}" />` : ""}
    ${metadata.imageAlt ? `<meta property="og:image:alt" content="${escapeHtml(metadata.imageAlt)}" />` : ""}
    ${metadata.url ? `<meta property="og:url" content="${escapeHtml(metadata.url)}" />` : ""}
    <meta property="og:site_name" content="AI Plan NL" />
    <meta property="og:locale" content="nl_NL" />

    <meta name="twitter:card" content="${twitterCard}" />
    <meta name="twitter:title" content="${escapeHtml(twitterTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(twitterDescription)}" />
    ${metadata.image ? `<meta name="twitter:image" content="${escapeHtml(metadata.image)}" />` : ""}
    ${metadata.imageAlt ? `<meta name="twitter:image:alt" content="${escapeHtml(metadata.imageAlt)}" />` : ""}

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=ABC+Whyte:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <link rel="icon" type="image/png" sizes="32x32" href="/icon32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/icon16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/icon180x180.png">
    <link rel="manifest" href="/site.webmanifest">
`;
};

type BuildAssets = {
	script: string;
	modulePreloads: string[];
	styles: string[];
};

const createHtmlDocument = (
	page: PageEntry,
	assets: BuildAssets
) => {
	const head = buildHead(page.metadata);
	const propsAttr = encodeProps(page.props);
	const preloadLinks = assets.modulePreloads
		.map((file) => `    <link rel="modulepreload" href="/${file}" />`)
		.join("\n");
	const styleLinks = assets.styles
		.map((file) => `    <link rel="stylesheet" href="/${file}" />`)
		.join("\n");

	return `<!DOCTYPE html>
<html lang="nl">
  <head>
${head}
${preloadLinks}
${styleLinks}
  </head>
  <body>
    <div id="root" data-component="${page.component}" data-path="${escapeHtml(page.path)}"${propsAttr}></div>
    <!-- IMPORTANT: DO NOT REMOVE THIS SCRIPT TAG OR THIS VERY COMMENT! -->
    <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
    <script type="module" src="/${assets.script}"></script>
  </body>
</html>
`;
};

const sanitisePath = (value: string) => {
	if (!value || value === "/") {
		return "/";
	}

	return value.endsWith("/") ? value.slice(0, -1) : value;
};

const routeToOutputFile = (route: string) => {
	if (route === "/") {
		return "index.html";
	}

	const trimmed = route.replace(/^\//, "");
	return `${trimmed}/index.html`;
};

const createMpaPlugin = () => {
	const pageMap = new Map(pageEntries.map((page) => [sanitisePath(page.path), page]));

	return {
		name: "ai-plan-mpa",
		configureServer(server: import("vite").ViteDevServer) {
			server.middlewares.use(async (req, res, next) => {
				const url = sanitisePath((req.url ?? "").split("?")[0] ?? "/");
				const page = pageMap.get(url);

				if (!page) {
					next();
					return;
				}

				const html = await server.transformIndexHtml(
					req.originalUrl ?? url,
					createHtmlDocument(page, {
						script: "src/entry-client.tsx",
						modulePreloads: [],
						styles: [],
					})
				);
				res.setHeader("Content-Type", "text/html; charset=utf-8");
				res.end(html);
			});
		},
		generateBundle(
			this: import("rollup").PluginContext,
			_options: unknown,
			bundle: import("rollup").OutputBundle
		) {
			const entryChunk = Object.values(bundle).find(
				(asset): asset is import("rollup").OutputChunk =>
					asset.type === "chunk" && asset.isEntry
			);

			if (!entryChunk) {
				this.error("Unable to determine entry chunk for MPA generation.");
				return;
			}
			const scriptSrc = entryChunk.fileName;
			const modulePreloads = entryChunk.imports ?? [];
			const styles = (entryChunk.viteMetadata?.importedCss
				? Array.from(entryChunk.viteMetadata.importedCss)
				: entryChunk.css ?? []) as string[];

			pageEntries.forEach((page) => {
				if (page.path === "/") {
					return;
				}

				const html = createHtmlDocument(page, {
					script: scriptSrc,
					modulePreloads,
					styles,
				});
				const outputFile = routeToOutputFile(page.path);

				this.emitFile({
					type: "asset",
					fileName: outputFile,
					source: html,
				});

				if (page.path === "/404") {
					this.emitFile({
						type: "asset",
						fileName: "404.html",
						source: html,
					});
				}
			});
		},
	};
};

export default defineConfig({
	server: {
		host: "::",
		port: 8080,
	},
	plugins: [react(), createMpaPlugin()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	assetsInclude: ["**/*.md"],
	build: {
		emptyOutDir: true,
	},
});
