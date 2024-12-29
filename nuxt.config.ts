import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  alias: {
    "@": "../my-portfolio",
  },
  devtools: { enabled: false },
  pages: true,

  modules: ["@primevue/nuxt-module"],

  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  compatibilityDate: "2024-11-19",
});
