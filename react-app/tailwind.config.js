module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'secondary-yellow': "#F7C229",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
