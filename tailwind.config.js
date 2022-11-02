/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      md: "769px",
      xl: "1280px",
    },
    extend: {
      colors: {
        primaryRed: "#ff5353",
        primaryBlue: "#428bca",
        primaryPageBackgroundGray: "#f2f2f2",
        secondaryPageBackgroundGray: "#fafafa",
        primaryGray: "#545454",
        secondaryGary: "#666666",
        thirdGray: "#999999",
        hintGray: "#616161",
        primaryBrown: "#c89185",
        borderGray: "#dddddd",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
