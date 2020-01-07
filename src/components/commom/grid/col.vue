<template>
  <div 
:class="classes" :style="styles">
    <slot />
  </div>
</template>
<script>
import { findComponentUpward } from "@/utlis/assist";
import { grid_prefix_cls, grid_BE_contact, grid_EM_contact } from "./commom.js";
const prefixCls = `${grid_prefix_cls}${grid_BE_contact}col`;

export default {
  name: "ICol",
  /* eslint-disable */
  props: {
    // 占位格数
    span: [Number, String],
    // 栅格顺序
    order: [Number, String],
    // 左侧间隔
    offset: [Number, String],
    // 向右移动格数
    push: [Number, String],
    // 向左移动格数
    pull: [Number, String],
    // 自定类名
    className: String,
    // 相应式栅格
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object]
  },
  /* eslint-enable */
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    classes() {
      let classList = [
        `${prefixCls}`,
        {
          [`${prefixCls}${grid_EM_contact}span-${this.span}`]: this.span,
          [`${prefixCls}${grid_EM_contact}order-${this.order}`]: this.order,
          [`${prefixCls}${grid_EM_contact}offset-${this.offset}`]: this.offset,
          [`${prefixCls}${grid_EM_contact}push-${this.push}`]: this.push,
          [`${prefixCls}${grid_EM_contact}pull-${this.pull}`]: this.pull,
          [`${this.className}`]: !!this.className
        }
      ];

      ["xs", "sm", "md", "lg"].forEach(size => {
        if (typeof this[size] === "number") {
          classList.push(
            `${prefixCls}${grid_EM_contact}span-${size}-${this[size]}`
          );
        } else if (typeof this[size] === "object") {
          let props = this[size];
          Object.keys(props).forEach(prop => {
            classList.push(
              prop !== "span"
                ? `${prefixCls}${grid_EM_contact}${size}-${prop}-${props[prop]}`
                : `${prefixCls}${grid_EM_contact}span-${size}-${props[prop]}`
            );
          });
        }
      });

      return classList;
    },
    styles() {
      let style = {};
      if (this.gutter !== 0) {
        style = {
          paddingLeft: this.gutter / 2 + "px",
          paddingRight: this.gutter / 2 + "px"
        };
      }

      return style;
    }
  },
  methods: {
    updateGutter() {
      const Row = findComponentUpward(this, "Row");
      if (Row) {
        Row.updateGutter(Row.gutter);
      }
    }
  },
  mounted() {
    this.updateGutter();
  },
  beforeDestroy() {
    this.updateGutter();
  }
};
</script>
