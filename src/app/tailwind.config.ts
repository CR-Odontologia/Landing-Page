// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: "#2261a8",
                    gold: "#d7af58",
                    dark: "#022249",
                },
            },
            fontFamily: {
                sans: ['var(--font-montserrat)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
export default config;