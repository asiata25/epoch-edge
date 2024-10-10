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
    fontFamily: {
      display: ['"Clash Display"'],
    },
    extend: {
      colors: {
        brand: {
          dark: "#181818",
          grey: {
            E6: "#E6E6E6",
            "7D": "#7D7D7D",
            D9: "#D9D9D9",
          },
        },
      },
    },
  },
  plugins: [],
};
