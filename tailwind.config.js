/** @type {import('tailwindcss').Config} */
const { gray } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')


module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    colors: {
      sky: colors.sky,
      teal: colors.teal,
      rose: colors.rose,
      gray: colors.gray,
      purple: colors.purple,
      green: colors.green,
      slate: colors.slate,
      yellow: colors.yellow,
      indigo: colors.indigo,
      white: colors.white,
    },
    fontFamily: {
      systemui: ['system-ui', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}