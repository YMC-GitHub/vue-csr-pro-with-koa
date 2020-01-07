//----------config test----------
//it is for test
//----------config test----------
//01.inlude dev config
//02.use dev config and update NODE_ENV for test

'use strict'
//include some lib
const merge = require('webpack-merge')
//include some config
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})
