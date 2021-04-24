const { gray, white } = require('tailwindcss/colors');

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        fontSize: {
            h1: ['36px', { letterSpacing: '-0.022em' }],
            h2: ['30px', { letterSpacing: '-0.021em' }],
            h3: ['26px', { letterSpacing: '-0.02em' }],
            paragraph: ['20px', { letterSpacing: '-0.017em' }],
        },
        colors: {
            gray,
            white
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
