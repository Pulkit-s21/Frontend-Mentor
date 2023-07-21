/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        card: 'rgba(31,38,48,0.99)',
        btn: 'rgba(255,117,19,0.9)'
      },
      fontFamily: {
        Rubik: 'Rubik',
      }
    },
  },
  plugins: [],
}