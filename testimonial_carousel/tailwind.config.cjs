/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkBlue: 'hsl(240, 38%, 20%)',
          grayBlue: 'hsl(240, 18%, 77%)',
        },
      },
      fontFamily: {
        body: 'Inter',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}