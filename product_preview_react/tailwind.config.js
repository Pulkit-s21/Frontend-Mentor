/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dcyan: 'hsl(158, 36%, 37%)',
          cream: 'hsl(30, 38%, 92%)'
        },
        secondary: {
          dblue: 'hsl(212, 21%, 14%)',
          gblue: 'hsl(228, 12%, 48%)',
        },
      },
      fontFamily: {
        Montserrat: 'Montserrat',
        Fraunces: 'Fraunces',

      }
    },
  },
  plugins: [],
}