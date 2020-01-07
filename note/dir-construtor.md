# project diretory construtor

```
|--build # build the source files config for webpack
|--config #some config for build the project
|--csr-index.html #html index file for csr
|--csr-server.js #js server file for csr
|--husky.config.js
|--index.html #html index file for webpack
|--license #project license file
|--lint-staged.config.js
|--note #save my some note for the project
|--package.json #use npm ,and it's description
|--readme.md #readme before
|--src #save the source code (for dev)
|--static #static resource file
```

## webpack config  diretory construtor

```
|--build
| |--build.js # use webpack build for csr
| |--check-versions.js # check npm , node or other lib version
| |--utils.js # some useful tool for this dir
| |--vue-loader.conf.js #vue-loader config file
| |--webpack.base.conf.js #a webpack config file for base
| |--webpack.dev.conf.js #a webpack config file for development
| |--webpack.prod.conf.js #a webpack config file for production
| |--webpack.test.conf.js #a webpack config file for testing
```

## project config diretory construtor

```
|--config #some config for build the project
| |--dev.env.js #some env for development
| |--index.js #project config index file
| |--prod.env.js #some env for production
| |--test.env.js #some env for testing
```

## source code dir construtor

```
|--src
| |--App.vue #.vue index file
| |--api #save some config for backend api or mock api
| |--assets #save some static file
| |--components #
| |--filter #save some filter for vue engine
| |--layout #save some layout
| |--locale #save multi languge file
| |--main.js #.js index file
| |--router #save route file
| |--ssr-entry-client.js
| |--ssr-entry-server.js
| |--store #save data file
| |--style #css style file ,may be .css,.less,.scss,.postcss ...
| |--utlis #save some tool for src
| |--views #save some view file
```


## production code dir construtor

```
|--dist
| |--static #js/css file for web
| |--index.html #csr html index file
```
