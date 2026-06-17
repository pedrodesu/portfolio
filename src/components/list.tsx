import { type Component, For } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { Box, HStack, VStack } from 'styled-system/jsx'
import { flex, wrap } from 'styled-system/patterns'
import { Badge } from '@/components/ui/badge'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import IconArrowUpRight from '~icons/tabler/arrow-up-right'

interface Item {
	title: string
	fields: string[]
	subtitle: string
	link: string
	bullets: string[]
}

interface ListProps {
	items: Item[]
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
						<Heading color="gray.11">{item.subtitle}</Heading>
						<Heading
							textStyle="xl"
							data-index={index().toString().padStart(2, '0')}
							class={cx(
								css({
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
								}),
								flex({ align: 'center' }),
							)}
						>
							<span>{item.title}</span>
							<IconArrowUpRight
								class={css({
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
					<VStack alignItems="start" as="ul" listStyleType="circle">
						<For each={item.bullets}>{item => <Text as="li">{item}</Text>}</For>
					</VStack>
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
