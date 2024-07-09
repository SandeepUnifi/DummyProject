/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#63b3ed",
          DEFAULT: "#4299e1",
          dark: "#3182ce",
        },
        secondary: {
          light: "#fbb6ce",
          DEFAULT: "#f687b3",
          dark: "#e53e3e",
        },
      },
    },
  },
  plugins: [],
};
