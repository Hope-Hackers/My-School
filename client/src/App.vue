<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./Home";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
#app {
  width: 100%;
}
</style>
