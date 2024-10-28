/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroBg1: "url('src/images/hero-bg.jpg')"
      }
    },
  },
  plugins: [],
}