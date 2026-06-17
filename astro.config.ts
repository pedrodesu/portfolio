import fs from 'node:fs/promises'
import path from 'node:path'
import solidJs from '@astrojs/solid-js'
import vercel from '@astrojs/vercel'
import chromium from '@sparticuz/chromium'
import { defineConfig, fontProviders } from 'astro/config'
import Icons from 'unplugin-icons/vite'

const realPath = await chromium.executablePath()

// We need these hacks for the current version of `astro-pdf` to work. This should be properly fixed in the next version.
await fs.writeFile(
	path.resolve('.puppeteerrc.ts'),
	`export default {
  \texecutablePath: '${realPath}',
  \tskipDownload: true,
  }`,
)

const { default: pdf } = await import('astro-pdf')

export default defineConfig({
	adapter: vercel({ webAnalytics: { enabled: true } }),
	integrations: [
		solidJs(),
		pdf({
			pages: {
				'/resume': true,
			},
			launch: {
				args: chromium.args,
			},
			baseOptions: {
				pdf: {
					format: 'A4',
					printBackground: true,
					preferCSSPageSize: true,
					margin: { top: 0, right: 0, bottom: 0, left: 0 },
				},
				waitUntil: 'networkidle0',
			},
		}),
		{
			name: 'cleanup-resume-html',
			hooks: {
				'astro:build:done': async ({ dir }) => {
					const resumeHtmlPath = new URL('resume', dir)
					await fs.rm(resumeHtmlPath, { recursive: true, force: true })
					console.log('Cleaned up HTML resume')
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
