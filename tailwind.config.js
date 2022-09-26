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
      backgroundImage: {
        bp1: "url('/background/bp1.png')",
        bp2: "url('/background/bp2.png')",
        bp3: "url('/background/bp3.png')",
        bp4: "url('/background/bp4.png')",
        bp5: "url('/background/bp5.png')",
        bp6: "url('/background/bp6.png')",
        selling: "url('/background/bg-selling.png')",
      },
    },
  },
  plugins: [],
};
