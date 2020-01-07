#!/bin/sh
THIS_FILE_PATH=$(
  cd $(dirname $0)
  pwd
)

listOpts=$(
  cat <<EOF
--save-prod
#--save-dev
#--registry=https://registry.npm.taobao.org
EOF
)
listLib=$(
  cat <<EOF
EOF
)
source $THIS_FILE_PATH/npm-install-vue2.sh
#use axios and other
listLib=$(
  cat <<EOF
"axios": "^0.18.0",
"es6-promise": "^4.2.5",
"md5": "^2.2.1",
"qs": "^6.5.2",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

#source $THIS_FILE_PATH/npm-install-koa2.sh

##file usage
#./dev/npm-install-csr-pro-lib.sh
