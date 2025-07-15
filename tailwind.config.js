/** @type {import('tailwindcss').Config} */


export const content = [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/sections/**/*.{js,jsx,ts,tsx}",
    // "./src/layouts/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
    extend: {
        fontFamily: {
            cinzel: ["Cinzel", "serif"],
            figtree: ["Figtree", "sans-serif"],
            quiche: ["Quiche Display", "serif"],
        },
        colors: {
            primary: "#051E33",
            secondary: "#596B82",
            accent: "#D2AE6D",
            neutral: "#E7EAEE",
            headerText: "#F3F6FA",
        },
        keyframes: {
            'slide-away': {
                '0%': { width: '100%', left: '0%' },
                '49%': { width: '0%', left: '0%' },
                '50%': { width: '0%', left: '0%' },
                '51%': { width: '0%', left: '100%' },
                '52%': { width: '0%', left: '0%' },
                '100%': { width: '100%', left: '0%' },
            },
        },
        animation: {
            'slide-away': 'slide-away 0.6s forwards',
        },
    },
};
export const plugins = []; 