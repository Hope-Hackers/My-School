<template>
  <div id="app">
    <TheTopBar @togglenav="navOpen = !navOpen" />
    <TheSideBar :open="navOpen" />
    <router-view></router-view>
  </div>
</template>
<script>
import TheTopBar from "./components/TheTopBar.vue";
import TheSideBar from "./components/TheSideBar.vue";

export default {
  name: "App",
  data: () => {
    return {
      navOpen: false,
    };
  },
  components: {
    TheTopBar,
    TheSideBar,
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
  // background: url("./assets/class1.jpg") center center;
  background-size: cover;
}
</style>
