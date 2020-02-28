
export default {
  mode: 'universal',
  /*server: {     
    port: 8000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Yannick Silva | FullStack Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Yannick Silva | FullStack Developer Portfolio including frontend, backend and database projects for service request or hire' },
      { name: 'author', content: 'Yannick Silva' },
      { name: 'keywords', content: 'portfolio,developer portfolio,yannick dev,yannick silva dev,yannick portfolio,yannick silva portfolio,nick dev portfolio,fullstack portfolio,frontend portfolio,programmer portfolio,development,tech portfolio,technology,technology portfolio,programmer,devops portfolio,devops,hire freelancer,hire freelancer developer,hire frontend developer,hire fullstack developer' },
      { name:'reply-to', content:'garciatandela@gmail.com' },
      { name:'owner', content:'Yannick Silva' },
      { name:'copyright', content:'Copyright © Yannick Silva 2020. All rights reserved.'},
      { 'http-equiv':'content-language', content:'en-us'},
      { 'http-equiv':'content-type', content:'text/html', charset:'iso-8859-1'},
      { name:'rating', content:'General'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon1.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Global CSS
  */
 css: [
  'element-ui/lib/theme-chalk/index.css',
  '@/assets/hover-min.css'
],
/*
** Plugins to load before mounting the App
*/
plugins: [
  '@/plugins/element-ui',
  '@/plugins/form-validation',
  { src: "@/plugins/aos", ssr: false }
],
/*
** Nuxt.js dev-modules
*/
buildModules: [
],
/*
** Nuxt.js modules
*/
modules: [
  // Doc: https://axios.nuxtjs.org/usage
  '@nuxtjs/axios',
  '@neneos/nuxt-animate.css',
  '@inkline/inkline/nuxt',
  [
    "nuxt-compress",
    {
      gzip: {
        cache: true
      },
      brotli: {
        threshold: 10240
      }
    }
  ],
  'nuxt-lazy-load',
  'vue-scrollto/nuxt',
  [
    'nuxt-i18n',{
      locales: [
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js'
        },
        {
          name: 'Spanish',
          code: 'es',
          iso: 'es-SP',
          file: 'es-SP.js'
        },
        {
          name: 'French',
          code: 'fr',
          iso: 'fr-FR',
          file: 'fr-FR.js'
        },
        {
          name: 'Portuguese',
          code: 'pt',
          iso: 'pt-PT',
          file: 'pt-PT.js'
        },
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'en',
  }]

],

/*
** Axios module configuration
** See https://axios.nuxtjs.org/options
*/
axios: {

  baseURL: 'https://myportfoliomail.herokuapp.com'

},
/*
** Build configuration
*/
build: {
  transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
