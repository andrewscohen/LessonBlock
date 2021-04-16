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
    screens: {

    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'mobile': '768px',
      // => @media (min-width: 768px) { ... }
    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
    },
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
