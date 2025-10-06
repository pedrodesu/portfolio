import devtools from "solid-devtools/vite";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import solidPlugin from "vite-plugin-solid";
import solidSvg from "vite-plugin-solid-svg";

export default defineConfig({
	plugins: [
		devtools(),
		Pages({
			dirs: ["src/pages"],
		}),
		solidPlugin(),
		solidSvg(),
	],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
	},
});
