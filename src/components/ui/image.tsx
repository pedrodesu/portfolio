import { getImage } from 'astro:assets'
import { createResource, Show, splitProps } from 'solid-js'
import { styled } from 'styled-system/jsx'
import type { HTMLStyledProps, SystemStyleObject } from 'styled-system/types'

interface ImageOptions {
	/**
	 * How the image to fit within its bounds.
	 * It maps to css `object-fit` property.
	 * @type SystemStyleObject["objectFit"]
	 */
	fit?: SystemStyleObject['objectFit'] | undefined
	/**
	 * How to align the image within its bounds.
	 * It maps to css `object-position` property.
	 * @type SystemStyleObject["objectPosition"]
	 */
	alignment?: SystemStyleObject['objectPosition'] | undefined
}

export interface ImageProps
	extends Omit<HTMLStyledProps<'img'>, 'src'>,
		ImageOptions {
	/**
	 * The imported image to optimize. Pass the ESM import itself (an
	 * `ImageMetadata` object), not its `.src` string, so the dimensions and
	 * format can be inferred.
	 */
	src: string | ImageMetadata
}

const StyledImage = styled('img')

export const Image = (props: ImageProps) => {
	const [local, rest] = splitProps(props, ['alignment', 'fit', 'src'])

	// Astro's `<Image>` is an Astro component and cannot be rendered from inside
	// a Solid component. `getImage` is the framework-agnostic equivalent: it
	// returns the optimized `src` and the resulting `img` attributes.
	const [image] = createResource(
		() => local.src,
		src => getImage({ src }),
	)

	return (
		<Show when={image()}>
			{resolved => (
				<StyledImage
					src={resolved().src}
					{...resolved().attributes}
					width={resolved().options.width}
					height={resolved().options.height}
					objectFit={local.fit ?? 'cover'}
					objectPosition={local.alignment}
					{...rest}
				/>
			)}
		</Show>
	)
}
