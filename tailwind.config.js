/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html", // Arquivos HTML dentro da pasta layouts
    "./content/**/*.{html,md}", // Arquivos HTML e MD dentro da pasta content
    "./assets/**/*.js", // Arquivos JS dentro da pasta assets (caso tenha)
    "./static/**/*.{html,js}", // Garantindo que o conteúdo em static também seja analisado (se necessário)
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"], // Família de fontes para o projeto
        system: ["system-ui", "sans-serif"], // Fontes de sistema
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
  plugins: [
    require("@tailwindcss/forms"), // Para estilização de formulários
    require("@tailwindcss/typography"), // Para estilização de tipografia
  ],
};
