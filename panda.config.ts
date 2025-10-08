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
		extend: {
		  keyframes: {
				dialogBackdropIn: {
          from: {
            opacity: 0,
            backdropFilter: "blur(0px)",
          },
          to: {
            opacity: 1,
            backdropFilter: "blur(8px)",
          }
        },
        dialogBackdropOut: {
          from: {
            opacity: 1,
            backdropFilter: "blur(8px)",
          },
          to: {
            opacity: 0,
            backdropFilter: "blur(0px)",
          },
        },
        dialogContentIn: {
          from: {
            opacity: 0,
            transform: "translateY(10px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        dialogContentOut: {
          from: {
            opacity: 1,
            transform: "translateY(0)",
          },
          to: {
            opacity: 0,
            transform: "translateY(10px)",
          },
        }
      },
		},
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
