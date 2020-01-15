# vue-csr-pro-with-koa

## desc

vue app csr production with koa (csr mode)

## project diretory constructor

get detail [here](./note/dir-construtor.md)

## some important deps for csr production

- koa (use koa framework)
- koa-router (use route help you?)
- koa-static (use static file serve)
- koa-favicon (to quickly use favicon)
- koa-logger (use log for serve?)
- koa-compress (use zlip to compress)
- lru-cache (mirco cache sth)
- koa2-connect-history-api-fallback (handle spa 404?)

## some config


`config/server.config.js`

01.where the host is? [config](./config/server.config.js#L8)

02.which port will use?  [config](./config/server.config.js#L10)

03.where the html file to serve?  [config](./config/server.config.js#L12)

04.what is the name of html files?   [config](./config/server.config.js#14)

05.where the static file to serve?   [config](./config/server.config.js#16)

## some command

``` bash
# install dependencies
npm install # or yarn install

# serve in production mode
npm start
```

## author

yemiancheng <ymc-github@gmail.com>

## License
MIT