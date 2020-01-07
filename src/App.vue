<template>
  <div 
id="app" class="align-h-center ">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0 auto;
}
.align-h-center {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
