/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "rgba(252, 71, 71, 1)",
        black: "rgba(16, 20, 30, 1)",
        greyishblue: "rgba(90, 105, 143, 1)",
        darkblue: "rgba(22, 29, 47, 1)",
      },
      fontSize: {
        xs: "13px",
        sm: "15px",
        sm2: "16px",
        md: "18px",
        md2: "20px",
        l: "24px",
        xl: "32px",
      },
      screens: {
        xs: "410px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
