export interface WorkItem {
	title: string
	at?: string
	when?: [string] | [string, string]
	fields: string[]
	link: string
	bullets: string[]
}

export const WORK = [
	{
		title: 'Software Engineer',
		at: '01Edu',
		when: ['November 2024', 'June 2026'],
		fields: ['Rust', 'Go', 'JavaScript', 'Shell Scripting', 'Docker'],
		link: 'https://01edu.ai/',
		bullets: [
			'Architected, developed and managed educational software engineering content and automated testing suites deployed across an international network of 27+ campi in 14 countries.',
			'Revamped, audited, and fine-tuned the global Rust curriculum, engineering robust automated validation tools and reference implementations.',
			'Collaborated directly with a decentralized network of campus teams to optimize grading pipeline efficiency, maintain curriculum quality, and ensure content reliability.',
		],
	},
] satisfies WorkItem[]

export const PROJECT_DEFAULT_OWNER = 'pedrodesu'
export const PROJECT_LINK_BASE = `https://github.com`

export interface ProjectItem {
	ownership?: string
	name: string
	fields: string[]
	description: string
	bullets?: string[]
}

export const PROJECTS = [
	{
		ownership: 'servo',
		name: 'rust-smallvec',
		fields: ['Rust'],
		description:
			"Performance-critical stack-allocated vector crate used across major Rust ecosystems, including servo's and `rustc` (Rust's official compiler).",
		bullets: [
			'Core contributor driving the v2 release, contributing across CI pipelines, fuzzing, property testing, benchmarking, and core performance refactoring.',
		],
	},
	{
		ownership: 'typst',
		name: 'ecow',
		fields: ['Rust'],
		description:
			'Compact, clone-on-write vector and string implementation for memory-efficient data structures.',
		bullets: [
			'Extended core crate capabilities by enabling `no_std` support and expanding the public API for the economic strings.',
		],
	},
	{
		name: 'sundae',
		fields: ['Rust', 'LLVM'],
		description:
			'An ambitious solo project building a custom language compiler from scratch using LLVM.',
	},
	{
		name: 'yew-feather',
		fields: ['Rust'],
		description:
			'Feather Icons component wrapper for the Yew web framework, amassing over 19k crate downloads.',
	},
	{
		name: 'discord.js-handler',
		fields: ['TypeScript', 'JavaScript'],
		description:
			'Object-oriented command and event handler framework built for `discord.js`, reaching ~2k downloads.',
	},
] satisfies ProjectItem[]
