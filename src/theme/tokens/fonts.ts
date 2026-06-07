import { defineTokens } from '@pandacss/dev'

export const fonts = defineTokens.fonts({
	title: { value: 'var(--font-cal-sans), sans-serif' },
	body: { value: 'var(--font-metropolis), sans-serif' },
	mono: { value: 'var(--font-jetbrains-mono), monospace' },
})
