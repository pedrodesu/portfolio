import type { Component } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { Center, Grid, VStack, Wrap } from 'styled-system/jsx'
import { container } from 'styled-system/patterns'
import List from '@/components/list'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import * as ExperienceInfo from '@/info/experience'

const listWith = (title: string, items: ExperienceInfo.Item[]) => () => (
	<Wrap flexDirection="column" gap={6} pl={{ base: 0, sm: 10 }}>
		<Heading textStyle="4xl">{title}</Heading>
		<List
			items={items.map(item => ({
				...item,
				title: `${item.role} · ${item.at}`,
			}))}
		/>
	</Wrap>
)

const Work: Component = listWith('Work Experience', ExperienceInfo.WORK)
const Education: Component = listWith(
	'Formal Education',
	ExperienceInfo.EDUCATION,
)

const Experience: Component = () => (
	<VStack
		minH="screen"
		id="experience"
		class={cx(
			container(),
			css({ scrollSnapAlign: 'start', pt: 0, md: { pt: 32 } }),
		)}
		gap={6}
	>
		<Grid columns={{ base: 1, lg: 2 }} gap={20} w="full">
			<Work />
			<Education />
		</Grid>
		<Center
			fontFamily="mono"
			fontSize="sm"
			flexDirection="column"
			py={4}
			textAlign="center"
			id="footer"
		>
			<Text>[ Let's build something beautiful & performance-optimized. ]</Text>
			<Text>Proudly powered by Solid.js & Panda CSS and hosted by Vercel.</Text>
			<Text>Made with &lt;3 by Pedro Nobre • me@pedrodesu.xyz • Porto, PT</Text>
		</Center>
	</VStack>
)

export default Experience
