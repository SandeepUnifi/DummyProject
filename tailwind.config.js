/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        primary: {
          light: "red",
          DEFAULT: "blue",
          dark: "red"
        },
        secondary: {
          light: "yellow",
          DEFAULT: "yellow",
          dark: "yellow"
        }
      }
    },
  },
  plugins: [],
};
