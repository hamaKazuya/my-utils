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
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
  ],
  axios: {
  },
  proxy: {
    '/api': 'http://localhost:1313',
  },
  build: {
    // cache: true,
    extend (config, { isClient }) {
      if (isClient) {
        config.devtool = '#source-map'
      }
    }
  },

  // PWA
  manifest: {
    name: 'my-utils',
    lang: 'ja',
    short_name: 'my-utils',
    title: 'my-utils',
    'og:title': 'my-utils',
    description: 'my-utils',
    'og:description': 'my-utils',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
  // TODO なんか不都合あるっぽいので一旦コメントアウト
  workbox: {
    // 開発環境でもPWAを有効にする
    dev: true,
  }
}

export default nuxtConfig
