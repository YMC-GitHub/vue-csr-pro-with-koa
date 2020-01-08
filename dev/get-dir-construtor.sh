#!/bin/sh

THIS_FILE_PATH=$(
  cd $(dirname $0)
  pwd
)
source "$THIS_FILE_PATH/function.sh"
THIS_PROJECT_PATH=$(path_resolve "$THIS_FILE_PATH" "../")
source "$THIS_FILE_PATH/config.sh"

function gen_txt() {
  local list=
  local key=
  local val=
  local i=
  local arr=
  local txt=
  local REPLACE_CHAR=
  local ORIGIN_CHAR=
  local rest=
  local str=
  #you can add built-in func list here
  #list=xxx
  if [ -n "${1}" ]; then
    list="${1}"
  fi
  if [ -n "${2}" ]; then
    txt="${2}"
  fi
  list=$(echo "$list" | sed "s/^ *#.*//g" | sed "/^$/d")

  ORIGIN_CHAR=" "
  #REPLACE_CHAR=$(echo $ORIGIN_CHAR | base64 | md5sum | cut -b 1-32)
  REPLACE_CHAR=$(echo $ORIGIN_CHAR | base64 | md5sum | cut -b 1-8)
  list=$(echo "$list" | sed "s/$ORIGIN_CHAR/$REPLACE_CHAR/g")
  txt=$(echo "$txt" | sed "s/$ORIGIN_CHAR/$REPLACE_CHAR/g")

  arr=(${list//,/ })
  for i in "${arr[@]}"; do
    i=$(echo "$i" | sed "s/$REPLACE_CHAR/$ORIGIN_CHAR/g")
    # 获取键名
    key=$(echo $i | awk -F'#' '{print $1}')
    # 获取键值
    val=$(echo $i | awk -F'#' '{print $2}')
    key=$(echo $key | sed "s/ $//g")
    val=$(echo $val | sed "s/ $//g")
    DIC_TPL+=(["$key"]=$val)
  done
  arr=(${txt//,/ })
  for i in "${arr[@]}"; do
    i=$(echo "$i" | sed "s/$REPLACE_CHAR/$ORIGIN_CHAR/g")
    # 获取键名
    key=$(echo $i | awk -F'#' '{print $1}')
    # 获取键值
    #val=$(echo $i | awk -F'#' '{print $2}')
    key=$(echo $key | sed "s/ $//g")
    val=$(echo $val | sed "s/ $//g")
    DIC_TXT+=(["$key"]=$key)
  done

  arr=(${txt//,/ })
  #arr=(${list//,/ })
  INCLUDE_CHAR="#"
  txt=
  for i in ${arr[@]}; do
    i=$(echo "$i" | sed "s/$REPLACE_CHAR/$ORIGIN_CHAR/g")
    if [[ "$i" =~ "$INCLUDE_CHAR" ]]; then
      key=$(echo "$i" | cut -d "#" -f1)
      val=$(echo "$i" | cut -d "#" -f2)
      key=$(echo $key | sed "s/ $//g")
      val=$(echo $val | sed "s/ $//g")
      val=${DIC_TPL[$key]}
      txt=$(
        cat <<EOF
$txt
$key #$val
EOF
      )
    fi
  done

  echo "$txt"
}

function genWithoutTpl() {
  local list=
  local key=
  local val=
  local i=
  local arr=
  local txt=
  local REPLACE_CHAR=
  local ORIGIN_CHAR=
  local rest=
  local str=
  #you can add built-in func list here
  #list=xxx
  if [ -n "${1}" ]; then
    list="${1}"
  fi
  list=$(echo "$list" | sed "s/^ *#.*//g" | sed "/^$/d")

  ORIGIN_CHAR=" "
  #REPLACE_CHAR=$(echo $ORIGIN_CHAR | base64 | md5sum | cut -b 1-32)
  REPLACE_CHAR=$(echo $ORIGIN_CHAR | base64 | md5sum | cut -b 1-8)
  list=$(echo "$list" | sed "s/$ORIGIN_CHAR/$REPLACE_CHAR/g")
  arr=(${list//,/ })
  for i in "${arr[@]}"; do
    i=$(echo "$i" | sed "s/$REPLACE_CHAR/$ORIGIN_CHAR/g")
    # 获取键名
    key=$(echo $i | awk -F'#' '{print $1}')
    key=$(echo $key | sed "s/ $//g")
    DIC_TXT+=(["$key"]=$key)
  done

  INCLUDE_CHAR="#"
  txt=
  for i in ${arr[@]}; do
    i=$(echo "$i" | sed "s/$REPLACE_CHAR/$ORIGIN_CHAR/g")
    key=$(echo $i | awk -F'#' '{print $1}')
    key=$(echo $key | sed "s/ $//g")
    val=${DIC_TXT[$key]}
    txt=$(
      cat <<EOF
$txt
$val
EOF
    )
  done
  echo "$txt"
}

tpl=$(
  cat <<EOF

EOF
)

function useTPL() {
  #txt=$(tree -I dev -L 1 "$path")
  txt=$(tree -I dev "$path")
  txt=$(echo "$txt" | sed "s/\`--/|--/g")
  txt=$(echo "$txt" | sed "s/|-- /|--/g")
  if [ $debug = "1" ]; then
    #for debug
    gen_txt "$tpl" "$txt"
  else
    echo "gen $file"
    gen_txt "$tpl" "$txt" >"$file"
  fi
}

declare -A DIC_TPL
DIC_TPL=()
declare -A DIC_TXT
DIC_TXT=()

path=
txt=
project=
file=
debug=
use_tpl=

project="vue-ssr-demo"
#path="/d/code-store/nodejs/${project}"
path="$THIS_PROJECT_PATH"
file="${path}/dev/dir-construtor.txt"
debug=0
use_tpl=0
if [ $use_tpl = "1" ]; then
  useTPL
else
  echo "gen $file without tpl"
  #txt=$(tree -I dev "$path")
  txt=$(tree -I dev -L 2 "$path")
  txt=$(echo "$txt" | sed "s/\`--/|--/g")
  txt=$(echo "$txt" | sed "s/|-- /|--/g")
  genWithoutTpl "$txt" >"$file"

fi

#get tree help
#tree --help |grep "\-d"
#only dir length
#tree --help |grep "\-L"
##file-usage
#01.set config
#02.run sh
#./dev/get-dir-construtor.sh
