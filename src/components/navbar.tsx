import { type Component, For } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { Box, HStack } from 'styled-system/jsx'
import { container, flex } from 'styled-system/patterns'
import { Button, ButtonGroup } from '@/components/ui/button'
import { Link } from '@/components/ui/link'
import IconArrowDown from '~icons/tabler/arrow-down'
import IconSend from '~icons/tabler/send'

const LINKS = [
	{
		title: 'About me',
		href: '#about_me',
	},
	{
		title: 'Experience',
		href: '#experience',
	},
]

const Navbar: Component = () => (
	<header
		class={cx(
			container(),
			flex({
				align: 'center',
				justify: 'space-between',
			}),
			css({
				w: 'full',
				h: 14,
				position: 'fixed',
				top: 0,
				zIndex: 'sticky',
				bg: 'bg',
				borderBottom: '1px solid',
				borderBottomColor: 'border',
			}),
		)}
	>
		<HStack as="ul" gap={{ base: 6, sm: 8 }}>
			<For each={LINKS}>
				{item => (
					<Box as="li" py="1rem">
						<Link href={item.href} variant="plain" textStyle="sm">
							{item.title}
						</Link>
					</Box>
				)}
			</For>
		</HStack>
		<ButtonGroup>
			<Button
				size="sm"
				variant="surface"
				asChild={props => (
					<a href={`mailto:me@pedrodesu.xyz`} {...props()}>
						<span class={css({ display: 'none', sm: { display: 'inline' } })}>
							Email me
						</span>
						<IconSend />
					</a>
				)}
			/>
			<Button
				size="sm"
				variant="subtle"
				asChild={props => (
					<a target="_blank" rel="noopener" href="/resume.pdf" {...props()}>
						<span class={css({ display: 'none', sm: { display: 'inline' } })}>
							Résumé
						</span>
						<IconArrowDown />
					</a>
				)}
			/>
		</ButtonGroup>
	</header>
)

export default Navbar
