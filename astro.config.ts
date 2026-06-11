import solidJs from '@astrojs/solid-js'
import { defineConfig, fontProviders } from 'astro/config'
// TOOD integrate automatic pdf generation when it works properly. until then we'll just use our manually generated PDF.
// import pdf from 'astro-pdf'
import Icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
	integrations: [
		solidJs(),
		// pdf({
		// 	pages: {
		// 		'/resume': true,
		// 	},
		// 	launch: {
		// 		args: chromium.args,
		// 		executablePath: await chromium.executablePath(),
		// 	},
		// 	baseOptions: {
		// 		pdf: {
		// 			format: 'A4',
		// 			printBackground: true,
		// 		},

		// 		waitUntil: 'networkidle0',
		// 	},
		// }),
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
