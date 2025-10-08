import { Dialog } from "@ark-ui/solid/dialog";
import "@fontsource/cal-sans";
import "@fontsource/metropolis/100.css";
import "@fontsource/metropolis/200.css";
import "@fontsource/metropolis/300.css";
import "@fontsource/metropolis/400.css";
import "@fontsource/metropolis/500.css";
import "@fontsource/metropolis/600.css";
import "@fontsource/metropolis/700.css";
import "@fontsource/metropolis/800.css";
import "@fontsource/metropolis/900.css";
import {
	IconArrowRight,
	IconArrowUpRight,
	IconBrandGithubFilled,
	IconBrandLinkedinFilled,
	IconChevronsDown,
	IconFileCvFilled,
	IconMenu,
} from "@tabler/icons-solidjs";
import { animate, createTimeline, onScroll, splitText, stagger } from "animejs";
import { type Component, For, onMount, Show } from "solid-js";
import { Portal } from "solid-js/web";
import twemoji from "twemoji";
import { css, cx } from "../../styled-system/css";
import {
	center,
	container,
	flex,
	hstack,
	vstack,
} from "../../styled-system/patterns";
import BottomWaves from "../assets/bottom-waves.svg";
import TopWaves from "../assets/top-waves.svg";
import { SectionProvider, useSection } from "../context/sections";

function Landing() {
	let header!: HTMLHeadingElement;
	let muteText!: HTMLDivElement;
	let chevronRef!: SVGSVGElement;

	onMount(() => {
		const { chars } = splitText(header, { chars: { wrap: "clip" } });

		animate(chars, {
			y: ["100%", "0%"],
			duration: 1000,
			ease: "inOut(3)",
			delay: stagger(20),
		});

		const scrollAnim = animate(muteText, {
			opacity: [1, 0.75],
			duration: 1000,
			delay: 4000,
			ease: "inOutQuad",
			alternate: true,
			loop: true,
		});

		createTimeline()
			.sync(scrollAnim)
			.add(
				muteText,
				{
					y: ["15%", "0%"],
					alternate: true,
					loop: true,
					loopDelay: 2000,
				},
				"+4000",
			);
	});

	return (
		<section
			class={center({
				position: "relative",
				minH: "100vh",
				bg: "#151515",
				pb: "10rem",
			})}
		>
			<div class={container()}>
				<h1
					ref={header}
					class={css({
						fontSize: { base: "4xl", xl: "6xl" },
						fontWeight: "semibold",
						textTransform: "uppercase",
					})}
				>
					Hi. I'm <span class={css({ color: "blue.300" })}>Pedro</span>. Let's
					work together!
				</h1>
			</div>

			<div
				ref={muteText}
				class={cx(
					vstack({ gap: 1 }),
					css({
						position: "absolute",
						fontSize: { base: "lg", xl: "xl" },
						bottom: "5rem",
						textTransform: "uppercase",
						color: "zinc.400",
						zIndex: 10,
					}),
				)}
			>
				<span>Scroll down</span>
				<IconChevronsDown ref={chevronRef} size={20} />
			</div>

			<TopWaves
				class={css({ position: "absolute", bottom: 0, left: 0, width: "100%" })}
			/>
		</section>
	);
}

function About() {
	return (
		<section
			class={flex({
				direction: "column",
				justify: "center",
				minW: "100vw",
				minH: "100vh"
			})}
		>
			<div class={cx(container(), vstack({ gap: 10, alignItems: "start" }))}>
				<h4
					class={css({
						fontSize: "2xl",
						fontWeight: "semibold",
						textTransform: "uppercase",
						color: "blue.300",
					})}
				>
					A bit about myself
				</h4>
				<p
					class={css({
						fontFamily: "Metropolis",
						fontSize: { base: "xl", xl: "3xl" },
						fontWeight: "medium",
						letterSpacing: "-0.5px",
						lineHeight: "1.5",
						whiteSpace: "pre-wrap",
					})}
				>
					I'm a self-taught software engineer with over a decade of free
					experimentation and software craftsmanship, with a desire to grow both
					as a person and a problem-solver.
					{"\n\n"}
					With a foundation laid down early by my father, who's also a software
					engineer, I've cultivated resilience and adaptability that empower me
					to thrive in the ever-evolving tech landscape.
					{"\n\n"}I love creating software that works but I also enjoy designing
					and building beautiful digital experiences. I preach for privacy,
					freedom and open-source. When I'm not coding I'm probably lifting
					weights, gaming or reading.
				</p>
			</div>
		</section>
	);
}

