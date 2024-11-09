/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        interBold: ["inter-bold", "sans-serif"],
        interLight: ["inter-light", "sans-serif"],
        interExtraLight: ["inter-extraLight", "sans-serif"],
        interMedium: ["inter-medium", "sans-serif"]
      },
      colors: {
        tealGreen: "#01BF89"
      }
    },
  },
  plugins: [],
}

