#!/bin/sh
THIS_FILE_PATH=$(
  cd $(dirname $0)
  pwd
)

listOpts=$(
  cat <<EOF
#--save-prod
--save-dev
#--registry=https://registry.npm.taobao.org
EOF
)
listLib=$(
  cat <<EOF
EOF
)

source $THIS_FILE_PATH/npm-install-postcss6.sh
source $THIS_FILE_PATH/npm-install-less3.sh
source $THIS_FILE_PATH/npm-install-sass4.sh
source $THIS_FILE_PATH/npm-install-babel6.sh
source $THIS_FILE_PATH/npm-install-eslint4.sh
source $THIS_FILE_PATH/npm-install-webpack3.sh

listLib=$(
  cat <<EOF
#send cross platform native notifications using Node.js?
"node-notifier":"^5.1.2"
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
"eslint-friendly-formatter":"^3.0.0"
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

#run unix shell commands in nodejs?
listLib=$(
  cat <<EOF
"shelljs":"^0.7.6"
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

#compare npm lib version?
listLib=$(
  cat <<EOF
"semver":"^5.3.0"
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

#colorful output in terminal?
listLib=$(
  cat <<EOF
"chalk":"^2.0.1",
"ora":"^1.2.0"
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

#remove the old build dir?
listLib=$(
  cat <<EOF
"rimraf":"^2.6.0
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

#find port you can use?
listLib=$(
  cat <<EOF
"portfinder": "^1.0.13",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
#Run scripts that set and use environment variables across platforms?
"cross-env": "^5.0.1",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
#Holds data in a javascript object?
"memory-fs": "^0.4.1",
EOF
)
#install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
#automatically restarting the node application when file changes
"nodemon": "^1.18.4",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

#source $THIS_FILE_PATH/npm-install-koa2.sh

##file usage
#./dev/npm-install-csr-dev-lib.sh
