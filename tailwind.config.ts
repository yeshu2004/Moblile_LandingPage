import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futurabc: ['FUTURABC', 'sans-serif', 'Futura-Light-Condensed-BT'],
        spatchers: ['Spatchers-Regular', 'cursive'],
        futuraCondensed: ['Futura-Light-Condensed-BT', 'sans-serif'],
        mayonice: ['Mayonice', 'cursive'],
      },
    },
  },
  plugins: [],
} satisfies Config;
