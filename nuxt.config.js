export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'ESC Enterprise Software Consulting srl',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'ESC consulting è il partner IT che fornisce alle aziende soluzioni efficaci per la gestione dei dati sviluppando strategie di ottimizzazione delle informazioni per il raggiungimento del business aziendale.'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content:
          'dati, big data, IT, applicazioni, gestionali, software, SAP, ABAP, big intelligence, soluzione dati, gestione dati, analisi dati, open source, icloud, web application, integrazione gestionali.'
      },
      {
        hid: 'author',
        name: 'author',
        content: 'ESC Enterprise Software Consulting srl'
      },
      {
        hid: 'google-site-verification',
        name: 'google-site-verification',
        content: 'Uz1sIwSqJYs151SAc5GUj8OiVr41_dXEdA8HOP3XnJo'
      },
      { 'http-equiv': 'Content-Language', content: 'IT' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap'
      }
    ],
    script: [
      {
        hid: 'cookiebotscript',
        src: 'https://consent.cookiebot.com/uc.js',
        'data-cbid': 'c4bb327a-1dd8-4230-871d-700d9864d989',
        'data-blockingmode': 'auto',
        type: 'text/javascript',
        id: 'Cookiebot'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['assets/style.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-128979501-1',
        dev: false
      }
    ],
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    'nuxt-fontawesome',
    // With options
    [
      'nuxt-facebook-pixel-module',
      {
        /* module options */
        track: 'PageView',
        pixelId: '255909072843977',
        autoPageView: true,
        disabled: false
      }
    ]
  ],
  /* ** Build configuration */
  build: {
    /* ** You can extend webpack config here */
    extend(config, ctx) {},
    // npx nuxt build -a
    // analyze: true,
    // transpile: [ ({ isClient }) => isClient && "vee-validate/dist/rules" ],
    babel: { compact: true }
  },
  sitemap: {
    hostname: 'https://esconsulting.it',
    gzip: true
  }
}
