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
			}),
	].filter(Boolean),
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	assetsInclude: ["**/*.md"],
}));
