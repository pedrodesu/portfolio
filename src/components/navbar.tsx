import { type Component, For } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { Box, HStack } from 'styled-system/jsx'
import { container, flex } from 'styled-system/patterns'
import { Button, ButtonGroup } from '@/components/ui/button'
import { Link } from '@/components/ui/link'
import * as Contact from '@/info/contact'
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
		data-scrolled="false"
		class={cx(
			container({
				position: 'fixed',
			}),
			flex({
				align: 'center',
				justify: 'space-between',
			}),
			css({
				w: 'full',
				h: 14,
				top: 0,
				zIndex: 'sticky',
				bg: 'transparent',
				borderBottom: '1px solid',
				borderBottomColor: 'border',
				transition: 'all .25s',
				'&[data-scrolled="true"]': {
					backdropFilter: 'blur(48px)',
					borderBottomColor: 'transparent',
				},
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
					<a href={`mailto:${Contact.EMAIL}`} {...props()}>
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
