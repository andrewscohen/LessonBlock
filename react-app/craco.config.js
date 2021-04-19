module.exports = {
    style: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
          '@tailwindcss/jit': {},
        ],
      },
    },
  }
