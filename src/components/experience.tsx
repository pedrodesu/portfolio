import type { Component } from 'solid-js'
import { Grid, VStack, Wrap } from 'styled-system/jsx'
import { container } from 'styled-system/patterns'
import List from '@/components/list'
import { Heading } from '@/components/ui/heading'
import * as ExperienceInfo from '@/info/experience'

// TODO: de-duplicate from components/resume.tsx
const Work: Component = () => (
	<Wrap flexDirection="column" gap={6}>
		<Heading textStyle="4xl">Work Experience</Heading>
		<List
			items={ExperienceInfo.WORK.map(item => ({
				...item,
				additional: item.when.join(' — '),
				subtitle: item.at,
			}))}
		/>
	</Wrap>
)

const Education: Component = () => (
	<Wrap flexDirection="column" gap={6}>
		<Heading textStyle="4xl">Projects & Contributions</Heading>
		<List
			items={ExperienceInfo.PROJECTS.map(item => {
				const work = `${item.ownership ?? ExperienceInfo.PROJECT_DEFAULT_OWNER}/${item.name}`
				const link = `${ExperienceInfo.PROJECT_LINK_BASE}/${work}`

				return {
					...item,
					title: work,
					link,
				}
			})}
		/>
	</Wrap>
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
