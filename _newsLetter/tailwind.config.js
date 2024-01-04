/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Btn: "hsl(234, 29%, 20%)",
      },
    },
  },
  plugins: [],
}
