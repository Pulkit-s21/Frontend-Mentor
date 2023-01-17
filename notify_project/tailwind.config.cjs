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
          red: 'hsl(1, 90%, 64%)',
          blue: 'hsl(219, 85%, 26%)',
        },
        secondary: {
          900: 'hsl(224, 21%, 14%)',
          800: 'hsl(219, 12%, 42%)',
          700: 'hsl(219, 14%, 63%)',
          600: 'hsl(205, 33%, 90%)',
          500: 'hsl(211, 68%, 94%)',
          400: 'hsl(210, 60%, 98%)'
        },
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}