<template>
  <div :class="wrapClasses"><slot /></div>
</template>
<script>
import {
  ns,
  layout_BE_contact,
  layout_NB_contact,
  layoutNBEM
} from "./commom.js";
const prefixCls = `${ns}${layout_NB_contact}layout`;

export default {
  name: "Layout",
  // 数据
  data() {
    return {
      // 有无侧边栏
      hasSider: false
    };
  },
  // 属性计算
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}`,
        //layoutNBEM.b(),//this is ok
        {
          [`${prefixCls}-has-sider`]: this.hasSider
        }
      ];
    }
  },
  // 方法
  methods: {
    // 查找侧边栏
    findSider() {
      return this.$children.some(child => {
        return child.$options.name === "Sider";
      });
    }
  },
  mounted() {
    this.hasSider = this.findSider();
  }
};
</script>
