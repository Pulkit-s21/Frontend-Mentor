/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "hsl(47, 88%, 63%)",
      },
      fontFamily: {
        FigTree: "Figtree, sans-serif",
      },
      boxShadow: {
        back: "8px 10px 0px 1px rgba(0,0,0,1)",
      },
    },
  },
  plugins: [],
}
