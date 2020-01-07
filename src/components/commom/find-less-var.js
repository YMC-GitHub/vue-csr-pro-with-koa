let lessText = `
// 命名空间
@css-prefix             : spm;
// 区块名字:layout
@layout-prefix-cls: ~"@{css-prefix}@{layout-NB-contact}layout";
// 元素名字:header footer content sider
@layout-E-list: header footer body content sider;
// 修饰名字:

// 状态名字:

// 空间与区块连接符：-
@layout-NB-contact: '-';
// 区块与元素连接符：'__' for BEM or '-' for iview
@layout-BE-contact: '__';
// 元素与修饰连接符：'--' for BEM or '-' for iview
@layout-EM-contact:'-';
// 元素与状态连接符：' ' or '-'
@layout-ES-contact:'-';

/*
@layout-header-name:-header;
@layout-footer-name:-footer;
@layout-body-name:-body;
@layout-content-name:-content;
@layout-sider-name:-sider;
*/
/* if less version support list function, use as below :*/
/*
@layout-header-name:-extract(@layout-E-list,1);
@layout-footer-name:-extract(@layout-E-list,2);
@layout-body-name:-extract(@layout-E-list,3);
@layout-content-name:-extract(@layout-E-list,4);
@layout-sider-name:-extract(@layout-E-list,5);
*/
@layout-header-name:~"@{layout-BE-contact}header";
@layout-footer-name:~"@{layout-BE-contact}footer";
@layout-body-name:~"@{layout-BE-contact}body";
@layout-content-name:~"@{layout-BE-contact}content";
@layout-sider-name:~"@{layout-BE-contact}sider";

@grid-columns                : 24;
@grid-gutter-width           : 0;
@layout-body-background      : #f5f7f9;
@layout-header-background    : #799ae7;
@layout-header-height        : 64px;
@layout-header-padding       : 0 50px;
@layout-footer-padding       : 24px 50px;
@layout-footer-background    : @layout-body-background;
@layout-sider-background     : @layout-header-background;
@layout-trigger-height       : 48px;
@layout-trigger-color        : #fff;
@layout-zero-trigger-width   : 36px;
@layout-zero-trigger-height  : 42px;

@ease-in-out            : ease-in-out;

@border-radius-base     : 6px;
@text-color             : #495060;
@font-size-base         : 14px;
.@{layout-prefix-cls} {
    display: flex;
    flex-direction: column;
    flex: auto;
    background: @layout-body-background;

    &&-has-sider {
        flex-direction: row;
        > .@{layout-prefix-cls},
        > .@{layout-prefix-cls}-content {
          overflow-x: hidden;
        }
    }

    &@{layout-header-name},
    &@{layout-footer-name} {
        flex: 0 0 auto;
    }

    &@{layout-header-name} {
        background: @layout-header-background;
        padding: @layout-header-padding;
        height: @layout-header-height;
        line-height: @layout-header-height;
    }

    &@{layout-sider-name} {
        transition: all .2s @ease-in-out;
        position: relative;
        background: @layout-sider-background;

        min-width: 0;

        &-children {
            height: 100%;
            padding-top: 0.1px;
            margin-top: -0.1px;
        }

        &-has-trigger {
            padding-bottom: @layout-trigger-height;
        }

        &-trigger {
            position: fixed;
            bottom: 0;
            text-align: center;
            cursor: pointer;
            height: @layout-trigger-height;
            line-height: @layout-trigger-height;
            color: @layout-trigger-color;
            background: @layout-sider-background;
            z-index: 1000;
            transition: all .2s @ease-in-out;
            .@{css-prefix}-icon {
                font-size: 16px;
            }
            >* {
                transition: all .2s;
            }
            &-collapsed {
                .@{layout-prefix-cls}-sider-trigger-icon {
                    transform: rotateZ(180deg);
                }
            }
        }

        &-zero-width {
            & > * {
                overflow: hidden;
            }

            &-trigger {
                position: absolute;
                top: @layout-header-height;
                right: -@layout-zero-trigger-width;
                text-align: center;
                width: @layout-zero-trigger-width;
                height: @layout-zero-trigger-height;
                line-height: @layout-zero-trigger-height;
                background: @layout-sider-background;
                color: #fff;
                font-size: @layout-zero-trigger-width / 2;
                border-radius: 0 @border-radius-base @border-radius-base 0;
                cursor: pointer;
                transition: background .3s ease;

                &:hover {
                  background: tint(@layout-sider-background, 10%);
                }

                &&-left {
                    right: 0;
                    left: -@layout-zero-trigger-width;
                    border-radius: @border-radius-base 0 0 @border-radius-base;
                }
            }
        }
    }

    &@{layout-footer-name} {
        background: @layout-footer-background;
        padding: @layout-footer-padding;
        color: @text-color;
        font-size: @font-size-base;
    }

    &@{layout-content-name} {
        flex: auto;
    }
}
`;

/**
 * 获取less声明中的变量
 * @param {*} lessText
 * @description
 * 其原理是查找"@xxx:xx;"此格式的内容。
 * 问题：可能存在bug,即包含某些样式"属性：取值"--如"{xx@xxx:xxx}"
 * 解决：查找之前过滤一下数据，比如获取css样式键值，然后替换掉它
 */
const findVarWhenDefine = lessText =>
  (lessText.match(/@(\w+-*)+\s*:+[^;]+;+/gi) || []).map(v => v.trim());
