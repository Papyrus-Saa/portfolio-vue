export default defineNuxtConfig({
  alias: {
    "@": "../my-portfolio",
  },
  devtools: { enabled: true },
  pages: true,

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-11-19",
});
