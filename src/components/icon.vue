<template>
  <i 
:class="classes" :style="styles" />
</template>
<script>
const prefixCls = "ivu-icon";

export default {
  // 标签名字
  name: "Icon",
  // 属性定义
  props: {
    /* eslint-disable */
    type: String,
    size: [Number, String],
    color: String
    /* eslint-enable */
  },
  // 属性计算
  computed: {
    classes() {
      return `${prefixCls} ${prefixCls}-${this.type}`;
    },
    styles() {
      let style = {};

      if (this.size) {
        style["font-size"] = `${this.size}px`;
      }

      if (this.color) {
        style.color = this.color;
      }

      return style;
    }
  }
};
</script>
