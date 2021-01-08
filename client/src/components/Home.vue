<template>
  <div class="home">
    <div>
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">My School</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="navLink">
              
                <b-dropdown id="dropdown-1" text="Services" class="m-md-2">
                  <b-dropdown-item>Transport</b-dropdown-item>
                  <b-dropdown-item>Canteen</b-dropdown-item>
                  <b-dropdown-item>Nursery</b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="dropdown-1" text="Activities" class="m-md-2">
                  <b-dropdown-item>Clubs</b-dropdown-item>
                  <b-dropdown-item>Outings</b-dropdown-item>
                  <b-dropdown-item>School vacation</b-dropdown-item>
                </b-dropdown>
              
                <!-- <router-link to='/'>Home</router-link>
                <router-link to='/>School Life</router-link>
                <router-link to='/'>Services</router-link>
                <router-link to='/'>Activities</router-link> -->
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto navLink">
                <!-- <a href="./login">Login</a>                 -->
                <router-link to='/login'>Login</router-link>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>       
      </div>
    </div><br>
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col cols="12">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
          >
            <!-- Text slides with image -->
            <b-carousel-slide
              caption="First slide"
              v-bind:img-src="require('.././assets/school1.jpg')"
            ></b-carousel-slide>
            <b-carousel-slide v-bind:img-src="require('.././assets/school2.jpg')"></b-carousel-slide>
            <b-carousel-slide v-bind:img-src="require('.././assets/school3.jpg')"></b-carousel-slide>
            <b-carousel-slide v-bind:img-src="require('.././assets/school4.jpg')"></b-carousel-slide>
            <b-carousel-slide v-bind:img-src="require('.././assets/school5.jpg')"></b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
    <router-view/> 
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart(slide) {
      console.log(slide)
      this.sliding = true
    },
    onSlideEnd(slide) {
      console.log(slide)
      this.sliding = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navLink a {
  padding: 0 10px;
  color: white;
  /* font-weight: bold; */
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
