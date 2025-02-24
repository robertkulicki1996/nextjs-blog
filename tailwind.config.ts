import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["var(--font-open-sans)"],
        "playfair-display": ["var(--font-playfair-display)"],
      },
      colors: {
        white: "var(--white)",
        black: "var(--black)",
        blue: "var(--blue)",
        yellow: "var(--yellow)",
        red: "var(--red)",
        green: "var(--green)",
        gray: "var(--gray)",
        "plain-blue": "var(--plain-blue)",
        "dark-blue": "var(--dark-blue)",
        "dark-red": "var(--dark-red)",
        "text-blue": "var(--text-blue)",
        "light-gray": "var(--light-gray)",
        "dark-gray": "var(--dark-gray)",
        "darken-gray": "var(--darken-gray)",
        "d-blue": "var(--d-blue)",
        "d-yellow": "var(--d-yellow)",
        "d-red": "var(--d-red)",
        "d-green": "var(--d-green)"
      },
      boxShadow: {
        custom: '0px 0px 15px 0px rgba(0, 0, 0, 0.30)',
      },
    },
  },
  safelist: [
    'bg-blue',
    'bg-yellow',
    'bg-red',
    'bg-green',
    'text-blue',
    'text-yellow',
    'text-red',
    'text-green',
    'text-white',
    'text-dark-gray',
    'text-darken-gray',
    'border-d-blue',
    'border-d-yellow',
    'border-d-red',
    'border-d-green'
  ],
  plugins: [],
} satisfies Config;
