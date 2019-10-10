import { Configuration } from '@nuxt/types'

const nuxtConfig: Configuration = {
  mode: 'spa',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [
    '@/plugins/common',
    '@/plugins/axios',
    '@/plugins/vee-validate'
  ],
  buildModules: [
    // '@nuxtjs/eslint-module', // ハマった No ESLint configuration foundのエラー
    '@nuxt/typescript-build'
  ],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  // modules: [
  //   '@nuxtjs/axios',
  //   '@nuxtjs/proxy',
  // ],
  axios: {
  },
  proxy: {
    '/api': 'http://localhost:1313',
  },
// }
  // axios: {
  //   proxy: true,
  //   browserBaseURL: 'http://localhost:1313/'
  // },
  // proxy: {
  //   '/api': {
  //     target: 'http://localhost:1313/api/',
  //     pathRewrite: {
  //       '^/api' : '/'
  //     }
  //   }
    // '/api/': {target: 'http://localhost:1313/api/', pathRewrite: {'^/api/': '/'}}
  // },

  build: {
    // cache: true,
    extend (config, { isClient }) {
      if (isClient) {
        config.devtool = '#source-map'
      }
    }
  }

}

export default nuxtConfig
