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
          pblue: 'hsl(225, 100%, 94%)',
          bblue: 'hsl(245, 75%, 52%)'
        },
        secondary: {
          vpblue: 'hsl(225, 100%, 98%)',
          dblue: 'hsl(224, 23%, 55%)',
          darkBlue: 'hsl(223, 47%, 23%)'
        }
      },
      fontFamily: {
        RedHat: 'Red Hat Display'
      }
    },
  },
  plugins: [],
}