interface IElement {
	title: string;
	subtitle?: string;
	fields: string[];
	time: [string] | [string, string];
	link?: string;
	description: string;
}

function Timeline() {
  let sectionRef!: HTMLElement;

	const EXPERIENCES: IElement[] = [
		{
			title: "Software Engineer",
			subtitle: "01Talent",
			fields: ["Go", "Rust", "JavaScript", "Shell Scripting"],
			time: ["November 2024"],
			link: "https://01talent.com/",
			description:
				"Where I work at right now! 01Talent is a wonderful talent management agency that helps companies attract, retain and develop talent in the tech industry. It has some common ground with 42 and is also staffed by some of its best alumni globally. I'm part of the amazing team that manages and develops its content for students all over the world.",
		},
		{
			title: "Bachelor's in Computer Science",
			subtitle: "Universidade do Minho",
			fields: ["Haskell", "C"],
			time: ["September 2024"],
			link: "https://www.uminho.pt/PT",
			description:
				"I enrolled in university. Even though I don't see formal education as a big necessity, I do believe I could find genuine value and experiences here to grow as a person and as a developer in some areas.",
		},
		{
			title: "portfolio",
			fields: ["TypeScript", "Solid.js", "PandaCSS"],
			time: ["July 2024"],
			link: "https://github.com/pedrodesu/portfolio",
			description: "The website you're seeing right now :)",
		},
		{
			title: "gamin.gg",
			fields: ["TypeScript", "React", "Next.js", "TailwindCSS"],
			time: ["July 2024"],
			description: "A conceptual ecommerce web application. Work in progress.",
		},
		{
			title: "sundae",
			fields: ["Rust", "Compiler Architecture", "LLVM"],
			time: ["June 2023"],
			link: "https://github.com/pedrodesu/sundae",
			description: "A language with a handcrafted compiler.",
		},
		{
			title: "Student",
			subtitle: "42 Porto",
			fields: ["C", "C++", "GNU/Linux"],
			time: ["2022", "2024"],
			link: "https://42.fr/",
			description:
				"I saw this as a major opportunity to better link myself with the tech industry, make new like-minded peers and develop soft skills, as well as sharpen my knowledge on programming, specifically C and C++.",
		},
		{
			title: "Pisciner",
			subtitle: "42 Porto",
			fields: ["Shell Scripting", "C"],
			time: ["July", "August 2022"],
			link: "https://42.fr/",
			description:
				"A world-renowned, innovative school to learn the fundamentals about and improve on everything regarding technology, specifically software engineering. This was the test period which led me to being admitted into 42 Porto.",
		},
		{
			title: "yew-feather",
			fields: ["Rust", "Yew", "WebAssembly"],
			time: ["2022"],
			link: "https://github.com/pedrodesu/yew-feather",
			description: "Simple wrapper around feather-icons for Yew.",
		},
	];

	return (
		<section
		  ref={sectionRef}
			class={flex({
				direction: "column",
				justify: "center",
				minW: "100vw",
				minH: "100vh",
				py: 20
			})}
		>
			<div
				class={cx(
					container(),
					vstack({ justify: "center", gap: 10, alignItems: "start", w: "full" }),
				)}
			>
				<h4
					class={css({
						fontSize: "2xl",
						fontWeight: "semibold",
						textTransform: "uppercase",
						color: "blue.300",
						position: "sticky",
            top: "-1rem",
            pt: "3rem",
            pb: "2rem",
            w: "full",
            bg: "#000",
            zIndex: 10,
					})}
				>
					My timeline
				</h4>

				<ul
					class={vstack({
						gap: 14,
						alignItems: "start",
						overflowY: "auto",
						h: "1/4",
						w: "full"
					})}
				>
					<For each={EXPERIENCES}>
						{(e) => {
							const fullTitle = (
								<>
									{e.title}
									<Show when={e.subtitle}>{` · ${e.subtitle}`}</Show>
									<Show when={e.link}>
										<span
											class={css({
												display: "inline-block",
												verticalAlign: "sub",
												transition: "transform",
												_groupHover: {
													transform: "translateX(2px) translateY(-1px)",
												},
											})}
										>
											<IconArrowUpRight size={20} />
										</span>
									</Show>
								</>
							);

							return (
								<li
									class={css({
										fontSize: { base: "lg", xl: "xl" },
										letterSpacing: "0.5px",
									})}
								>
									<p
										class={css({
											fontSize: { base: "md", xl: "lg" },
											color: "gray.500",
											mb: "0.25rem",
										})}
									>
										{e.time[0]}
										<Show when={e.time[1]}>{(t) => ` — ${t()}`}</Show>
									</p>
									<Show when={e.link} fallback={<span>{fullTitle}</span>}>
										<a
											href={e.link}
											target="_blank"
											rel="noreferrer"
											class={cx(
												"group",
												css({ display: "inline-block", gap: 1 }),
											)}
										>
											{fullTitle}
										</a>
									</Show>
									<p
										class={css({
											fontFamily: "Metropolis",
											fontWeight: "medium",
											letterSpacing: "-0.2px",
											mt: "0.5rem",
											color: "gray.300",
										})}
									>
										{e.description}
									</p>
									<ul
										class={hstack({
											gap: 2,
											mt: "1rem",
											fontSize: { base: "sm", xl: "lg" },
											flexWrap: "wrap"
										})}
									>
										<For each={e.fields}>
											{(field) => (
												<li
													class={css({
														letterSpacing: "0.5px",
														color: "blue.300",
														bg: "blue.300/15",
														px: "1rem",
														py: "0.5rem",
														rounded: "xl",
													})}
												>
													{field}
												</li>
											)}
										</For>
									</ul>
								</li>
							);
						}}
					</For>
				</ul>
			</div>
		</section>
	);
}

