<template>
  <div class="container" id="main-page">
    <TopBar></TopBar>
    <NavBar></NavBar>
    <Slider></Slider>
    <Info></Info>
    <About></About>
    <Team></Team>
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
import Team from "./landing/Team.vue";
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
    Team,
    News,
    Footer,
  },
};
</script>
<style>
.owl-carousel {
  display: block !important;
  margin-top: 100px;
}
#nav1 {
  padding-top: 0px;
  padding-bottom: 0px;
}
#main-page {
  position: absolute;
  top: 0;
  left: 10%;
}
</style>
