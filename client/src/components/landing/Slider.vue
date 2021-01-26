<template>
  <div class="hero-slide owl-carousel site-blocks-cover">
    <div
      class="intro-section"
      style="background-image: url('images/hero_1.jpg');"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12 mx-auto text-center">
            <h1></h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "slider",
  data() {
    return {
      info: null,
    };
  },
};
</script>
<style>
.hero-slide {
  position: relative;
}
.hero-slide .owl-nav .owl-prev,
.hero-slide .owl-nav .owl-next {
  position: absolute;
  top: 50%;
  text-align: center;
  width: 40px;
  height: 40px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background: #fff;
}
.hero-slide .owl-nav .owl-prev > span,
.hero-slide .owl-nav .owl-next > span {
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.hero-slide .owl-nav .owl-prev {
  left: 0;
}
.hero-slide .owl-nav .owl-next {
  right: 0;
}
.hero-slide .owl-dots {
  position: absolute;
  bottom: 30px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  text-align: center;
}
.hero-slide .owl-dots .owl-dot {
  display: inline-block;
}
.hero-slide .owl-dots .owl-dot > span {
  border-radius: 50%;
  display: inline-block;
  width: 7px;
  height: 7px;
  margin: 2px 5px;
  background: rgba(255, 255, 255, 0.2);
}
.hero-slide .owl-dots .owl-dot.active > span {
  background: #fff;
}
.owl-slide-3,
.owl-slide {
  position: relative;
}
.owl-slide-3 .owl-stage,
.owl-slide .owl-stage {
  padding-top: 30px;
  padding-bottom: 30px;
}
.owl-slide-3 .owl-nav .owl-prev,
.owl-slide-3 .owl-nav .owl-next,
.owl-slide .owl-nav .owl-prev,
.owl-slide .owl-nav .owl-next {
  position: absolute;
  top: 50%;
  text-align: center;
  width: 40px;
  height: 40px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  background: #fff;
}
.owl-slide-3 .owl-nav .owl-prev > span,
.owl-slide-3 .owl-nav .owl-next > span,
.owl-slide .owl-nav .owl-prev > span,
.owl-slide .owl-nav .owl-next > span {
  font-size: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.owl-slide-3 .owl-nav .owl-prev,
.owl-slide .owl-nav .owl-prev {
  left: 0;
}
.owl-slide-3 .owl-nav .owl-next,
.owl-slide .owl-nav .owl-next {
  right: 0;
}
.owl-slide-3 .owl-dots,
.owl-slide .owl-dots {
  position: absolute;
  bottom: -30px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  text-align: center;
}
.owl-slide-3 .owl-dots .owl-dot,
.owl-slide .owl-dots .owl-dot {
  display: inline-block;
}
.owl-slide-3 .owl-dots .owl-dot > span,
.owl-slide .owl-dots .owl-dot > span {
  border-radius: 50%;
  display: inline-block;
  width: 7px;
  height: 7px;
  margin: 2px 5px;
  background: rgba(0, 0, 0, 0.2);
}
.owl-slide-3 .owl-dots .owl-dot.active > span,
.owl-slide .owl-dots .owl-dot.active > span {
  background: #51be78;
}
.owl-slide .owl-nav {
  display: none;
}
/* Blocks */
.intro-section {
  position: relative;
}
.intro-section,
.intro-section .container .row {
  height: 113vh;
  background-size: contain;
}
.intro-section:before {
  content: "";
  position: absolute;
  height: 109%;
  width: 100%;
  opacity: 0.7;
  border-bottom-right-radius: 0px;
  background-position: center;
  background-repeat: no-repeat;
}
@media (max-width: 991.98px) {
  .intro-section:before {
    width: 100%;
  }
}
.intro-section h1 {
  font-size: 7rem;
  font-weight: 900;
  color: #fff;
}
.intro-section p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  max-width: 400px;
}
.owl-carousel {
  display: block !important;
  margin-top: 105px !important;
}
</style>
