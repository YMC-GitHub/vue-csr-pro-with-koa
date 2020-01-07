//-----------build----------
//it is a vue-loader config file for webpack config
//-----------build----------
//tasks:
//01.use project env from config dir
//02.check NODE_ENV
//03.use source map for build or dev with config
//04.extract css when pro
//...

'use strict'
//include some lib
const utils = require('./utils')
//include some data
const config = require('../config')
//check NODE_ENV
const isProduction = utils.isPro()
//use source map when pro
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

module.exports = {
  //set css loader in .vue file
  //for css/less/sass/scss/stylus/styl/postcss
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    //extract css when pro
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
