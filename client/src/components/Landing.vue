<template>
  <div>
      <SliderHome></SliderHome> 
      <Approach></Approach> 
      <About></About>
      <Teachers></Teachers>
      <News></News>
      <Footer></Footer>
  </div>
</template>
<script>


import SliderHome from "./home/SliderHome.vue";
import Approach from './home/Approach.vue';
import About from './home/About.vue';
import Teachers from './home/Teachers.vue';
import News from './home/News.vue';
import Footer from './home/Footer.vue';


export default {
  computed: {},
  methods: {},
  components: {    
    SliderHome,
    Approach,
    About,
    Teachers,
    News,
    Footer,
  },
    
};
</script>
<style>
</style>
