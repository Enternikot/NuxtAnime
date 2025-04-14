export default defineNuxtConfig({
  modules: ["../src/module", "@nuxt/eslint"],
  nuxtAnime: {
    autoplay: false,
  },
  devtools: { enabled: true },
  compatibilityDate: "2025-04-14",
});
