import type { Component } from 'solid-js'
import { css } from 'styled-system/css'
import { Center } from 'styled-system/jsx'
import { Text } from '@/components/ui/text'
import * as Contact from '@/info/contact'

const Footer: Component = () => (
	<Center
		as="footer"
		fontFamily="mono"
		fontSize="sm"
		flexDirection="column"
		mt={10}
		py={6}
		px={10}
		textAlign="center"
		id="footer"
		borderTop="1px solid"
		borderTopColor="border"
	>
		<Text>[ Let's build something beautiful & performance-optimized. ]</Text>
		<Text>Proudly powered by bun.js & Solid.js and hosted with Vercel.</Text>
		<Text>
			Made with &lt;3 by Pedro Nobre •{' '}
			<a
				href={`mailto:${Contact.EMAIL}`}
				class={css({ _hover: { textDecoration: 'underline' } })}
			>
				{Contact.EMAIL}
			</a>{' '}
			• Porto, PT
		</Text>
	</Center>
)

export default Footer
