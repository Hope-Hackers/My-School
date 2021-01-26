<template>
  <div
    class="section-bg style-1"
    style="background-image: ('images/about_1.jpg');"
  >
    <div class="container" id="School">
      <div class="row">
        <div class="col-lg-4">
          <h2 class="section-title-underline style-2">
            <span>About Our School</span>
          </h2>
        </div>
        <div class="col-lg-8">
          <p class="lead">
            Welcome to My School Students have been receiving high quality
            educational programming at our school for over 100 years. We have a
            highlight diverse population of learners from across the world, and
            all over our great provinc
          </p>
          <p>
            Creating a Respectful and Peaceful School Our students are very
            respectful. This leads to a peaceful school climate. Visitors to our
            school will frequently notice students demonstrating respectful
            mannerisms, greeting adults in our building and being courteous. As
            well, our building conveys a sense of warmth, generosity and
            enthusiasm as children, parents and staff are eager to smile and
            make all those who enter our school feel welcome.
          </p>
          <p>
            Student Academic Success/Pride We are committed to providing a safe,
            positive learning environment for our students. Our motto, Working
            Hard to Be Our Best!, suggests an important element of education. It
            reflects the effort we encourage each of our students to put into
            his or her learning.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      info: null,
    };
  },
};
</script>

<style>
.section-title-underline {
  color: #000;
}
.section-title-underline span {
  display: inline-block;
  border-bottom: 4px solid #51be78;
}
.section-title-underline.style-2 {
  color: #fff;
}
.section-title-underline.style-2 span {
  border-color: #51be78;
}
.section-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 4rem 0;
}
.section-bg.style-1 {
  position: relative;
}
.section-bg.style-1:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #4f6646;
  opacity: 0.9;
  z-index: 0;
}
.section-bg.style-1 > .container {
  z-index: 2;
}
.section-bg.style-1 .icon {
  font-size: 3.5rem;
  color: #51be78;
}
.section-bg.style-1 h3 {
  font-size: 20px;
  color: #51be78;
  margin-bottom: 30px;
}
.section-bg.style-1 p {
  color: #f8f9fa;
}
</style>
