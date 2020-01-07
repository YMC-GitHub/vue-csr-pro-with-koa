<template>
  <div :class="wrapClasses"><slot /></div>
</template>
<script>
import { ns, layout_BE_contact, layout_NB_contact } from "./commom.js";
const prefixCls = `${ns}${layout_NB_contact}layout`;
export default {
  name: "Header",
  computed: {
    wrapClasses() {
      return `${prefixCls}${layout_BE_contact}header`;
    }
  }
};
</script>
