<template>
  <div id="app">
    <TheSideBar />
    <router-view></router-view>
  </div>
</template>

<script>
import TheSideBar from "./components/TheSideBar.vue";
export default {
  name: "App",
  data: () => {
    return {};
  },
  components: {
    TheSideBar,
  },
};
</script>

<style>
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
</style>
