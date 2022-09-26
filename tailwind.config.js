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
        bp1: "url('/src/background/bp1.png')",
        bp2: "url('/src/background/bp2.png')",
        bp3: "url('/src/background/bp3.png')",
        bp4: "url('/src/background/bp4.png')",
        bp5: "url('/src/background/bp5.png')",
        bp6: "url('/src/background/bp6.png')",
        selling: "url('/src/background/bg-selling.png')",
      },
    },
  },
  plugins: [],
};
