// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'brand-blue': '#5DBDEB',
        'brand-yellow': '#F7C229',
        'brand-gold': '#DCAE25',
        'brand-purple': '#4E5990',
        'brand-purple-deep': '#333C5D',
        'brand-gray': '#656153',
        'white-space': '#F5F9FF',
        'brand-tan': "#E6DCCD"
      },
      fontFamily: {
        abril: ["'Abril Fatface'", 'cursive'],
        monst: ['Monsterrat', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
