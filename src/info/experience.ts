export interface Item {
	role: string
	at: string
	fields: string[]
	when: [string] | [string, string]
	link: string
	bullets: string[]
}

export const WORK = [
	{
		role: 'Software Engineer',
		at: '01Talent',
		fields: ['Rust', 'Go', 'JavaScript', 'Shell Scripting', 'Docker'],
		when: ['November 2024', 'June 2026'],
		link: 'https://01talent.com/',
		bullets: [
			'Architected, developed, and managed educational software engineering content and automated testing suites deployed across an international network of 27+ campuses in 14 countries.',
			'Revamped, audited, and fine-tuned the global Rust curriculum, engineering robust automated validation tools and reference implementations.',
			'Collaborated directly with a decentralized network of campus teams to optimize grading pipeline efficiency, maintain curriculum quality, and ensure content reliability.',
		],
	},
] satisfies Item[]

export const EDUCATION = [
	{
		role: 'Undergraduate Coursework in Computer Science',
		at: 'Universidade do Minho',
		fields: ['Haskell', 'C', 'Java'],
		when: ['2024'],
		link: 'https://uminho.pt/',
		bullets: [
			'Leveraged advanced foundational coursework in functional programming paradigms and object-oriented systems to complement long-term practical experience.',
		],
	},
	{
		role: 'Student',
		at: '42 Porto',
		fields: ['*nix', 'C', 'C++'],
		when: ['2022'],
		link: 'https://42porto.com/',
		bullets: [
			"Part of the inaugural batch of accepted students at 42 Porto's peer-to-peer program.",
			'Sharpened deep technical competencies in manual memory management, data structures, and algorithmic complexity via strict Unix-compliant C/C++ development.',
			"Mentored peers and established a strong collaborative footprint within the region's top-tier tech talent network.",
		],
	},
	{
		role: 'Pisciner',
		at: '42 Porto',
		fields: ['*nix', 'Shell Scripting', 'C'],
		when: ['2022'],
		link: 'https://42porto.com/',
		bullets: [
			'Completed the rigorous, 4-week selection pool testing fundamental software engineering aptitude, collaborative problem-solving under extreme constraints, and shell automation, resulting in direct admission.',
		],
	},
] satisfies Item[]
