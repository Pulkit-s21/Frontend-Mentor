/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        '1': '0em',
        '2': '0.025em',
        '3': '0.05em',
        '4': '0.15em',
      },
      colors: {
        primary: {
          grayBlue: 'hsl(237, 18%, 59%)',
          softRed: 'hsl(345, 95%, 68%)',
        },
        secondary: {
          900: 'hsl(234, 17%, 12%)',
          700: 'hsl(235, 16%, 14%)',
          500: 'hsl(236, 21%, 26%)',
        },
      },
      fontFamily: {
        body: 'Red Hat Text',
      }
    },
  },
  plugins: [],
}