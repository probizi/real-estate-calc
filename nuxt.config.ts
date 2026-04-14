export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Free Real Estate Investment Calculators | RealCalc',
      meta: [
        { name: 'description', content: 'Free real estate investment calculators for US investors. Cap Rate, DSCR, Rental Property, Fix & Flip, BRRRR, ARV, NOI and 30+ more tools. No signup required.' },
        { name: 'theme-color', content: '#1e3a5f' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:site_name', content: 'RealCalc' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap'
        }
      ]
    }
  },

  css: ['~/assets/css/main.css'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },

  nitro: {
    compressPublicAssets: true
  }
})
