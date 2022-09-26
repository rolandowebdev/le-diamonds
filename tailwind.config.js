/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        cabin: ["'Cabin'", ...defaultTheme.fontFamily.sans],
        playfair: ["'Playfair Display'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
