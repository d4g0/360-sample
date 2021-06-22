const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        gray: colors.coolGray,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
