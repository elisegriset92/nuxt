module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'my-first-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Transitions between pages
  */
   transition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter (el) {
      console.log('Before enter...');
    }
  },

  /*
  ** Customize the progress bar color
  */
  loading: {
  color: '#48BFE7',
  failedColor: 'red',
  },

 /*
  ** Main CSS
  */
  css: [
    'assets/main.css'
  ],

  /*
  ** Use my own loading component
  */
//  loading: '~/components/loading.vue',


  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
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

