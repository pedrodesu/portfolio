import { defineSemanticTokens } from '@pandacss/dev'

export const shadows = defineSemanticTokens.shadows({
	xs: {
		value: '0px 1px 1px {colors.black.a8}, 0px 0px 1px inset {colors.gray.a8}',
	},
	sm: {
		value: '0px 2px 4px {colors.black.a8}, 0px 0px 1px inset {colors.gray.a8}',
	},
	md: {
		value: '0px 4px 8px {colors.black.a8}, 0px 0px 1px inset {colors.gray.a8}',
	},
	lg: {
		value: '0px 8px 16px {colors.black.a8}, 0px 0px 1px inset {colors.gray.a8}',
	},
	xl: {
		value:
			'0px 16px 24px {colors.black.a8}, 0px 0px 1px inset {colors.gray.a8}',
	},
	'2xl': {
		value:
			'0px 24px 40px {colors.black.a8}, 0px 0px 1px inset {colors.gray.a8}',
	},
	inset: {
		value: 'inset 8px 0 12px -8px {colors.black.a6}',
	},
})
