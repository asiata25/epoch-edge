const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "4.5rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ['"Satoshi"', ...defaultTheme.fontFamily.sans],
        display: ['"ClashDisplay"'],
      },
      spacing: {
        '18': '72px'
      },
      colors: {
        brand: {
          dark: "#181818",
          grey: {
            E6: "#E6E6E6",
            "7D": "#7D7D7D",
            "B5": "#B5B5B5",
            D9: "#D9D9D9",
          },
        },
      },
      dropShadow: {
        "header-product": [
          "26px 22px 76px rgba(0, 0, 0, 0.17)",
          "105px 89px 138px rgba(0, 0, 0, 0.15)",
          "236px 200px 186px rgba(0, 0, 0, 0.09)",
          "420px 356px 220px rgba(0, 0, 0, 0.03)",
          "657px 556px 241px rgba(0, 0, 0, 0)",
        ],
      },
    },
  },
  plugins: [],
};
