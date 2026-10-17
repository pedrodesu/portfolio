import { type Component, For, Show } from 'solid-js'
import { SolidMarkdown, type SolidMarkdownOptions } from 'solid-markdown'
import { css, cx } from 'styled-system/css'
import { Box, HStack, VStack } from 'styled-system/jsx'
import { wrap } from 'styled-system/patterns'
import { Badge } from '@/components/ui/badge'
import { Heading } from '@/components/ui/heading'
import IconArrowUpRight from '~icons/tabler/arrow-up-right'

// TODO: de-duplicate from components/resume.tsx

export interface Item {
	title: string
	subtitle?: string
	additional?: string
	description?: string
	fields: string[]
	link: string
	bullets?: string[]
}

interface ListProps {
	items: Item[]
}

const mdComponents: SolidMarkdownOptions['components'] = {
	code: props => <code {...props} class={css({ fontFamily: 'mono' })} />,
}

const List: Component<ListProps> = ({ items }) => (
	<VStack alignItems="start" gap={8} as="ul">
		<For each={items}>
			{(item, index) => (
				<a
					href={item.link}
					target="_blank"
					rel="noopener"
					class={cx(wrap(), 'group')}
				>
					<Box>
						<Show when={item.additional}>
							{additional => <Heading color="gray.11">{additional()}</Heading>}
						</Show>
						<Heading
							textStyle="xl"
							data-index={index().toString().padStart(2, '0')}
							class={css({
								position: 'relative',
								_before: {
									display: 'none',
									lg: { _landscape: { display: 'block' } },
									sm: { _portrait: { display: 'block' } },
									fontFamily: 'mono',
									fontSize: 'md',
									fontWeight: 'bolder',
									color: 'gray.4',
									content: 'attr(data-index) "."',
									position: 'absolute',
									top: 0,
									left: -10,
									paddingTop: '0.1cap',
								},
							})}
						>
							{item.title}
							<Show when={item.subtitle}>
								{subtitle => <> · {subtitle()}</>}
							</Show>
							<IconArrowUpRight
								class={css({
									display: 'inline-block',
									verticalAlign: 'middle',
									fontSize: 'md',
									translate: 'auto',
									transition: 'all',
									_groupHover: {
										x: '0.5',
										y: '-0.5',
									},
								})}
							/>
						</Heading>
					</Box>
					<Show when={item.description}>
						{description => (
							<SolidMarkdown
								children={description()}
								components={mdComponents}
								class={css({ display: 'block', w: 'full' })}
							/>
						)}
					</Show>
					<Show when={item.bullets}>
						{bullets => (
							<VStack alignItems="start" as="ul" listStyleType="circle">
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
					<HStack as="ul" pt={2} flexWrap="wrap">
						<For each={item.fields}>
							{field => (
								<Badge
									as="li"
									variant="outline"
									size="2xl"
									fontFamily="mono"
									fontSize="sm"
									fontWeight="medium"
									letterSpacing="tighter"
								>
									{field}
								</Badge>
							)}
						</For>
					</HStack>
				</a>
			)}
		</For>
	</VStack>
)

export default List
