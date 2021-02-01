<template>
  <div>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
      class="slider"
    >
      <b-carousel-slide
        img-src="./images/SL3.jpg"
        img-height="480px"
      ></b-carousel-slide>
      <b-carousel-slide img-src="./images/slider/s2.png"></b-carousel-slide>
      <b-carousel-slide
        img-src="./images/SL5.jpg"
        img-height="480px"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {};
</script>
<style>
.carousel-item img {
  height: 100vh !important ;
}
</style>
