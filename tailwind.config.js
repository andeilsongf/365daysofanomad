/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        gray: {
          100: '#fafafa',
          200: '#e6e6e6',
          300: '#757575',
          400: '#292929',
        },

        green: {
          100: '#1a8917',
        },

        white: "#ffffff",
        black: "#000",

      }
    },
  },
  plugins: [],
}