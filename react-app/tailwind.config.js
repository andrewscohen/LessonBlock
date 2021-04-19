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

    // 'tablet': '640px',
    // // => @media (min-width: 640px) { ... }

    'mobile': '768px',
      // => @media (min-width: 768px) { ... }
    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }

    'widescreen': '1536px',
    // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: (theme) => ({
        // check: "url('/icons/check.svg')",
        // landscape: "url('/images/landscape/2.jpg')",
      }),
      colors: {
        'brand-blue': '#5DBDEB',
        'white-space': '#F5F9FF',
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
