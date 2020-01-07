<template>
  <div 
:class="wrapClasses" :style="wrapStyles">
    <span
      v-show="showZeroTrigger"
      @click="toggleCollapse"
      :class="zeroWidthTriggerClasses"
    >
      <i class="ivu-icon ivu-icon-navicon-round" />
    </span>
    <div :class="childClasses">
      <slot />
    </div>
    <slot name="trigger">
      <div
        v-show="showBottomTrigger"
        :class="triggerClasses"
        @click="toggleCollapse"
        :style="{ width: siderWidth + 'px' }"
      >
        <i :class="triggerIconClasses" />
      </div>
    </slot>
  </div>
</template>
<script>
// 导入工具
import { on, off } from "@/utlis/dom";
import { oneOf, dimensionMap, setMatchMedia } from "@/utlis/assist";
import { ns, layout_BE_contact, layout_NB_contact } from "./commom.js";
const prefixCls = `${ns}${layout_NB_contact}layout`;
setMatchMedia();

export default {
  // 标签名字
  name: "Sider",
  // 属性定义
  /* eslint-disable */
  props: {
    // 侧边栏是否收起
    value: {
      // if it's collpased now
      type: Boolean,
      default: false
    },
    // 侧边栏宽度
    width: {
      type: [Number, String],
      default: 200
    },
    // 侧边栏收缩后宽度
    collapsedWidth: {
      type: [Number, String],
      default: 64
    },
    // 默认隐藏触发器
    hideTrigger: {
      type: Boolean,
      default: false
    },
    // 触发响应式布局的断点
    breakpoint: {
      type: String,
      validator(val) {
        return oneOf(val, ["xs", "sm", "md", "lg", "xl"]);
      }
    },
    // 侧边栏是否可以收起
    collapsible: {
      type: Boolean,
      default: false
    },
    // 侧边栏是否默认收起
    defaultCollapsed: {
      type: Boolean,
      default: false
    },
    // 改变侧边栏触发器箭头方向和收起方向
    reverseArrow: {
      type: Boolean,
      default: false
    }
  },
  /* eslint-enable */
  data() {
    return {
      prefixCls: prefixCls,
      mediaMatched: false
    };
  },
  computed: {
    wrapClasses() {
      return [
        `${prefixCls}`,
        this.siderWidth ? "" : `${prefixCls}-zero-width`,
        this.value ? `${prefixCls}-collapsed` : ""
      ];
    },
    wrapStyles() {
      return {
        width: `${this.siderWidth}px`,
        minWidth: `${this.siderWidth}px`,
        maxWidth: `${this.siderWidth}px`,
        flex: `0 0 ${this.siderWidth}px`
      };
    },
    triggerClasses() {
      return [
        `${prefixCls}-trigger`,
        this.value ? `${prefixCls}-trigger-collapsed` : ""
      ];
    },
    childClasses() {
      return `${this.prefixCls}-children`;
    },
    zeroWidthTriggerClasses() {
      return [
        `${prefixCls}-zero-width-trigger`,
        this.reverseArrow ? `${prefixCls}-zero-width-trigger-left` : ""
      ];
    },
    triggerIconClasses() {
      return [
        "ivu-icon",
        `ivu-icon-chevron-${this.reverseArrow ? "right" : "left"}`,
        `${prefixCls}-trigger-icon`
      ];
    },
    siderWidth() {
      return this.collapsible
        ? this.value
          ? this.mediaMatched
            ? 0
            : parseInt(this.collapsedWidth)
          : parseInt(this.width)
        : this.width;
    },
    showZeroTrigger() {
      return this.collapsible
        ? (this.mediaMatched && !this.hideTrigger) ||
            (parseInt(this.collapsedWidth) === 0 &&
              this.value &&
              !this.hideTrigger)
        : false;
    },
    showBottomTrigger() {
      return this.collapsible ? !this.mediaMatched && !this.hideTrigger : false;
    }
  },
  methods: {
    toggleCollapse() {
      let value = this.collapsible ? !this.value : false;
      this.$emit("input", value);
    },
    matchMedia() {
      let matchMedia;
      if (window.matchMedia) {
        matchMedia = window.matchMedia;
      }
      let mediaMatched = this.mediaMatched;
      this.mediaMatched = matchMedia(
        `(max-width: ${dimensionMap[this.breakpoint]})`
      ).matches;

      if (this.mediaMatched !== mediaMatched) {
        this.$emit("input", this.mediaMatched);
      }
    },
    onWindowResize() {
      this.matchMedia();
    }
  },
  watch: {
    value(stat) {
      this.$emit("on-collapse", stat);
    }
  },
  mounted() {
    if (this.defaultCollapsed) {
      this.$emit("input", this.defaultCollapsed);
    }
    if (this.breakpoint !== undefined) {
      on(window, "resize", this.onWindowResize);
      this.matchMedia();
    }
  },
  beforeDestroy() {
    if (this.breakpoint !== undefined) {
      off(window, "resize", this.onWindowResize);
    }
  }
};
</script>
