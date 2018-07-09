const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  plugins: [
    // {
      // src: '~plugins/tableList',
      // ssr: false,
    // },
    {
      src: '~plugins/element-ui',
      ssr: true
    }
    // {
    //   src: '~plugins/vue-socket',
    //   ssr: true
    // }
  ],
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/main.less',
    {
      src: 'assets/css/main.less',
      lang: 'less'
    }
    // 'vue-easytable/libs/themes-base/index.css'
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    vender: [
      'axios',
      'element-ui',
      'jquery'
    ],
    "plugins": [
      new webpack.ProvidePlugin(
        {
          $:'jquery',
          jQuery:'jquery',
          'window.jQuery':'jquery'
        }
      )
    ],
    babel:{
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    },
    extend (config, ctx) {
      if (ctx.isClient) {
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
