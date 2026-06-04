import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fdfbf7",
          100: "#faf6ee",
          200: "#f3ebdb",
        },
        sand: {
          100: "#efe6d6",
          200: "#e2d3b8",
          300: "#d4bd97",
        },
        clay: {
          400: "#b08968",
          500: "#9c6f4e",
          600: "#7f5539",
          700: "#5e3d28",
        },
        bark: {
          800: "#3d2b1f",
          900: "#2a1d14",
        },
        sage: {
          400: "#8a9a7b",
          500: "#6f7f5f",
          600: "#586848",
        },
        gold: {
          400: "#c9a227",
          500: "#b8901f",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
      },
      animation: {
        "slow-zoom": "slow-zoom 18s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
