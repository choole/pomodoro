import Aura from '@primeuix/themes/aura';
import tailwindcss from '@tailwindcss/vite';
import PrimeUI from 'tailwindcss-primeui';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite:{
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@primevue/nuxt-module'
  ],
  primevue:{
    options: {
      theme: {
        preset: Aura
      }
    }
  }
})
