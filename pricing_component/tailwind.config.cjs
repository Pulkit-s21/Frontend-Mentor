/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: 'Montserrat',
      },
      colors: {
        purple: 'hsl(236, 72%, 79%)',
        darkBlue: 'hsl(237, 63%, 64%)',
        grayBlue: {
          100: 'hsl(240, 78%, 98%)',
          300: 'hsl(234, 14%, 74%)',
          500: 'hsl(233, 13%, 49%)',
          900: 'hsl(232, 13%, 33%)',
        },
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
  ],
}