//-----------build----------
//it is a utils file for build
//-----------build----------
//tasks:
//01.use package file
//02.use project env from config dir
//03.set concext
//04.set entry
//export assetsPath to get assert path from project env
//export cssLoaders to get css/less/sass/scss/stylus/styl/postcss loader
//export styleLoaders
//export createNotifierCallback

'use strict'
//include some lib
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
//include some data
const config = require('../config')
const packageConfig = require('../package.json')

//export isPro to check process.env.NODE_ENV
exports.isPro = function () {
  return process.env.NODE_ENV === 'production' ? true : false
}
//export isDev to check process.env.NODE_ENV
exports.isDev = function () {
  return process.env.NODE_ENV === 'development' ? true : false
}
//export isTes to check process.env.NODE_ENV
exports.isTes = function () {
  return process.env.NODE_ENV === 'testing' ? true : false
}

//export assetsPath to get assert path from project env
exports.assetsPath = function (_path) {
  const assetsSubDirectory = exports.isPro()
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}
//export cssLoaders to get css/less/sass/scss/stylus/styl/postcss loader
exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  //use options to get css loader
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}
