// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxt/test-utils/module",
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/seo",
    "@nuxt/fonts",
    "@nuxt/image",
    "@nuxtjs/i18n",
    "shadcn-nuxt",
    "@nuxtjs/color-mode",
  ],
  i18n: {
    legacy: false,
    strategy: "prefix_and_default",
    defaultLocale: "en",
    detectBrowserLanguage: false,
    locales: [
      "en",
      "th",
      // { code: "en", language: "en-US" },
      // { code: "fr", language: "fr-FR" },
      // { code: "es", language: "es-ES" },
      // { code: "it", language: "it-IT" },
      // { code: "pt", language: "pt-BR" },
      // { code: "de", language: "de-DE" },
      // { code: "th", language: "th-TH" },
    ],
    vueI18n: "./locale/config.ts",
  },
  shadcn: {
    prefix: "Shad",
    componentDir: "./components/ui",
  },
  colorMode: {
    classSuffix: "",
  },
});
