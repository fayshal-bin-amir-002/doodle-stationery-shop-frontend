/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cPrimary: "#e11d48",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

