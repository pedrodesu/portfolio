import type { Component } from 'solid-js'
import { Grid, VStack, Wrap } from 'styled-system/jsx'
import { container } from 'styled-system/patterns'
import List from '@/components/list'
import { Heading } from '@/components/ui/heading'
import * as ExperienceInfo from '@/info/experience'

const listWith = (title: string, items: ExperienceInfo.Item[]) => () => (
	<Wrap flexDirection="column" gap={6}>
		<Heading textStyle="4xl">{title}</Heading>
		<List
			items={items.map(item => ({
				...item,
				subtitle: item.when.join(' — '),
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
	<VStack minH="screen" id="experience" class={container()} pt={20} gap={6}>
		<Grid columns={{ base: 1, lg: 2 }} gap={20} w="full">
			<Work />
			<Education />
		</Grid>
	</VStack>
)

export default Experience
