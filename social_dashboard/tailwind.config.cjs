/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          green: 'hsl(163, 72%, 41%)',
          red: 'hsl(356, 69%, 56%)',
          facebook: 'hsl(208, 92%, 53%)',
          twitter: 'hsl(203, 89%, 53%)',
          youtube: 'hsl(348, 97%, 39%)',
          yellow: 'hsl(37, 97%, 70%)',
          pink: 'hsl(329, 70%, 58%)',
          darkTop: 'hsl(232, 19%, 15%)',
          darkBG: 'hsl(230, 17%, 14%)',
          cardBG: 'hsl(228, 28%, 20%)',
          cardText: 'hsl(228, 34%, 66%)',
        },
        lightToggle: {
          text: 'hsl(228, 12%, 44%)',
          numClr: 'hsl(230, 17%, 14%)',
          cardBG: 'hsl(227, 47%, 96%)',
          lightTop: 'hsl(225, 100%, 98%)',
        },
      },
      fontFamily: {
        primary: 'Inter',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}