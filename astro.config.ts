import solidJs from '@astrojs/solid-js'
import { defineConfig, fontProviders } from 'astro/config'
import pdf from 'astro-pdf'
import Icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
	integrations: [
		solidJs(),
		pdf({
			pages: {
				'/resume': true,
			},
			baseOptions: {
				pdf: {
					format: 'A4',
					printBackground: true,
				},

				waitUntil: 'networkidle0',
			},
		}),
	],
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: 'Metropolis',
			cssVariable: '--font-metropolis',
			weights: [500],
		},
		{
			provider: fontProviders.fontsource(),
			name: 'JetBrains Mono',
			cssVariable: '--font-jetbrains-mono',
			weights: [500],
		},
		{
			provider: fontProviders.fontsource(),
			name: 'Cal Sans',
			cssVariable: '--font-cal-sans',
		},
	],
	vite: {
		plugins: [
			Icons({
				compiler: 'solid',
			}),
		],
	},
})
