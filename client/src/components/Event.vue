<template>
  <div class="event-container">
    <div class="heading">
      <!-- uuid : unique user ID -->
    </div>

    <div class="center">
      <div class="property-card" v-for="item in info" :key="item.message">
        <a href="#">
          <div
            class="property-image"
            :style="{ backgroundImage: `url(${item.img})` }"
          >
            <div class="property-image-title"></div></div
        ></a>
        <div class="property-description">
          <h5>{{ item.title }}</h5>
          <p>
            {{ item.author }}
          </p>
        </div>
      </div>
    </div>

    <div class="body"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "event-container",
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    axios
      .get("http://localhost:5000/api/event")
      .then((response) => (this.info = response.data));
  },
};
</script>

<style scoped>
body {
  background-color: #f2f2f2;
  font-family: "RobotoDraft", "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

h5 {
  margin: 0px;
  font-size: 1.4em;
  font-weight: 700;
}

p {
  font-size: 12px;
}

.center {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* End Non-Essential  */

.property-card {
  margin:109px;
  height: 18em;
  width: 16em;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 16px;
  overflow: hidden;
  -webkit-box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
  box-shadow: 15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
}
/* ^-- The margin bottom is necessary for the drop shadow otherwise it gets clipped in certain cases. */

/* Top Half of card, image. */

.property-image {
  height: 12em;
  width: 16em;
  padding: 1em 2em;
  position: Absolute;
  top: 0px;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  /*background-image: url("https://cdn.photographylife.com/wp-content/uploads/2017/01/What-is-landscape-photography.jpg");*/
  background-size: cover;
  background-repeat: no-repeat;
}

/* Bottom Card Section */

.property-description {
  background-color: #fafafc;
  height: 6em;
  width: 16em;
  position: absolute;
  bottom: 0em;
  -webkit-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0.5em 1em;
  text-align: center;
}

/* Social Icons */

/* Property Cards Hover States */

.property-card:hover .property-description {
  height: 0em;
  padding: 0px 1em;
}
.property-card:hover .property-image {
  height: 18em;
}

.property-card:hover .property-social-icons {
  background-color: white;
}

.property-card:hover .property-social-icons:hover {
  background-color: blue;
  cursor: pointer;
}
</style>
