const app = require('./app-koa')
const configServer = require('./config/server')
const port = process.env.PORT || configServer.port || 3000
app.listen(port, '0.0.0.0', () => {
  console.log(`server started at localhost:${port}`)
}).on('listening', () => console.log('serve is running'))
  .on('error', err => console.log(err))
