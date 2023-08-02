/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        main: ["#1D1B1B"],
        sekunder: ["#504D61"],
        tersier: ["#6641D6"],
        tersier_2: ["#FF8A00"],
        grey: ["#B5B5B5"],
      },
      screens: {
        // "2xl": "1320px"
        "2xl": "1536px",
      },
      fontFamily: {
        primary: "Jost",
        secondary: "A4SPEED",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
};
