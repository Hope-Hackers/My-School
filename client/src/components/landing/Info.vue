<template>
  <div class="site-section">
    <div class="container">
      <div class="row mb-5 justify-content-center text-center">
        <div class="col-lg-6 mb-5">
          <h2 class="section-title-underline mb-5">
            <span>Why Our Education System Works</span>
          </h2>
        </div>
      </div>
      <div class="row">
        <div id="app">
          <v-app id="inspire">
            <v-card class="mx-auto" max-width="344">
              <v-img
                src="images/person_1.jpg"
                alt="Image"
                class="img-fluid"
                id="serv_img"
              >
              </v-img>
              <v-card-title>
                SERVICE
              </v-card-title>
              <v-card-subtitle>
                Consultation services to private school teachers and parents for
                up to one hour a month...
              </v-card-subtitle>
            </v-card>
          </v-app>

          <div id="app1">
            <v-app id="inspire">
              <v-card class="mx-auto" max-width="344">
                <v-img
                  src="images/SL1.jpg"
                  alt="Image"
                  class="img-fluid"
                  id="serv_img"
                ></v-img>
                <v-card-title>
                  EVENT
                </v-card-title>
                <v-card-subtitle>
                  Consultation services to private school teachers and parents
                  for up to one hour a month...
                </v-card-subtitle>
              </v-card>
            </v-app>

            <div id="app2">
              <v-app id="inspire">
                <v-card class="mx-auto" max-width="344">
                  <v-img
                    src="images/SL2.jpg"
                    alt="Image"
                    class="img-fluid"
                    id="serv_img"
                  ></v-img>
                  <v-card-title>
                    Activity
                  </v-card-title>
                  <v-card-subtitle>
                    Consultation services to private school teachers and parents
                    for up to one hour a month...
                  </v-card-subtitle>
                </v-card>
              </v-app>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "info",
  data() {
    return {
      info: null,
    };
  },
};
</script>

<style>
.site-section {
  padding: 2.5em 0;
}
@media (min-width: 768px) {
  .site-section {
    padding: 5em 0;
  }
}
.site-section.site-section-sm {
  padding: 4em 0;
}

.site-section-heading {
  padding-bottom: 20px;
  margin-bottom: 0px;
  position: relative;
  font-size: 2.5rem;
}
@media (min-width: 768px) {
  .site-section-heading {
    font-size: 3rem;
  }
}
.feature-1 .feature-1-content,
.person .feature-1-content {
  padding: 50px 20px 20px 20px;
  text-align: center;
}
.feature-1 .feature-1-content h2,
.person .feature-1-content h2 {
  font-size: 1.3rem;
  color: #000;
}

.feature-1 .icon-wrapper,
.person .icon-wrapper {
  position: relative;
  width: 96px;
  height: 55.43px;
  right: 0;
  left: 0;
  margin: 0 auto;
  z-index: 1;
  margin-top: -33.94px;
  background: #ccc;
}
.feature-1 .icon-wrapper > span,
.person .icon-wrapper > span {
  width: 96px;
  height: 96px;
  text-align: center;
  font-size: 3rem;
  line-height: 96px;
  display: inline-block;
  position: absolute;
  top: -20px;
  left: 0;
}
.feature-1 .icon-wrapper:before,
.feature-1 .icon-wrapper:after,
.person .icon-wrapper:before,
.person .icon-wrapper:after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 67.88px;
  height: 67.88px;
  -webkit-transform: scaleY(0.5774) rotate(-45deg);
  -ms-transform: scaleY(0.5774) rotate(-45deg);
  transform: scaleY(0.5774) rotate(-45deg);
  background-color: inherit;
  left: 14.06px;
}
.feature-1 .icon-wrapper:before,
.person .icon-wrapper:before {
  top: -33.94px;
}
.feature-1 .icon-wrapper:after,
.person .icon-wrapper:after {
  bottom: -33.94px;
}
#app1 {
  position: absolute;
  top: 1178px;
}
#app2 {
  position: absolute;
  top: 0px;
  margin-left: 820px;
}
#serv_img {
  background-size: contain;
}
</style>
