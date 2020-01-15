# project diretory construtor

```
|--config #some config for build the project
|--dist #save the build ouput code by webpack (for pro)
|--static #static resource file that will be copyed by webpack
|--public #static resource file that will be serve by server (for pro)
|--app #save the server source code(for pro)
|--package.json #use npm ,and it's description
|--readme.md #readme before
|--license #project license file
|--note #save my some note for the project
```

## project config diretory construtor

```
|--config #some config for build the project
| |--dir.construtor.js #the project dir construtor map
| |--server.config.js #the server config for build and dev
```


## production code dir construtor

```
|--dist
| |--static #js/css/img file for web
| | |--js #js file for webpack output or copy from xx path
| | |--css #css file for webpack output or copy from xx path
| | |--img #css file for webpack output or copy from xx path
| |--index.html #csr html index file
```
