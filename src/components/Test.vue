<template>
  <div>
    Just a test page.
    <div>
      <router-link to="/">Home</router-link>
    </div>
    <div>
      <h2>{{ mode }}</h2>
    </div>
    <div>
      <span>{{ count }}</span>
    </div>
    <p>{{ $t("message.hello") }}</p>
    <div class="locale-changer">
      <select v-model="$i18n.locale">
        <option 
v-for="(lang, i) in langs" :key="`Lang${i}`" 
:value="lang">{{
                  lang
                }}</option>
      </select>
    </div>
    <div><button @click="count++">+1</button></div>

    <!-- -->
    <div id="demo">
      <button @click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

    <button @click="shuffle">Shuffle</button>
    <transition-group 
name="flip-list" tag="ul">
      <li 
v-for="item in items" :key="item">
        {{ item }}
      </li>
    </transition-group>
    <div class="flexbox-centering">
      <div class="child">Centered content.</div>
    </div>

    <p class="gradient-text">Gradient text</p>

    <ul>
      <li>
        <a href="#"><i 
class="fa fa-facebook" aria-hidden="true"/></a>
      </li>
      <li>
        <a href="#"><i 
class="fa fa-twitter" aria-hidden="true"/></a>
      </li>
      <li>
        <a href="#"><i 
class="fa fa-google-plus" aria-hidden="true"/></a>
      </li>
      <li>
        <a href="#"><i 
class="fa fa-linkedin" aria-hidden="true"/></a>
      </li>
      <li>
        <a href="#"><i 
class="fa fa-instagram" aria-hidden="true"/></a>
      </li>
    </ul>
    <button 
data-balloon="Whats up!" data-balloon-pos="up">Hover me!</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mode: process.env.VUE_ENV === "server" ? "server" : "client",
      count: 2,
      langs: ["ch", "en"],
      show: true,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  methods: {
    updateCount(e) {
      this.$store.commit("updateMessage", e.target.value);
    },
    shuffle: function() {
      this.items = _.shuffle(this.items);
    }
  }
};
</script>

<style scoped lang="scss" src="@/style/balloon.scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.flip-list-move {
  transition: transform 1s;
}

.flexbox-centering {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.gradient-text {
  background: -webkit-linear-gradient(pink, red);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}

/*居中*/
ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  display: flex;
}

ul li {
  list-style: none;
}

ul li a {
  position: relative;
  /*大小控制*/
  width: 60px;
  height: 60px;
  display: block;
  text-align: center;
  /*外距控制*/
  margin: 0 2px;
  border-radius: 50%;
  /*内园实现，或者说实现立体感*/
  padding: 5px;
  box-sizing: border-box;
  text-decoration: none;
  /*阴影控制*/
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  background: linear-gradient(0deg, #ddd, #fff);
  transition: 0.5s;
}
ul li a:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
ul li a .fa {
  widht: 100%;
  height: 100%;
  display: block;
  /*实现内园，或者说立体感*/
  background: linear-gradient(0deg, #fff, #ddd);
  border-radius: 50%;
  line-height: calc(60px - 12px);
  font-size: 24px;
  color: #262626;
  transition: 0.5s;
}

ul li:nth-child(1) a:hover .fa {
  color: #3b5998;
}

ul li:nth-child(2) a:hover .fa {
  color: #00aced;
}

ul li:nth-child(3) a:hover .fa {
  color: #dd4b39;
}

ul li:nth-child(4) a:hover .fa {
  color: #007bb6;
}

ul li:nth-child(5) a:hover .fa {
  color: #517fa4;
}
</style>
