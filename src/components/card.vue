<template>
  <div :class="classes">
    <div 
:class="headClasses" v-if="showHead">
      <slot name="title">
        <p v-if="title">
          <Icon 
v-if="icon" :type="icon" />
          {{ title }}
        </p>
      </slot>
    </div>
    <div 
:class="extraClasses" v-if="showExtra"><slot name="extra" /></div>
    <div 
:class="bodyClasses" :style="bodyStyles"><slot /></div>
  </div>
</template>

<style lang="postcss">
@card-prefix-cls: ~"@{css-prefix}card";

.@{card-prefix-cls} {
  background: #fff;
  border-radius: @border-radius-small;
  font-size: @font-size-base;
  position: relative;
  //overflow: hidden;
  transition: all @transition-time @ease-in-out;

  &-bordered {
    border: 1px solid @border-color-base;
    border-color: @border-color-split;
  }

  &-shadow {
    box-shadow: @shadow-card;
  }

  &:hover {
    box-shadow: @shadow-base;
    border-color: #eee;
  }
  &&-dis-hover:hover {
    box-shadow: none;
    border-color: transparent;
  }

  &&-dis-hover&-bordered:hover {
    border-color: @border-color-split;
  }

  &&-shadow:hover {
    box-shadow: @shadow-card;
  }

  &-head {
    .content-header;
  }

  &-extra {
    position: absolute;
    right: 16px;
    top: 14px;
  }

  &-body {
    padding: 16px;
  }
}
</style>

<script>
const prefixCls = "ivu-card";
const defaultPadding = 16;
import Icon from "./icon.vue";

export default {
  name: "Card",
  components: { Icon },
  props: {
    bordered: {
      type: Boolean,
      default: true
    },
    disHover: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    padding: {
      type: Number,
      default: defaultPadding
    },
    /* eslint-disable */
    title: {
      type: String
    },
    icon: {
      type: String
    }
    /* eslint-enable */
  },
  data() {
    return {
      showHead: true,
      showExtra: true
    };
  },
  computed: {
    classes() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-bordered`]: this.bordered && !this.shadow,
          [`${prefixCls}-dis-hover`]: this.disHover || this.shadow,
          [`${prefixCls}-shadow`]: this.shadow
        }
      ];
    },
    headClasses() {
      return `${prefixCls}-head`;
    },
    extraClasses() {
      return `${prefixCls}-extra`;
    },
    bodyClasses() {
      return `${prefixCls}-body`;
    },
    bodyStyles() {
      if (this.padding !== defaultPadding) {
        return {
          padding: `${this.padding}px`
        };
      } else {
        return "";
      }
    }
  },
  mounted() {
    this.showHead = this.title || this.$slots.title !== undefined;
    this.showExtra = this.$slots.extra !== undefined;
  }
};
</script>
