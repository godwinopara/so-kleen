/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroBg1: "url('src/images/hero-bg.jpg')"
      },
      fontFamily: {
        sans: ['Cambria', "ui-sans-serif", "system-ui", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
      },
    },
  },
  plugins: [],
}