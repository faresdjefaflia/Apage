// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' },
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/etmami/flaticon-uicons/uicons.css' },
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
      ],
    },
    // baseURL: '/Apage/',
    buildAssetsDir: "nuxt"
  },

  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  compatibilityDate: '2025-02-11',
})