//console.log(findVarWhenDefine(lessText));

/**
 * 获取用于选择器中的变量
 * @param {*} lessText
 */
const findVarUsedInSelector = lessText =>
  (lessText.match(/@{(\w+-*)*}/gi) || []).map(v => v.trim());
//@{(\s*\w+\s*-*\s*\w+\s*)*}/gi;简化版=>:/@{(\w+-*)*}/gi
//console.log(findVarUsedInSelector(lessText));
//next:
//.replace(/{|}/gi, "")

//获取用于其属性中的变量
//获取用于属性值中的变量
const findVarUsedInRule = lessText =>
  // e = /@\s*\w+\s*-*\s*\w+\s*\s*-*\w*\s*/gi; //=>@xx-xx-xx b //问题：存在数量问题，只能找到三个-连接的
  // e = /@(\s*\w+\s*-*)*/gi;//fix：只能找到三个-连接的;问题：只含@的也有--"@"；问题：属性取值有其他内容--"@border-radius-base 0 0 "
  //e = /@(\s*\w+\s*-*)+/gi;//fix:只含@的也有--"@"；
  //e = /@(\w+-*)+/gi;//fix:只含@的也有--"@"；fix:属性取值有其他内容--"@border-radius-base 0 0 "。但这为严格模式，级必须"@xx-xx.."不能含空格、tab、换行
  //lessText.match(e).map(v=>v.trim()).filter(v=>v!="@media")
  (lessText.match(/@(\w+-*)+/gi) || [])
    //除左右空
    .map(v => v.trim())
    //排除某些
    .filter(v => v != "@media" && v != "@import");
//console.log(findVarUsedInRule(lessText));

//获取css样式键值
const findCssKeyValPair = lessText =>
  (lessText.match(/{((\w*\s*)@*(\w+-*)+\s*:+[^;]+;+(\s\w)*)+/gi) || [])
    .map(v => v || "")
    .filter(v => v);
//e = /@*(\w+-*)+\s*:+[^;]+;+/gi;
//获取css样式键值
//console.log(findCssKeyValPair(lessText));

/**
 * 获取带有变量的选择器
 * @param {*} txt
 */
const findSelectorThatUsedVar = lessText =>
  ///\s*\w*\.*\s*-*@{(\s*\w+\s*-*\s*\w+\s*)*}(\s*-*\w*\s*)*/gi;简化版:/(\s*\w+-*)*@{(\s*\w+-*)*}(\s*\w+-*)*/gi
  ///(\s*\w+-*)*@{(\s*\w+-*)*}(\s*\w+-*)*/gi 严谨版：
  ///(\w-)*@{(\w+-*)*}(\w-)*/gi; //(\s*\w+-*)*@{(\s*\w+-*)*}(\s*\w+-*)*/gi 严谨版.去掉不必要的空格
  (lessText.match(/(\w-)*@{(\w+-*)*}(\w-)*/gi) || []).map(v => v.trim());
//console.log(findSelectorThatUsedVar(lessText));
/**
 * 打印字符及其位置
 */
const prinStrAndPos = (reg, txt) => {
  let result;
  while ((result = reg.exec(txt))) {
    console.log(`Found ${result[0]} at ${result.index}`);
  }
};

/**
 * 去除注释
 * @param {*} txt
 */
const rmComment = txt => {
  return (
    txt
      //=>replace //xxx
      .replace(/\/\/(\s\S*)?/g, "")
      //=>replace /** xx*/ /*xx*/
      .replace(/\/\*([\s\S]*?)\*\//g, "")
  );
};

const ignoreList = ["&:after", "&:before", "&:hover"];
/**
 * 过滤
 */
const filter = v =>
  //ignoreList.filter(element => element !== v).length >= 1 ? '' : v;
  ignoreList.includes(v) ? "" : v;

//获取用于属性值中的变量
const var_used_in_pro = txt =>
  (txt.match(/@(\w+-*)+/gi) || [])
    .map(v => v.trim())
    .filter(v => v != "@media" && v != "@import");
//获取用于选择器中的变量
const var_used_in_selector = txt =>
  (txt.match(g) || []).map(v => v.trim().replace(/{|}/gi, ""));
//获取变量
const findVar = txt => {
  return var_used_in_pro(txt).concat(var_used_in_selector(txt));
};

/**
 * 查找带有&的选择器
 */
const find$InSelector = txt =>
  (txt.match(/&(\s*\S*)?/g) || [])
    // 排除某些
    .filter(v => (ignoreList.includes(v.trim()) ? false : true))
    // 包含某些
    .filter(v => v.indexOf("-") >= 0);
//.join("\n")

/**
 *找到选择器中含&含非变量的字符
 */
const findStrIn$Selector = txt =>
  (txt.match(/&(\s*\S*)?/g) || [])
    // 排除某些
    .filter(v => (ignoreList.includes(v.trim()) ? false : true))
    //.filter(v => v.indexOf("{") < 0 && v.indexOf("}") < 0)
    // 去除变量
    //.map(v => v.replace(/@{(\s*\w+-*)*}/gi, "xasdafa$1"))
    .map(v =>
      v
        .trim()
        .replace(/@{(\s*\w+-*)*}/gi, "")
        .replace(/&/gi, "")
    );
// 筛选某些
//.filter(v => /(-*\w+)+/g.test(v));
// 去除空值
//.filter(v => v)
