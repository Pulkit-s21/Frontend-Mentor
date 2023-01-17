/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(0, 100%, 68%)',
        secondary: {
          100: 'hsl(207, 33%, 95%)',
          300: 'hsl(231, 7%, 65%)',
          500: 'hsl(230, 11%, 40%)',
          900: 'hsl(230, 29%, 20%)'
        }
      },
      fontFamily: {
        Barlow: 'Barlow Condensed',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}