/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: 'Public Sans',
      },
      colors: {
        primary: {
          blue: 'hsl(233, 26%, 24%)',
          green: 'hsl(136, 65%, 51%)',
          cyan: 'hsl(192, 70%, 51%)',
        },
        secondary: {
          100: 'hsl(0, 0%, 100%)',
          200: 'hsl(0, 0%, 98%)',
          300: 'hsl(220, 16%, 96%)',
          500: 'hsl(233, 8%, 62%)'
        }
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}