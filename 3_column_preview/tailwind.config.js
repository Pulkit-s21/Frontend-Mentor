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
          bOrange: 'hsl(31, 77%, 52%)',
          dCyan: 'hsl(184, 100%, 22%)',
          vdCyan: 'hsl(179, 100%, 13%)'
        },
        secondary: {
          white: 'hsla(0, 0%, 100%, 0.75)',
          vlGray: 'hsl(0, 0%, 95%)'
        }
      },
      fontFamily: {
        'Big_Shoulder': 'Big Shoulders Display',
        'Lexend': 'Lexend Deca'
      }
    },
  },
  plugins: [],
}

