/**
 * 替换选择器中含&含非变量的字符
 */
/* -------------配置---------- */
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
 * 旧值新值匹配
 */
const oldNewMatch = {};
/**
 * 变量保护字符
 */
const v_protectVar = "aaaaaaaaaaaaaaaaaaa";
/**
 * 新值忽略列表
 */
const ignoreList = ["&:after", "&:before", "&:hover"];
//const __PROTECT_VAR_REG = u_genRegG(`${protectVar}@{(\s*\w+-*)*}`, 'gi');

/* -------------工具---------- */
/**
 * 生成正则
 */
const u_genRegG = str => new RegExp(str, "gi");
/**
 * 函允诺化
 */
const promisify = () => new Promise(resolve => resolve());

/* -------------函数---------- */
/**
 * 过滤
 */
const filter = v =>
  ignoreList.filter(element => element === v).length >= 1 ? "" : v;
/**
 * 保护
 */
const protectVar = str =>
  str.replace(/@{(\w+-*)+}/gi, word => word.replace(/-/g, v_protectVar));
/**
 * 替换
 */
const replace = v =>
  v.replace(/(-*\w+)+/, word =>
    word in oldNewMatch ? oldNewMatch[word] : word
  );
/**
 * 解保
 */
//const unProtectVar = str => str.replace(u_genRegG(`${v_protectVar}`), '');
const unProtectVar = str =>
  str.replace(/@{(\s*\w+)*}/gi, word =>
    word.replace(u_genRegG(v_protectVar), "-")
  );

/**
 * 入口
 */
const main = async str => {
  let result = promisify()
    .then(() => str)
    .then(filter)
    .then(protectVar)
    .then(replace)
    .then(unProtectVar);
  await result;
  return result;
};
/**
 * 接口 replaceStrIn$Selector
 */
/*
export default txt =>
  txt.replace(/&(\s*\S*)?/g, (word, pos, str) => main(word));
*/
/**
 * 组合函数-避免层层嵌套
 */
const composeFn = function(f, g) {
  return function(x) {
    return f(g(x));
  };
};
/*export */ const mainByCompose = txt => {
  let a = composeFn(protectVar, filter);
  let b = composeFn(unProtectVar, replace);
  let c = composeFn(b, a);
  return txt.replace(/&(\s*\S*)?/g, word => c(word));
};
//console.log(mainByCompose(lessText));
/**
 * 组合函数-避免层层嵌套
 * @desc
 * 通过迭代的方式实现，避免一一手写
 */
const mainByCompose2 = (fnList, txt) => {
  let eachFn = fnList.reduce((prev, next) => composeFn(next, prev));
  return txt.replace(/&(\s*\S*)?/g, word => eachFn(word));
};
console.log(
  mainByCompose2([filter, protectVar, replace, unProtectVar], lessText)
);

/*
let result = promisify()
  .then(() => lessText)
  .then(filter)

  .then(protectVar)
  .then(replace)
  .then(unProtectVar)
  .then(v => v)
  .then(console.log);
*/

/**
 *找到选择器中含&含非变量的字符
 */
const findStrIn$Selector = txt =>
  (txt.match(/&(\s*\S*)?/g) || [])
    // 排除某些
    .filter(v => (ignoreList.includes(v.trim()) ? false : true));
// 去除变量
//.map(v => v.replace(/@{(\s*\w+-*)*}/gi, '').replace(/&/gi, ''))
// 筛选某些
//.filter(v => /(-*\w+)+/g.test(v))
// 去除空值
//.filter(v => v)
//console.log(findStrIn$Selector(lessText));
