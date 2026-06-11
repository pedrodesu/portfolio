import { type Component, For } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { Box, HStack, VStack } from 'styled-system/jsx'
import { container, flex } from 'styled-system/patterns'
import github from '@/assets/github.png'
import linkedin from '@/assets/linkedin.png'
import me from '@/assets/me.jpg'
import { Heading } from '@/components/ui/heading'
import { Image } from '@/components/ui/image'
import { Text } from '@/components/ui/text'
import * as Description from '@/info/description'

const SOCIALS = [
	{
		icon: linkedin,
		url: 'https://linkedin.com/in/pedronmferreira/',
	},
	{ icon: github, url: 'https://github.com/pedrodesu' },
]

const Landing: Component = () => (
	<Box
		class={cx(
			flex({
				alignItems: 'center',
				gap: { base: 10, xl: 20, '2xl': 30 },
			}),
			container(),
			css({ scrollSnapAlign: 'start', pt: 10, lg: { pt: 0 } }),
		)}
		minH="screen"
		id="about_me"
	>
		<VStack
			h="full"
			justify="center"
			alignItems="start"
			gap={{ base: 4, lg: 8 }}
			flex={1}
		>
			<Box>
				<Heading textStyle={{ base: '4xl', lg: '6xl' }}>Pedro Nobre</Heading>
				<Heading textStyle={{ base: 'xl', sm: '2xl' }} color="gray.11">
					Systems & UI Engineer
				</Heading>
			</Box>
			<Text textStyle={{ base: 'lg', sm: 'md', lg: 'lg' }}>
				{Description.LONG}
			</Text>
			<HStack gap={4}>
				<For each={SOCIALS}>
					{({ icon, url }) => (
						<a href={url} target="_blank" rel="noopener">
							<Image h={8} src={icon.src} />
						</a>
					)}
				</For>
			</HStack>
		</VStack>
		<Box
			class="group"
			p={3}
			border="1px solid"
			borderColor="border"
			rounded="l5"
			h="75vh"
			maxH={{ base: '400px', xl: '550px' }}
			display={{ base: 'none', lg: 'block' }}
		>
			<Image
				rounded="l3"
				h="full"
				w="auto"
				objectFit="cover"
				objectPosition="center"
				aspectRatio="square"
				src={me.src}
				filter="auto"
				grayscale={1}
				class={css({
					_groupHover: { grayscale: 0 },
					transition: 'all',
					transitionDuration: 'slowest',
				})}
			/>
		</Box>
	</Box>
)

export default Landing
