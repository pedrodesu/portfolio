import { defineConfig } from '@pandacss/dev'
import { animationStyles } from '@/theme/animation-styles'
import { green } from '@/theme/colors/green'
import { red } from '@/theme/colors/red'
import { slate } from '@/theme/colors/slate'
import { conditions } from '@/theme/conditions'
import { globalCss } from '@/theme/global-css'
import { keyframes } from '@/theme/keyframes'
import { layerStyles } from '@/theme/layer-styles'
import { recipes, slotRecipes } from '@/theme/recipes'
import { textStyles } from '@/theme/text-styles'
import { colors } from '@/theme/tokens/colors'
import { durations } from '@/theme/tokens/durations'
import { fonts } from '@/theme/tokens/fonts'
import { radii } from '@/theme/tokens/radii'
import { shadows } from '@/theme/tokens/shadows'
import { zIndex } from '@/theme/tokens/z-index'

export default defineConfig({
	preflight: true,
	include: ['./src/**/*.{js,jsx,ts,tsx,astro}'],
	exclude: [],
	jsxFramework: 'solid',

	theme: {
		extend: {
			animationStyles: animationStyles,
			recipes: recipes,
			slotRecipes: slotRecipes,
			keyframes: keyframes,
			layerStyles: layerStyles,
			textStyles: textStyles,

			tokens: {
				colors: colors,
				durations: durations,
				fonts: fonts,
				zIndex: zIndex,
			},

			semanticTokens: {
				colors: {
					bg: {
						value: { _light: '{colors.gray.1}', _dark: '{colors.gray.1}' },
					},

					fg: {
						default: {
							value: {
								_light: '{colors.gray.12}',
								_dark: '{colors.gray.12}',
							},
						},

						muted: {
							value: {
								_light: '{colors.gray.11}',
								_dark: '{colors.gray.11}',
							},
						},

						subtle: {
							value: {
								_light: '{colors.gray.10}',
								_dark: '{colors.gray.10}',
							},
						},
					},

					border: {
						value: {
							_light: '{colors.gray.2}',
							_dark: '{colors.gray.2}',
						},
					},

					error: {
						value: {
							_light: '{colors.red.9}',
							_dark: '{colors.red.9}',
						},
					},

					gray: slate,
					red: red,
					green: green,
				},

				shadows: shadows,

				radii: radii,
			},
		},
	},

	patterns: {
		extend: {
			container: {
				defaultValues: {
					maxWidth: 'full',
					paddingX: { base: 12, lg: 28 },
				},
			},
		},
	},

	outdir: 'styled-system',

	globalCss: globalCss,
	conditions: conditions,

	plugins: [
		{
			name: 'Remove Panda Preset Colors',
			hooks: {
				'preset:resolved': ({ utils, preset, name }) =>
					name === '@pandacss/preset-panda'
						? utils.omit(preset, [
								'theme.tokens.colors',
								'theme.semanticTokens.colors',
							])
						: preset,
			},
		},
	],
})
