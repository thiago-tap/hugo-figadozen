/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./assets/**/*.js", // Certifique-se de incluir scripts caso use Tailwind em JS
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        system: ["system-ui", "sans-serif"],
      },
      colors: {
        green: {
          500: "#4db54c",
          site: "#90b32b",
          hover: "#6d9121",
          gradienteDe: "#aed149",
          gradientePara: "#90b32b",
        },
        orange: {
          300: "#FFA100",
          500: "#ff7f00",
        },
        yellow: {
          500: "#FFFF00",
        },
        blue: {
          site: "#00a0b2",
          hover: "#0080a0",
          gradienteDe: "#1ebed0",
          gradientePara: "#00a0b2",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
