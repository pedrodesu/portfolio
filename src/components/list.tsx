import { type Component, For } from 'solid-js'
import { css } from 'styled-system/css'
import { Box, HStack, VStack, Wrap } from 'styled-system/jsx'
import { Badge } from '@/components/ui/badge'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'

interface Item {
	title: string
	fields: string[]
	when: [string] | [string, string]
	bullets: string[]
}

interface ListProps {
	items: Item[]
}

const List: Component<ListProps> = ({ items }) => (
	<VStack alignItems="start" gap={8} as="ul" pl={{ base: 0, sm: 10 }}>
		<For each={items}>
			{(item, index) => (
				<Wrap as="li">
					<Box>
						<Heading color="gray.11">{item.when.join(' — ')}</Heading>
						<Heading
							textStyle="xl"
							data-index={index().toString().padStart(2, '0')}
							class={css({
								position: 'relative',
								_before: {
									display: 'none',
									sm: { display: 'block' },
									fontFamily: 'mono',
									fontSize: 'md',
									fontWeight: 'bolder',
									color: 'gray.4',
									content: 'attr(data-index) "."',
									position: 'absolute',
									top: 0,
									left: '-2.5rem',
									paddingTop: '0.1cap',
								},
							})}
						>
							{item.title}
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
				</Wrap>
			)}
		</For>
	</VStack>
)

export default List
