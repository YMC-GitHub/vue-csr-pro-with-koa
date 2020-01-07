<template>
  <div class="loading">
    <div
      v-for="(dotNum, index) in dotNums"
      :key="index"
      :style="dotTransform(index, dotNums)"
    >
      <span :style="dotAimation(index, dotNums)" />
    </div>
  </div>
</template>
<style lang="scss">
:root {
  --loadingRadius: 168px;
  --dotRadius: 24px;
  --dotColor: #d8d8d8;
}

.loading {
  position: relative;
  font-size: 0;
  border-radius: 50%;
  transform-origin: center;

  width: var(--loadingRadius);
  height: var(--loadingRadius);
  color: var(--dotColor);

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;

    width: var(--dotRadius);
    height: var(--dotRadius);
    color: var(--dotColor);
    margin-top: calc((var(--dotRadius) / 2) * -1);
    margin-left: calc((var(--dotRadius) / 2) * -1);
  }

  span {
    display: block;
    background-color: currentColor;
    border: 0 solid currentColor;
    border-radius: 100%;
    animation: ball-spin 1s infinite ease-in-out;

    width: var(--dotRadius);
    height: var(--dotRadius);
  }
}

// animation keyframes

@keyframes ball-spin {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 0;
    transform: scale(0);
  }
}

.control-form {
  margin: 10px 0;
}
.loading-demo {
  min-width: 200px;
}
</style>
<script>
export default {
  name: "Loading",
  data() {
    return {
      loadingRadius: 168,
      dotRadius: 18,
      dotColor: "#ff3366",
      dotNums: 36
    };
  },
  computed: {
    /**eslint-disacle*/
    changeStyle: function() {
      let rootEle = document.documentElement;
      //console.log(rootEle);
      rootEle.style.setProperty("--loadingRadius", `${this.loadingRadius}px`);
      rootEle.style.setProperty("--dotRadius", `${this.dotRadius}px`);
      rootEle.style.setProperty("--dotColor", this.dotColor);
    }
    /**eslint-disacle*/
  }
};
</script>
