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
        extend: {
            colors: {
                theme: "#2A5DC6",
                bgWhite: "#EEF1F8",
                blueGray: "#E4E9F4",
            }
        },
    },
    plugins: [],
}