function Footer() {
  let sectionRef!: HTMLElement;
  let footerTextRef!: HTMLParagraphElement;

	const SOCIALS = [
		{
			icon: IconBrandLinkedinFilled,
			url: "https://linkedin.com/in/pedronmferreira/",
		},
		{ icon: IconBrandGithubFilled, url: "https://github.com/pedrodesu" },
		{ icon: IconFileCvFilled, url: "/cv.pdf" },
	] satisfies Array<{ icon: Component; url: string }>;

	const { addRef } = useSection();

	onMount(() => {
    addRef("contact", sectionRef);

		twemoji.parse(footerTextRef, {
			className: css({ display: "inline", height: { base: 4, xl: 6 } }),
		});
	});

	return (
		<section
		  ref={sectionRef}
			class={flex({ position: "relative", minH: "100vh", bg: "#151515" })}
		>
			<BottomWaves
				class={css({ position: "absolute", top: 0, left: 0, width: "100%" })}
			/>

			<div
				class={cx(
					container(),
					vstack({
						gap: 32,
						justify: "center",
						alignItems: "start",
						pt: "10rem",
						pb: "2rem"
					}),
				)}
			>
				<div class={vstack({ gap: 10, alignItems: "start" })}>
					<h4
						class={css({
							fontSize: { base: "4xl", xl: "6xl" },
							fontWeight: "semibold",
							textTransform: "uppercase",
						})}
					>
						Let's build great things together.
					</h4>
					<p
						class={css({
							fontFamily: "Metropolis",
							fontSize: { base: "md", xl: "xl" },
							fontWeight: "medium",
							color: "zinc.300",
						})}
					>
						I'm more active on LinkedIn, but feel free to reach out in any of
						the following ways and I'll get back to you as soon as possible.
					</p>
					<hr class={css({ w: "100%", borderColor: "zinc.800" })} />
					<div
						class={flex({
							gap: { base: 8, xl: 16 },
							direction: { base: "column", xl: "row" },
							alignItems: { xl: "center" },
							w: "full",
						})}
					>
						<a
							href="mailto:me@pedrodesu.xyz"
							class={cx(
								"group",
								hstack({
									gap: 2.5,
									w: { base: "full", xl: "fit" },
									justifyContent: "center",
									bg: "blue.300",
									color: "zinc.950",
									px: 8,
									py: 4,
									rounded: "2xl",
									fontSize: { base: "lg", xl: "xl" },
									_hover: { bg: "white" },
									transition: "colors",
								}),
							)}
						>
							<span>Email me</span>
							<span
								class={css({
									_groupHover: { transform: "translateX(2px)" },
									transition: "transform",
								})}
							>
								<IconArrowRight size={20} stroke-width={2.5} />
							</span>
						</a>
						<ul class={hstack({ gap: 0 })}>
							<For each={SOCIALS}>
								{({ icon: Icon, url }) => (
									<li>
										<a
											class={cx("group", flex({ p: "1.5rem" }))}
											href={url}
											target="_blank"
											rel="noreferrer"
										>
											<Icon
												class={css({
													color: "zinc.300",
													_groupHover: { color: "white" },
													transition: "colors",
												})}
												size={28}
											/>
										</a>
									</li>
								)}
							</For>
						</ul>
					</div>
				</div>
				<div
		      class={cx(
						css({
  						fontFamily: "Metropolis",
  						fontWeight: "medium",
  						fontSize: { base: "md", xl: "xl" },
  						color: "zinc.200",
  					}),
						vstack({ gap: "1rem", alignItems: "start" })
					)}
				>
          <p>
   					Proudly powered by{" "}
   					<a href="https://www.solidjs.com/" target="_blank" rel="noreferrer">Solid.js</a>
            {" "}and hosted by{" "}
   					<a href="https://vercel.com/" target="_blank" rel="noreferrer">Vercel</a>.
  				</p>
          <p ref={footerTextRef}>
   					Handcrafted and designed with ❤️ in 🇵🇹 by Pedro Ferreira.
  				</p>
				</div>
			</div>
		</section>
	);
}

