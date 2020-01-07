<style scoped>
@import "../style/chat.css";
</style>

<template>
  <div class="chatapp">
    <thread-section />
    <message-section />
  </div>
</template>

<script>
import ThreadSection from "@/components/chat/ThreadSection.vue";
import MessageSection from "@/components/chat/MessageSection.vue";
export default {
  name: "Chat",
  components: {
    ThreadSection,
    MessageSection
  }
};
</script>
