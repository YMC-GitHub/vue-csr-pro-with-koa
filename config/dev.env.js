//----------config dev----------
//it is for dev
//----------config dev----------
//tasks:
//01.inlude pro config
//02.use pro config and update NODE_ENV for development
'use strict'
//include some lib
const merge = require('webpack-merge')
//include some config
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
