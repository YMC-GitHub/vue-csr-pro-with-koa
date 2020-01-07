//-----------build----------
//it is a webpack config file for base
//-----------build----------
//tasks:
//01.use vue-loader config
//02.use project env from config dir
//03.set concext
//04.set entry
//05.set output with project config
//06.
//07.check NODE_ENV
//08.set where to find npm lib
//09.use eslint with project config when dev
//10.set file match and how to handle the file

'use strict'
//include some lib
const path = require('path')
const utils = require('./utils')

//include some config
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

//define some file-level fun
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
})

module.exports = {
  //set the wepack context dir
  context: path.resolve(__dirname, '../'),
  //set enty
  entry: {
    app: './src/ssr-entry-client.js'
  },
  //set output with project config
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: utils.isPro()
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  //set where to find npm lib
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  //set file match and how to handle the file
  module: {
    rules: [
      //use eslint with project config when dev
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
