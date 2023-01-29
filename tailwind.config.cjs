/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: '#2E81F4',
        'light-grey': "#eff2f5"
      },
      boxShadow:{
        '7xl': '0px 5px 7px -7px rgba(0, 0, 0, 0.75)'
      }
    },
  },
  plugins: [],
}
