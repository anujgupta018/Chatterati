/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customDark: "#131324",
        custom1: "#00000076",
      },
    },
  },
  plugins: [],
};
