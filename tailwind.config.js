/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    colors: {
      sky: colors.sky,
      teal: colors.teal,
      rose: colors.rose,
      primary : 'rgb(39 50 102)',
      white: {
        100: 'rgba(255,255,255,0.7)',
      },
      gray: {
        200: 'rgb(229 231 235/1)',
        300: 'rgb(229 231 235/1)',
        400: 'rgb(156 163 175/1)',
        500: 'rgb(107 114 128/1)',
        900: 'rgb(17 24 39/1)',
      },
      purple: {
        50: 'rgb(250 245 255/1)',
        100: 'rgb(243 232 255/1)',
        500: 'rgb(149 39 229/1)',
        600: 'rgb(125 33 190/1)'
      },
      green: {
        100: 'rgb(220 252 231/1)',
        400: 'rgb(74 222 128/1)',
        600: 'rgb(22 163 74/1)'
      },
      slate: {
        100: 'rgb(248 251 255/1)',
        600: 'rgb(71 85 105/1)',
        700: 'rgb(51 65 85/1)',
        900: 'rgb(15 23 42/1)'
      },
      yellow: {
        50: 'rgb(254 252 232/1)',
        700: 'rgb(161 98 7/1)'
      },
      indigo: {
        50: 'rgb(238 242 255/1)',
        500: 'rgb(99 102 241/1)',
        700: 'rgb(67 56 202/1)'
      }
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