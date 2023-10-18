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
        transparent: 'transparent',
      },
      fontFamily: {
        "molend-regular": 'var(--font-molend-regular)',
        "mark-medium": 'var(--font-mark-medium)',
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "primary": "white",
        }
      }
    ],
    base: false,
  }
};
export default config;
