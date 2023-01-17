/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: 'hsl(356, 100%, 66%)',
          lightRed: 'hsl(355, 100%, 74%)',
          darkBlue: 'hsl(208, 49%, 24%)',
          cream: 'hsl(13, 100%, 72%)',
          gradientRed: 'hsl(353 100% 62%)',
          desatBlue: 'hsl(237, 23%, 32%)',
          gradientBlue: 'hsl(237, 17%, 21%)'
        },
        secondary: {
          900: 'hsl(240, 10%, 16%)',
          700: 'hsl(207, 13%, 34%)',
          500: 'hsl(240, 2%, 79%)',
        },
      },
      fontFamily: {
        Overpass: 'Overpass',
        Ubuntu: 'Ubuntu',
      },
      backgroundImage: {
        'pattern': "url('/images/bg-pattern-intro-desktop.svg')"
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}