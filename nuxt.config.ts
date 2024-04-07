// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', "@samk-dev/nuxt-vcalendar"],
  colorMode: {
    classSuffix: '',
    preference: 'dark'
  },
  css: ['~/assets/css/main.css']
})