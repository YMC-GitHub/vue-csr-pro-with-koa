//----------config index----------
//it is for index
//----------config index----------
//tasks:
//define static assets dir
//define public assets dir
//define proxy map
//define serve host
//define serve port
//define if it open browser automaticaly
//Use Eslint Loader?
//...
//
//define root assets dir
//define index.html localtion
//...

'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

//include some lib
const path = require('path')

module.exports = {
  dev: {

    // Paths
    //define static assets dir
    assetsSubDirectory: 'static',
    //define public assets dir
    assetsPublicPath: '/',
    //define proxy map
    proxyTable: {},

    // Various Dev Server settings
    //define serve host
    host: 'localhost', // can be overwritten by process.env.HOST
    //define serve host
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    //define if it open browser automaticaly
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    //define index.html localtion
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    //define root assets dir
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
