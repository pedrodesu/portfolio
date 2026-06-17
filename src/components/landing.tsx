import { type Component, For } from 'solid-js'
import { css } from 'styled-system/css'
import { Box, Center, HStack, Wrap } from 'styled-system/jsx'
import { container } from 'styled-system/patterns'
import me from '@/assets/me.jpg'
import { Heading } from '@/components/ui/heading'
import { Image } from '@/components/ui/image'
import { Text } from '@/components/ui/text'
import * as Description from '@/info/description'
import IconBrandGithubFilled from '~icons/tabler/brand-github-filled'
import IconBrandLinkedinFilled from '~icons/tabler/brand-linkedin-filled'

const SOCIALS = [
	{
		icon: IconBrandLinkedinFilled,
		url: 'https://linkedin.com/in/pedronmferreira/',
	},
	{ icon: IconBrandGithubFilled, url: 'https://github.com/pedrodesu' },
]

const Landing: Component = () => (
	<Center
		gap={{ base: 10, xl: 20, '2xl': 30 }}
		pt={{ base: { base: 14, _portrait: 0 }, lg: 0 }}
		class={container()}
		minH="screen"
		id="about_me"
	>
		<Wrap gap={{ base: 4, lg: 8 }} flex={1}>
			<Box>
				<Heading textStyle={{ base: '2xl', lg: '6xl' }}>Pedro Nobre</Heading>
				<Heading textStyle={{ base: 'lg', lg: '2xl' }} color="gray.11">
					Systems & UI Engineer
				</Heading>
			</Box>
			<Text textStyle={{ sm: 'md', lg: 'lg' }}>{Description.LONG}</Text>
			<HStack gap={4}>
				<For each={SOCIALS}>
					{({ icon: Icon, url }) => (
						<a
							href={url}
							target="_blank"
							rel="noopener"
							class={css({
								fontSize: { base: '2xl', lg: '3xl' },
								color: 'fg.muted',
								transition: 'all',
								_hover: { color: 'fg.default' },
							})}
						>
							<Icon />
						</a>
					)}
				</For>
			</HStack>
		</Wrap>
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
	</Center>
)

export default Landing
