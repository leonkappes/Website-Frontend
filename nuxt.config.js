const pkg = require('./package')

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Leon Kappes | Backend Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'robots', content: 'noindex' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: '/css/bootstrap.min.css',
        type: 'text/css'
      },
      {
        rel: 'stylesheet',
        href: '/css/all.min.css',
        type: 'text/css'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#272727' },

  /*
   ** Customize the generated output folder
   */
  generate: {
    dir: 'public'
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
