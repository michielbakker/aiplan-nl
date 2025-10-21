import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { viteSingleFile } from "vite-plugin-singlefile";
import { createRequire } from "module";
import type prerenderType from "vite-plugin-prerender";
import { staticRoutePaths } from "./src/router/routes";

const nodeRequire = createRequire(import.meta.url);
const prerender = nodeRequire("vite-plugin-prerender") as typeof prerenderType;
const JsDomRenderer = nodeRequire(
	"@prerenderer/renderer-jsdom"
) as new (options?: Record<string, unknown>) => any;

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
				renderer: new JsDomRenderer({
					runScripts: false,
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
