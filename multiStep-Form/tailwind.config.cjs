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
          marineBlue: 'hsl(213, 96%, 18%)',
          purpleBlue: 'hsl(243, 100%, 62%)',
          pastleBlue: 'hsl(228, 100%, 84%)',
          lightBlue: 'hsl(206, 94%, 87%)',
          strawBerryRed: 'hsl(354, 84%, 57%)',
        },
        neutral: {
          alabaster:'hsl(231, 100%, 99%)'
        }
      },
      fontFamily: {
        Ubuntu: 'Ubuntu'
      }
    },
  },
  plugins: [],
}