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
        background: "#000000",
      },
      fontFamily: {
        "molend-regular": 'var(--font-molend-regular)',
        "mark-medium": 'var(--font-mark-medium)',
      }
    },
  },
  plugins: [],
};
export default config;
