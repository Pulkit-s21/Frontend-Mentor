/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBray: "hsl(0, 0%, 12%)",
      },
    },
  },
  plugins: [],
}
