// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  important: true,
  // Active dark mode on class basis
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', "./pages/**/*.tsx", "./components/**/*.tsx"], // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        // check: "url('/icons/check.svg')",
        // landscape: "url('/images/landscape/2.jpg')",
      }),
      colors: {
        'brand-blue': '#5DBDEB',
        'brand-yellow': '#F7C229',
        'brand-gold': '#DCAE25',
        'brand-purple': '#4E5990',
        'brand-purple-deep': '#333C5D',
        'brand-gray': '#656153',
        'white-space': '#F5F9FF',
        'brand-tan': "#E6DCCD",
        'alt-purple': "#34315C"
      },
      fontFamily: {
        abril: ["'Abril Fatface'", 'cursive'],
        monst: ['Monsterrat', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
