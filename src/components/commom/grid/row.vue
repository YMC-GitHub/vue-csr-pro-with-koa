<template>
  <div 
:class="classes" :style="styles">
    <slot />
  </div>
</template>
<script>
import { oneOf, findComponentsDownward } from "@/utlis/assist";

import { findComponentUpward } from "@/utlis/assist";
import { grid_prefix_cls, grid_BE_contact, grid_EM_contact } from "./commom.js";
const prefixCls = `${grid_prefix_cls}${grid_BE_contact}row`;
export default {
  name: "Row",
  /* eslint-disable */
  props: {
    // 布局模式
    type: {
      validator(value) {
        return oneOf(value, ["flex"]);
      }
    },
    // 垂直对齐
    align: {
      validator(value) {
        return oneOf(value, ["top", "middle", "bottom"]);
      }
    },
    // 水平对齐
    justify: {
      validator(value) {
        return oneOf(value, [
          "start",
          "end",
          "center",
          "space-around",
          "space-between"
        ]);
      }
    },
    // 栅格间距
    gutter: {
      type: Number,
      default: 0
    },
    // 自定类名
    className: String
  },
  /* eslint-enable */
  computed: {
    classes() {
      return [
        {
          [`${prefixCls}`]: !this.type,
          [`${prefixCls}${grid_EM_contact}${this.type}`]: !!this.type,
          [`${prefixCls}${grid_EM_contact}${this.type}-${this.align}`]: !!this
            .align,
          [`${prefixCls}${grid_EM_contact}${this.type}-${this.justify}`]: !!this
            .justify,
          [`${this.className}`]: !!this.className
        }
      ];
    },
    styles() {
      let style = {};
      if (this.gutter !== 0) {
        style = {
          marginLeft: this.gutter / -2 + "px",
          marginRight: this.gutter / -2 + "px"
        };
      }

      return style;
    }
  },
  methods: {
    updateGutter(val) {
      const Cols = findComponentsDownward(this, "iCol");
      if (Cols.length) {
        Cols.forEach(child => {
          if (val !== 0) {
            child.gutter = val;
          }
        });
      }
    }
  },
  watch: {
    gutter(val) {
      this.updateGutter(val);
    }
  }
};
</script>
