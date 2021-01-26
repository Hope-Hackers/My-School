<template>
  <div class="container">
    <TopBar></TopBar>
    <NavBar></NavBar>
    <Slider></Slider>
    <Info></Info>
    <About></About>
    <Teachers></Teachers>
    <News></News>
    <Footer></Footer>
  </div>
</template>
<script>
//import axios from "axios";
import TopBar from "./landing/TopBar.vue";
import NavBar from "./landing/NavBar.vue";
import Slider from "./landing/Slider.vue";
import Info from "./landing/Info.vue";
import About from "./landing/About.vue";
import Teachers from "./landing/Teachers.vue";
import News from "./landing/News.vue";

import Footer from "./landing/Footer.vue";

export default {
  computed: {},
  methods: {},
  components: {
    TopBar,
    NavBar,
    Slider,
    Info,
    About,
    Teachers,
    News,
    Footer,
  },
};
</script>
<style>
html {
  overflow: scroll !important;
}
.owl-carousel {
  display: block !important;
  margin-top: 100px;
}
#nav1 {
  padding-top: 0px;
  padding-bottom: 0px;
}
</style>
