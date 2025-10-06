import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCss = defineGlobalStyles({
	"html, body": {
		"--global-font-body": "var(--font-title)",
	},
});

export default defineConfig({
	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	// Useful for theme customization
	theme: {
		extend: {},
	},

	// The output directory for your css system
	outdir: "styled-system",

	globalCss,

	patterns: {
		extend: {
			container: {
				defaultValues: {
					paddingX: "7.5%",
				},
			},
		},
	},
});

// TODO add proper colors and theming
// google lighthouse
// minify/tree shake everything that can be
