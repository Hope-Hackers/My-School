<template>
  <div class="site-section" id="Teachers">
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-4">
          <h2 class="section-title-underline">
            <span>Our Team</span>
          </h2>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3">
          <img src="images/1.png" alt="Image" class="img-fluid mr-3" />
          <div class="text-center">
            <h3>Zied Sradki</h3>
            <span>Student at RBK</span>
          </div>
        </div>
        <div class="col-lg-3">
          <img src="images/4.png" alt="Image" class="img-fluid mr-3" />
          <div class="text-center">
            <h3>khaled yaferni</h3>
            <span>Student at RBK</span>
          </div>
        </div>
        <div class="col-lg-3">
          <img src="images/3.png" alt="Image" class="img-fluid mr-3" />
          <div class="text-center">
            <h3>melek houidi</h3>
            <span>Student at RBK</span>
          </div>
        </div>
        <div class="col-lg-3">
          <img src="images/2.png" alt="Image" class="img-fluid mr-3" />
          <div class="text-center">
            <h3>wael jouini</h3>
            <span>Student at RBK</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Teachers",
  data() {
    return {
      info: null,
    };
  },
};
</script>
<style>
.text-center {
  text-align: center;
}
.img-fluid mr-3 {
}
</style>
