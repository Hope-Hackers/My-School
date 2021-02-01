<template>
  <div v-if="this.name">
    <b-navbar toggleable="lg" type="light" class="nav">
      <b-navbar-brand href="#">
        <img src="images/logo.png" alt="Image" width="300px" class="nav-logo" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">HOME</b-nav-item>
          <b-nav-item href="/#Services">OUR APPROACH</b-nav-item>
          <b-nav-item href="/#About">OUR SCHOOL</b-nav-item>
          <b-nav-item href="/#Teachers">OUR TEACHERS</b-nav-item>
          <b-nav-item href="/#News">NEWS</b-nav-item>
          <b-nav-item href="ContactUs">CONTACT US</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div @click="logout" v-if="this.loggedin" class="col-lg-3 text-right">
            <b-nav-item href="#">
              <button class="nav-logout small">Logout</button></b-nav-item
            >
          </div>
          <div v-else>
            <b-nav-item href="#" @click="redirectLog"
              ><button class="nav-login small">Login</button></b-nav-item
            >
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
//sets a cookie for the login for storage
const cookie = require("js-cookie");
export default {
  name: "NavBar",
  data() {
    return {
      name: true,
      info: null,
      loggedin: cookie.get("name"),
    };
  },
  methods: {
    logout() {
      cookie.remove("name");
      localStorage.clear();
      window.location.replace("/");
    },
    redirectLog() {
      this.name = false;
      this.$router.push("/Login");
    },
  },
};
</script>

<style>
.nav {
  padding: 0px 100px 0px 100px;
  background-color: #fff;
  border-bottom: 1px solid #4f4f4f;
  margin-left: 60px;
}

.navbar-light .navbar-nav .nav-link {
  color: #4f4f4f;
  font-weight: 450;
  font-size: 18px;
}
.nav-login {
  color: #fff;
  padding: 10px 35px;
  border-radius: 8px;
  background-color: #009fb7;
}

.nav-login:hover {
  background-color: #fed766;
}

.nav-logout {
  color: #fff;
  padding: 10px 35px;
  border-radius: 8px;
  background-color: #fe4a49;
}

.nav-logout:hover {
  background-color: #fed766;
}
</style>