function Menu() {
	let dialogContentRef!: HTMLDivElement;

  const SECTIONS = [
    ['about', 'About me'],
    ['timeline', 'Timeline'],
    ['contact', 'Contact']
  ] satisfies Array<[string, string]>;

  const { refs } = useSection();

	return (
		<Dialog.Root>
			<Portal>
				<Dialog.Trigger
					class={css({
						position: "fixed",
						p: "2rem",
						top: 0,
						right: 0,
						cursor: "pointer",
						pointerEvents: "auto",
						zIndex: 1000,
						"& > svg > *": { transition: "transform 200ms ease-in-out" },
						'&[data-state="open"] > svg > *:nth-child(1)': {
							transform: "rotate(45deg) translateX(5px) translateY(-8px)",
						},
						'&[data-state="open"] > svg > *:nth-child(2)': {
							transform: "rotate(-45deg) translateX(-12px) translateY(1px)",
						},
					})}
				>
					<IconMenu size={36} />
				</Dialog.Trigger>

				<Dialog.Backdrop
				  class={css({
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 100,
            pointerEvents: "auto",
            background: "rgba(0, 0, 0, 0.75)",
            "&[data-state=open]": {
              animation: 'dialogBackdropIn 0.25s ease-in-out forwards'
            },
            "&[data-state=closed]": {
              animation: 'dialogBackdropOut 0.25s ease-in-out forwards'
            },
          })}
        />

				<Dialog.Positioner
					class={cx(
						css({
							position: "fixed",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							zIndex: 100,
						}),
						center(),
					)}
				>
					<Dialog.Content
						ref={dialogContentRef}
						class={css({
    				  "&[data-state=open]": {
                animation: 'dialogContentIn 0.25s ease-in-out forwards'
              },
              "&[data-state=closed]": {
                animation: 'dialogContentOut 0.25s ease-in-out forwards'
              },
            })}
					>
						<ul class={vstack({ gap: 4, fontSize: "3rem" })}>
						  <For each={SECTIONS}>
								{
 									([link, title]) => (
 									  <li>
                      <Dialog.CloseTrigger onClick={() => {
                        // biome-ignore lint/style/noNonNullAssertion: Refs are hardcoded and guaranteed to be defined
                        const ref = link === "timeline" ? refs().get("about")! : refs().get(link)!;
                        if (link === "timeline") {
                          window.scrollTo({
                            top: ref.getBoundingClientRect().top + scrollY + (110 / 100) * innerHeight,
                            behavior: "smooth"
                          });
                        } else {
                          ref.scrollIntoView({ behavior: "smooth" });
                        }
                      }}>
                        {title}
                      </Dialog.CloseTrigger>
                    </li>
 									)
								}
							</For>
						</ul>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	);
}

function HorizontalWrapper() {
	let divRef!: HTMLDivElement;
	let containerRef!: HTMLDivElement;

	const { addRef } = useSection();

	onMount(() => {
	  addRef("about", containerRef);

		animate(divRef, {
			x: ["0%", "-100%"],
			ease: "inOutQuad",
			autoplay: onScroll({
				target: containerRef,
				sync: true,
				enter: "top top",
				leave: "bottom center",
			}),
		});
	});

	return (
		<div ref={containerRef} class={css({ minH: { base: "500vh", xl: "300vh" }, bg: "#000", })}>
			<div
				ref={divRef}
				class={flex({ alignItems: "baseline", position: "sticky", top: 0 })}
			>
				<About />
				<Timeline />
			</div>
		</div>
	);
}

export default function Home() {
	return (
		<SectionProvider>
			<main>
				<Menu />
				<Landing />
				<HorizontalWrapper />
				<Footer />
			</main>
		</SectionProvider>
	);
}
