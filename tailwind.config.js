/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      primary : 'rgb(39 50 102)',
      white: {
        100: 'rgba(255,255,255,0.7)',
      },
      gray: {
        300: 'rgb(229 231 235/1)',
        200: 'rgb(229 231 235/1)',
      },
      purple: {
        100: 'rgb(243 232 255/1)',
        500: 'rgb(149 39 229/1)',
        600: 'rgb(125 33 190/1)'
      },
      green: {
        100: 'rgb(220 252 231/1)',
        400: 'rgb(74 222 128/1)',
        600: 'rgb(22 163 74/1)'
      }
    },
    fontFamily: {
      Inter: ['Inter'],
      EinaBold: ['EinaBold', "system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"],
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}