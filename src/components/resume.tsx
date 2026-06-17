import { type Component, For, Show } from 'solid-js'
import { css } from 'styled-system/css'
import { Box, VStack, Wrap } from 'styled-system/jsx'
import { flex, grid } from 'styled-system/patterns'
import { Heading } from '@/components/ui/heading'
import { Link } from '@/components/ui/link'
import { Text } from '@/components/ui/text'
import * as Description from '@/info/description'
import * as Experience from '@/info/experience'

export const SimpleBlock: Component<{
	title?: string
	items: string[]
}> = props => (
	<Box>
		<Show when={props.title}>
			{t => (
				<Heading textStyle="lg" mb={2}>
					{t()}
				</Heading>
			)}
		</Show>
		<VStack as="ul" textStyle="sm" alignItems="start" gap={1}>
			<For each={props.items}>{item => <Text as="li">{item}</Text>}</For>
		</VStack>
	</Box>
)

export const TitledBlock: Component<{
	class?: string
	title?: string
	items: {
		title: string
		description: string
	}[]
}> = props => (
	<Box>
		<Show when={props.title}>
			{t => (
				<Heading textStyle="lg" mb={2}>
					{t()}
				</Heading>
			)}
		</Show>
		<VStack as="ul" textStyle="sm" alignItems="start" gap={4}>
			<For each={props.items}>
				{item => (
					<li>
						<Heading mb={1}>{item.title}</Heading>
						<Text class={props.class}>{item.description}</Text>
					</li>
				)}
			</For>
		</VStack>
	</Box>
)

export const LinkBlock: Component<{
	items: {
		value: string
		hrefFn: (val: string) => string
	}[]
}> = props => (
	<VStack as="ul" textStyle="sm" alignItems="start" gap={1}>
		<For each={props.items}>
			{item => (
				<li>
					<Link href={item.hrefFn(item.value)}>{item.value}</Link>
				</li>
			)}
		</For>
	</VStack>
)

export const ExperienceBlock: Component<{
	title: string
	items: Experience.Item[]
}> = props => (
	<Wrap>
		<Heading textStyle="lg">{props.title}</Heading>
		<VStack as="ul" alignItems="start" gap={4}>
			<For each={props.items}>
				{item => (
					<Wrap as="li">
						<Heading fontFamily="body">
							{item.role} ·{' '}
							<Text display="inline" fontFamily="title">
								{item.at}
							</Text>{' '}
							<Text display="inline" ml={1} textStyle="xs" color="gray.9">
								{item.when.join(' — ')}
							</Text>
						</Heading>
						<VStack
							alignItems="start"
							as="ul"
							listStyleType="circle"
							textStyle="sm"
							ml={4}
						>
							<For each={item.bullets}>
								{item => <Text as="li">{item}</Text>}
							</For>
						</VStack>
						<Text mt={1} ml={4} textStyle="xs" fontFamily="mono">
							{item.fields.join(' · ')}
						</Text>
					</Wrap>
				)}
			</For>
		</VStack>
	</Wrap>
)

const Resume: Component = () => (
	<div class={grid({ columns: 3, gap: '16' })}>
		<section class={css({ gridColumn: 'span 2' })}>
			<header class={flex({ direction: 'column', pb: '4' })}>
				<Heading textStyle="5xl">Pedro Nobre</Heading>
				<Heading color="gray.11" textStyle="2xl" pb={4}>
					Systems & UI Engineer
				</Heading>
				<Text textStyle="sm">{Description.SHORT}</Text>
			</header>

			<Wrap gap={8}>
				<ExperienceBlock title="Work Experience" items={Experience.WORK} />
				<ExperienceBlock
					title="Formal Education"
					items={Experience.EDUCATION}
				/>
			</Wrap>
		</section>

		<VStack
			as="aside"
			alignItems="start"
			gap={4}
			class={css({ gridColumn: 'span 1' })}
		>
			<LinkBlock
				items={[
					{ value: 'me@pedrodesu.xyz', hrefFn: v => `mailto:${v}` },
					{ value: '+351 965 691 292', hrefFn: v => `tel:${v}` },
					{ value: 'github.com/pedrodesu', hrefFn: v => `https://${v}` },
					{ value: 'pedrodesu.xyz', hrefFn: v => `https://${v}` },
				]}
			/>
			<TitledBlock
				title="Skills"
				class={css({ fontFamily: 'mono', fontSize: 'xs' })}
				items={[
					{
						title: 'Programming languages',
						description: [
							'Rust',
							'Zig',
							'HTML',
							'CSS',
							'JavaScript/TypeScript',
							'Golang',
							'C',
							'Java',
						].join(' · '),
					},
					{
						title: 'Technologies & Environments',
						description: [
							'node.js',
							'Bun',
							'Deno.js',
							'tokio',
							'Solid.js',
							'React',
							'Next.js',
							'Tailwind CSS',
							'Panda CSS',
							'styled-components',
							'MongoDB',
							'SQL',
							'LLVM',
							'*nix',
						].join(' · '),
					},
					{
						title: 'Tooling & Platforms',
						description: [
							'Git',
							'GitHub',
							'Netlify',
							'Vercel',
							'Heroku',
							'Firebase',
							'Docker',
						].join(' · '),
					},
				]}
			/>
			<TitledBlock
				title="Languages"
				items={[
					{ title: 'Portuguese', description: 'Native Proficiency' },
					{ title: 'English', description: 'Full Professional Proficiency' },
					{ title: 'Spanish', description: 'Professional Working Proficiency' },
					{ title: 'French', description: 'Limited Working Proficiency' },
				]}
			/>
			<SimpleBlock
				title="Interests"
				items={[
					'Gaming, powerlifting & nutrition, open-source, Linux ricing & hardening',
				]}
			/>
		</VStack>
	</div>
)

export default Resume
