/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#fdf2f4",
          100: "#fbe6ea",
          200: "#f4c3ce",
          300: "#ea93a6",
          400: "#dc5a79",
          500: "#c8365f",
          600: "#a8274f",
          700: "#8a2144",
          800: "#701c3a",
          900: "#5b1731",
          950: "#2a0b16",
        },
        teal: {
          50: "#e6fffb",
          100: "#bffcf2",
          200: "#87f7e6",
          300: "#4df0d8",
          400: "#22e3c6",
          500: "#0fcfb2",
          600: "#0aa990",
          700: "#078472",
          800: "#06685a",
          900: "#055449",
          950: "#03332c",
        },
      },
    },
  },
  plugins: [],
};
