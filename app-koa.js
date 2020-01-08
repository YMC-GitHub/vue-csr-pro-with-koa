//----------serve scr----------
//it is for pro or dev mode
//----------serve scr----------
//tasks:
//

//include some lib
const Koa = require('koa')
const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
//include some config
const configServer = require('./config/server')
//read html index  file
const template = fs.readFileSync(configServer.index, 'utf-8')

const app = new Koa()
// for static serve in public path
app.use(require('koa-static')(configServer.static))
// for static web serve in dist path
app.use(async (ctx, next) => {
  try {
    ctx.body = template
    ctx.set('Content-Type', 'text/html')
    ctx.set('Server', 'Koa2 client side render')
  } catch (e) {
    next()
  }
})
//for other


module.exports = app

