const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx,md}",
        "./src/containers/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        screens: {
            'xs': '475px',
            ...defaultTheme.screens,
        },
        fontSize: {
            'xs': ['0.75rem', {lineHeight: '1rem'}],
            'sm': ['0.875rem', {lineHeight: '1.25rem'}],
            'md': ['0.955rem', {lineHeight: '1.35rem'}],
            'base': ['1rem', {lineHeight: '1.5rem'}],
            'lg': ['1.125rem', {lineHeight: '1.75rem'}],
            'xl': ['1.25rem', {lineHeight: '1.75rem'}],
            '2xl': ['1.5rem', {lineHeight: '2rem'}],
            '3xl': ['1.875rem', {lineHeight: '2.25rem'}],
            '4xl': ['2.25rem', {lineHeight: '2.5rem'}],
            '5xl': ['3rem', {lineHeight: '1'}],
            '6xl': ['3.75rem', {lineHeight: '1'}],
            '7xl': ['4.5rem', {lineHeight: '1'}],
            '8xl': ['6rem', {lineHeight: '1'}],
            '9xl': ['8rem', {lineHeight: '1'}],
        },
        extend: {
            colors: {
                theme: "#2A5DC6",
                body: "#F4F7FF",
                nav: "#F9FAFF",
                content: "#EDF1FB",
                title: "#1B1A1A",
                text: "#505050",
                subtitle: "#797777",
                subtext: "#646464",
                accent: "#E7ECFD",
                stroke: "#E2E9FF",
                icon: "#3E3880",
                themeBg: "#F4F7FF",
                themeDarkBg: "#F9FAFF",
                bgWhite: "#EEF1F8",
                blueGray: "#E4E9F4",
            }
        },
    },
    plugins: [],
}