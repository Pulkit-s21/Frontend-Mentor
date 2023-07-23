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
          lightRed: 'hsl(0, 100%, 67%)',
          bglightRed: 'hsla(0, 100%, 67%,0.1)',
          orangeyYellow: 'hsl(39, 100%, 56%)',
          bgorangeyYellow: 'hsl(39, 100%, 56%,0.1)',
          teal: 'hsl(166, 100%, 37%)',
          bgteal: 'hsl(166, 100%, 37%,0.1)',
          cobaltBlue: 'hsl(234, 85%, 45%)',
          bgcobaltBlue: 'hsl(234, 85%, 45%,0.1)'
        },
        gradient: {
          slateBlue: 'hsl(252, 100%, 67%)',
          royalBlue: 'hsl(241, 81%, 54%)',
          violetBlue: 'hsla(256, 72%, 46%, 1)',
          persianBlue: 'hsla(241, 72%, 46%, 0)'
        },
        secondary: {
          paleBlue: 'hsl(221, 100%, 96%)',
          lavender: 'hsl(241, 100%, 89%)',
          grayBlue: 'hsla(224, 30%, 27%)'
        }
      },
      fontFamily: {
        Hanken: 'Hanken Grotesk'
      }
    },
  },
  plugins: [],
}

