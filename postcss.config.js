const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
({
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./assets/**/*.js",
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    tailwindcss, // Corrigido a importação do Tailwind
    autoprefixer,
    ...(process.env.HUGO_ENVIRONMENT === "production"
      ? [
          // Adicionar plugins específicos de produção
          cssnano({ preset: "default" }), // Minifica o CSS para produção
        ]
      : []),
  ],
};
