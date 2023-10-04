/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

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
        secondaryGray: "#666666",
        thirdGray: "#999999",
        hintGray: "#616161",
        primaryBrown: "#c89185",
        borderGray: "#dddddd",
      },
      animation: {
        move: "move .75s linear infinite",
        lighting: "lighting 1000ms alternate infinite ease",
      },
      keyframes: {
        move: {
          "0%": {
            transform: "translate(8px,8px)",
          },
          "100%": {
            transform: "translate(0px,0px)",
          },
        },
        lighting: {
          "0%, 85%": {
            color: " #4b4b4b",
            "text-shadow": "none",
          },
          "100%": {
            color: "#ec994b",
            "text-shadow": "0 0 5px #80032f, 0 0 3px #ce251",
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".rotate-y-0": {
          transform: "rotateY(0deg)",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
      });
    }),
  ],
};
