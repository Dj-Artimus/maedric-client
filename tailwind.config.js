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
    },
};
export const plugins = []; 