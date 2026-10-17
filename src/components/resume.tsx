import { type Component, For, Show } from 'solid-js'
import { SolidMarkdown, type SolidMarkdownOptions } from 'solid-markdown'
import { css } from 'styled-system/css'
import { Box, VStack, Wrap } from 'styled-system/jsx'
import { flex, grid } from 'styled-system/patterns'
import type * as List from '@/components/list'
import { Heading } from '@/components/ui/heading'
import { Link } from '@/components/ui/link'
import { Text } from '@/components/ui/text'
import * as Contact from '@/info/contact'
import * as Description from '@/info/description'
import * as Experience from '@/info/experience'

const mdComponents: SolidMarkdownOptions['components'] = {
	code: props => <code {...props} class={css({ fontFamily: 'mono' })} />,
}

export const TitledBlock: Component<{
	class?: string
	title?: string
	items: {
		title: string
		content: Component
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
				{item => {
					const Content = item.content
					return (
						<li>
							<Heading mb={1}>{item.title}</Heading>
							<Content />
						</li>
					)
				}}
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
	columns: number
	items: List.Item[]
}> = props => (
	<Wrap>
		<Heading textStyle="lg">{props.title}</Heading>
		<Box spaceY={6} columnGap="2rem" style={{ 'column-count': props.columns }}>
			<For each={props.items}>
				{item => (
					<Wrap gap={2} flexDirection="column" breakInside="avoid">
						<Heading fontFamily="body">
							<Text as="span" fontFamily={item.subtitle ? 'unset' : 'title'}>
								{item.title}
							</Text>
							<Show when={item.subtitle}>
								{subtitle => (
									<>
										{' · '}
										<Text display="inline" fontFamily="title">
											{subtitle()}
										</Text>
									</>
								)}
							</Show>
							<Show when={item.additional}>
								{additional => (
									<>
										{' '}
										<Text display="inline" ml={1} textStyle="xs" color="gray.9">
											{additional()}
										</Text>
									</>
								)}
							</Show>
						</Heading>
						<Box spaceY={2}>
							<Show when={item.description}>
								{description => (
									<SolidMarkdown
										children={description()}
										components={mdComponents}
										class={css({
											display: 'block',
											w: 'full',
											textStyle: 'sm',
										})}
									/>
								)}
							</Show>
							<Show when={item.bullets}>
								{bullets => (
									<VStack
										alignItems="start"
										as="ul"
										listStyleType="circle"
										textStyle="sm"
										ml={4}
									>
										<For each={bullets()}>
											{item => (
												<li>
													<SolidMarkdown
														children={item}
														components={mdComponents}
													/>
												</li>
											)}
										</For>
									</VStack>
								)}
							</Show>
						</Box>
						<Text mt={1} textStyle="xs" fontFamily="mono">
							—<span class={css({ ml: 4 })}>{item.fields.join(' · ')}</span>
						</Text>
					</Wrap>
				)}
			</For>
		</Box>
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
				<ExperienceBlock
					title="Work Experience"
					columns={1}
					items={Experience.WORK.map(item => ({
						...item,
						additional: item.when.join(' — '),
						subtitle: item.at,
					}))}
				/>
				<ExperienceBlock
					title="Projects & Contributions"
					columns={2}
					items={Experience.PROJECTS.map(item => {
						const work = `${item.ownership ?? Experience.PROJECT_DEFAULT_OWNER}/${item.name}`
						const link = `${Experience.PROJECT_LINK_BASE}/${work}`

						return {
							...item,
							title: work,
							link,
						}
					})}
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
					{ value: Contact.EMAIL, hrefFn: v => `mailto:${v}` },
					{ value: Contact.PHONE, hrefFn: v => `tel:${v}` },
					{ value: Contact.GITHUB, hrefFn: v => `https://${v}` },
					{ value: Contact.WEBSITE, hrefFn: v => `https://${v}` },
				]}
			/>
			<TitledBlock
				title="Skills"
				items={[
					{
						title: 'Languages',
						content: () => (
							<Text fontFamily="mono" fontSize="xs">
								{[
									'Rust',
									'HTML',
									'CSS',
									'JavaScript/TypeScript',
									'Golang',
									'C',
									'Java',
								].join(' · ')}
							</Text>
						),
					},
					{
						title: 'Technologies & Environments',
						content: () => (
							<Text fontFamily="mono" fontSize="xs">
								{[
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
								].join(' · ')}
							</Text>
						),
					},
					{
						title: 'Tooling & Platforms',
						content: () => (
							<Text fontFamily="mono" fontSize="xs">
								{['Git', 'Docker', 'CI/CD pipelines'].join(' · ')}
							</Text>
						),
					},
				]}
			/>
			<TitledBlock
				title="Education"
				items={[
					{
						title: 'Universidade do Minho',
						content: () => (
							<Wrap>
								<Text>
									Undergraduate Coursework in CS
									<Text as="span" display="inline" ml={1} color="gray.9">
										— 2024
									</Text>
								</Text>
								<Text>Functional programming & OOP systems</Text>
								<Text fontFamily="mono" fontSize="xs">
									— Haskell · C · Java
								</Text>
							</Wrap>
						),
					},
					{
						title: '42 Porto',
						content: () => (
							<Wrap>
								<Text>
									Software Engineering Curriculum
									<Text as="span" display="inline" ml={1} color="gray.9">
										— 2022
									</Text>
								</Text>
								<Text>
									Unix-compliant engineering & peer-to-peer methodology
								</Text>
								<Text fontFamily="mono" fontSize="xs">
									— *nix · Shell · C · C++
								</Text>
							</Wrap>
						),
					},
				]}
			/>
		</VStack>
	</div>
)

export default Resume
