import localeEn from './locales/en.json';

require('dotenv').config();

export default {
  ssr: false,
  /*
  ** Headers of the page
  */
  head: {
    title: 'TTIT Analytics',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:200,300,400,600,700,800' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    bodyAttrs: {
      class: 'sidebar-mini', // delete the class to have the sidebar expanded by default. Add `white-content` class here to enable "white" mode.
    },
  },
  router: {
    linkExactActiveClass: 'active',
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'assets/css/demo.css',
    'assets/css/nucleo-icons.css',
    'assets/sass/black-dashboard.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/dashboard-plugin.js',
    { src: '~/plugins/axios.js' },
    { src: '~/plugins/toast.js' },
    { src: '~/plugins/full-calendar.js', ssr: false },
    { src: '~/plugins/world-map.js', ssr: false },
    { src: '~/plugins/vee-validate.js' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/dotenv',
  ],
  styleResources: {
    scss: ['./assets/sass/resourses.scss'],
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-i18n',
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    'bootstrap-vue/nuxt',
  ],
  axios: {
    baseURL: process.env.BASE_URL,
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    vueI18n: {
      messages: {
        en: localeEn,
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
    },
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/, 'vee-validate/dist/rules'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk',
          },
        ],
      ],
    },
  },
  env: {
    baseUrl: process.env.BASE_URL,
  },
};
