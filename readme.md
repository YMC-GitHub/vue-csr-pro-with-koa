# vue-csr-pro-with-koa

## desc

vue app csr production with koa  (csr mode)


## project diretory constructor

get detail [here](./note/dir-construtor.md)

## some important deps for csr production

- koa (use koa framework)
- koa-route (use route help you?)
- koa-static (use static file serve)

## some config

`config/server.js`

01.where the host is? [config](./config/server.js#L5)

02.which port will use?  [config](./config/server.js#L7)

03.where the html file to serve?  [config](./config/server.js#L9)

04.what is the name of html files?   [config](./config/server.js#11)

05.where the static file to serve?   [config](./config/server.js#13)


## some command

```sh
#install his deps
: <<cmd
#npm install
#npm run install:csr
./dev/npm-install-koa2.sh
cmd

#devleop him
: <<cmd
#npm run dev:csr
cmd

#test him
: <<cmd
#npm run test
#npm run test:unit
#npm run test:e2e
cmd

#build him
: <<cmd
#npm run build:csr
#npm run build:csr-client
cmd

#lint him(optional)
: <<cmd
#npm run lint
#npm run lint:no-fix
cmd

#beautify him(optional)
: <<cmd
#npm run format
cmd

#publish him
: <<cmd
#pushish to github code manage,npm registry
#npm run release
cmd

#run him
: <<cmd
#npm run start:csr-server
npm run pro:csr
cmd
```

## author

yemiancheng <ymc-github@gmail.com>

## License

MIT
