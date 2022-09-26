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
        banner: "url('/assets/image/banner.png')",
        bp1: "url('/src/assets/image/bp1.png')",
        bp2: "url('/src/assets/image/bp2.png')",
        bp3: "url('/src/assets/image/bp3.png')",
        bp4: "url('/src/assets/image/bp4.png')",
        bp5: "url('/src/assets/image/bp5.png')",
        bp6: "url('/src/assets/image/bp6.png')",
        selling: "url('/src/assets/image/bg-selling.png')",
      },
    },
  },
  plugins: [],
};
