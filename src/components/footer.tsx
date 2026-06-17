import type { Component } from 'solid-js'
import { Center } from 'styled-system/jsx'
import { Text } from '@/components/ui/text'

const Footer: Component = () => (
	<Center
		as="footer"
		fontFamily="mono"
		fontSize="sm"
		flexDirection="column"
		py={6}
		px={10}
		textAlign="center"
		id="footer"
		borderTop="1px solid"
		borderTopColor="border"
	>
		<Text>[ Let's build something beautiful & performance-optimized. ]</Text>
		<Text>Proudly powered by Solid.js & Panda CSS and hosted by Vercel.</Text>
		<Text>Made with &lt;3 by Pedro Nobre • me@pedrodesu.xyz • Porto, PT</Text>
	</Center>
)

export default Footer
