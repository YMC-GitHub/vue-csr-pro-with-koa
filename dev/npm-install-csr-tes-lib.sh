#!/bin/sh
THIS_FILE_PATH=$(
  cd $(dirname $0)
  pwd
)

source $THIS_FILE_PATH/npm-install-karma1.sh
source $THIS_FILE_PATH/npm-install-mocha3.sh
source $THIS_FILE_PATH/npm-install-chai4.sh
source $THIS_FILE_PATH/npm-install-sinon4.sh
#source $THIS_FILE_PATH/npm-install-eslint4.sh
#source $THIS_FILE_PATH/npm-install-eslint6.sh

listLib=$(
  cat <<EOF
#Run scripts that set and use environment variables across platforms?
"cross-env": "^5.0.1",
#Holds data in a javascript object?
"memory-fs": "^0.4.1",
#automatically restarting the node application when file changes
"nodemon": "^1.18.4",
#Automated end-to-end testing framework using W3C Webdriver?
"nightwatch": "^0.9.12",
EOF
)

listLib=$(
  cat <<EOF
#Automated end-to-end testing framework using W3C Webdriver?
"nightwatch": "^0.9.12",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

listLib=$(
  cat <<EOF
"cross-spawn": "^5.0.1",
EOF
)
install
#uninstall && npm prune && npm ls --depth=0

##file usage
#./dev/npm-install-csr-tes-lib.sh
