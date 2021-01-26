<template>
  <div class="background" id="app">
    
    <TheSideBar />
    <slide />
    <router-view></router-view>
  </div>
</template>
<script>

import TheSideBar from "./components/TheSideBar.vue";
import slide from "./components/slide.vue";
export default {
  name: "App",
  data: () => {
    return {};
  },
  components: {
   
    TheSideBar,
    slide,
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  width: 100%;
  min-height: 100vh;
  background-size: cover;
}
// .background {
//   background: url("./assets/class1.jpg") center center;
// }
</style>
