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
const config = require('./src/api/config-csr-server.js')
//read html index  file
const template = fs.readFileSync(resolve('./dist/index.html'), 'utf-8')

const app = new Koa()
// for static serve in public path
app.use(require('koa-static')(resolve('./dist')))
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


const port = process.env.PORT || config.port || 3000
app.listen(port, '0.0.0.0', () => {
  console.log(`server started at localhost:${port}`)
}).on('listening', () => console.log('serve is running'))
  .on('error', err => console.log(err))
