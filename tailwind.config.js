const { gray, white } = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        fontFamily: {
            serif: ['Inter var', 'Inter', 'ui-serif'],
            mono: ['JetBrains Mono', 'ui-monospace']
        },
        fontSize: {
            blogH1: ['36px', { letterSpacing: '-0.022em' }],
            blogH2: ['28px', { letterSpacing: '-0.021em' }],
            blogH3: ['25px', { letterSpacing: '-0.02em' }],
            blogP: ['20px', { letterSpacing: '-0.017em' }],
            jumbo: ['96px', { letterSpacing: '-0.022em' }],
            h1: ['40px', { letterSpacing: '-0.022em' }],
            h2: ['31px', { letterSpacing: '-0.021em' }],
            h3: ['22px', { letterSpacing: '-0.018em' }],
            p: ['18px', { letterSpacing: '-0.014em' }],
        },
        colors: {
            gray,
            white,
            primary: '#2948ff',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '2rem',
                sm: '4rem',
                lg: '6rem',
                xl: '10rem',
            },
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
