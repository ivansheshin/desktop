// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/stylelint-module",
    '@nuxt/fonts',
    '@nuxt/eslint'
  ],
  fonts: {
    provider: 'google'
  },
  css: ['./src/app/styles/index.css'],
  stylelint: {
    fix: true,
  },
  alias: {
    "@": '../src'
  },
  dir: {
    pages: './src/pages',
    layouts: './src/app/layouts'
  }
})