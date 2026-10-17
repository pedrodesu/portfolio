import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import solidJs from '@astrojs/solid-js'
import vercel from '@astrojs/vercel'
import pandacss from '@pandacss/vite'
import { defineConfig, fontProviders } from 'astro/config'
import { chromium } from 'playwright'
import icons from 'unplugin-icons/vite'

export default defineConfig({
	adapter: vercel({ webAnalytics: { enabled: true } }),
	integrations: [
		solidJs(),
		{
			name: 'generate-resume-and-cleanup',
			hooks: {
				'astro:build:done': async ({ dir }) => {
					const distDir = fileURLToPath(dir)
					const resumeHtmlPath = path.join(distDir, 'resume', 'index.html')
					const pdfOutputPath = path.join(distDir, 'resume.pdf')

					const browser = await chromium.launch()
					const page = await browser.newPage()

					await page.route('**/_astro/**', route => {
						const url = new URL(route.request().url())
						const relativePath = url.pathname
						const localFilePath = path.join(distDir, relativePath)
						return route.fulfill({ path: localFilePath })
					})

					await page.setViewportSize({
						width: 1920,
						height: 1080,
					})
					await page.emulateMedia({ media: 'print' })
					await page.goto(`file://${resumeHtmlPath}`, {
						waitUntil: 'networkidle',
					})

					await page.pdf({
						path: pdfOutputPath,
						format: 'A4',
						printBackground: true,
						preferCSSPageSize: true,
						margin: { top: 0, right: 0, bottom: 0, left: 0 },
					})

					await browser.close()

					await fs.rm(path.join(distDir, 'resume'), {
						recursive: true,
						force: true,
					})
					console.log('Generated and cleaned up resume.')
				},
			},
		},
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
			weights: [400, 500],
    }
	],
	vite: {
		plugins: [
			pandacss({ transform: true }),
			icons({
				compiler: 'solid',
			}),
		],
	},
})
