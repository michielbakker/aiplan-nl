import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

function stripCrossorigin() {
	return {
		name: "strip-crossorigin",
		closeBundle() {
			const indexPath = path.resolve(__dirname, "dist/index.html");
			if (fs.existsSync(indexPath)) {
				let html = fs.readFileSync(indexPath, "utf-8");
				// remove all crossorigin attributes
				html = html.replace(/\s+crossorigin(="anonymous")?/g, "");
				fs.writeFileSync(indexPath, html, "utf-8");
			}
		},
	};
}

export default defineConfig(({ mode }) => ({
	server: { host: "::", port: 8080 },
	plugins: [
		react(),
		mode === "development" ? require("lovable-tagger").componentTagger() : null,
		stripCrossorigin(),
	].filter(Boolean),
	resolve: {
		alias: { "@": path.resolve(__dirname, "./src") },
	},
	assetsInclude: ["**/*.md"],
	base: "./",
}));