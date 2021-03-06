const env = require('dotenv').config()

console.log(env)

export default {


    env: env.parsed,


    server: {
        port: 3003, // default: 3000     
        // host: '0.0.0.0', // default: localhost   
    }, //
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/min/dropzone.min.css' }
        ],
        script: [{
                src: "/admin/jquery.min.js",
                type: "text/javascript"
            },
            {
                src: "/admin/feather.min.js",
                type: "text/javascript"
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.5.1/min/dropzone.min.js",
                type: "text/javascript"
            }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#105e62' },
    /*
     ** Global CSS
     */
    css: [
        "~static/files/css/framework.css"
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '~/plugins/main',
        { src: '~/plugins/PerfectScrollbar', lang: 'js' },
        { src: '~/plugins/goodtable', lang: 'js' },
        { src: '~/plugins/draggable', lang: 'js' },
        { src: './plugins/pagination.js', ssr: false },
        { src: '~/plugins/apexcharts', ssr: false },
        { src: '~/plugins/carousel', lang: 'js', ssr: false },
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
        '@nuxtjs/dotenv',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        'cookie-universal-nuxt'
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */


    // env: {
    //     // baseUrl: process.env.BASE_URL || 'http://localhost:3003',
    //     baseUrl: (process.env.NODE_ENV == "development") ? "http://127.0.0.1:8000" : 'https://www.wenslink.com'
    // },

    router: {
        base: "/admin/"
    },

    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {}
    }
}