// // https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2024-04-03',
//   devtools: { enabled: true }
// })


export default defineNuxtConfig({
  ssr: false,

  // pages: false,

  app: {
    head: {
      htmlAttrs: {
        lang: 'ja',
      },
      charset: 'utf-8',
      meta   : [
        { name: 'apple-mobile-web-app-title', content: 'アートメイク/YUKA NOMURA' },
        { name: 'application-name', content: 'OneChatは誰かと気軽に会話ができるチャットサービスです。' },
        { name: 'theme-color', content: '#' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        { property: 'og:site_name', content: 'YUKA NOMURA' },
        { property: 'og:description', content: 'YUKA NOMURA' },
        { property: 'og:url', content: '' },
        { property: 'og:image', content: '/ogp.image.png' },
        { property: 'twitter:card', content: '/ogp.X.png' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Zen+Kaku+Gothic+New:wght@300;400;500;700;900&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Istok+Web:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+JP:wght@100..900&family=Noto+Serif+JP:wght@200..900&display=swap',
        },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        {
          rel  : 'apple-touch-icon',
          href : '/apple-touch-icon.webp',
          sizes: '180x180',
        },
      ],
    },
  },

  css: [
    'modern-css-reset/dist/reset.min.css',
    '~/assets/scss/base.scss',
  ],

  compatibilityDate: '2024-11-01',
})