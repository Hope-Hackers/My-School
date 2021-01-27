<template>
  <div class="home">
    <div>
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">My School</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="navLink">
              
                <!-- <b-dropdown id="dropdown-1" text="Services" class="m-md-2">
                  <b-dropdown-item>Transport</b-dropdown-item>
                  <b-dropdown-item>Canteen</b-dropdown-item>
                  <b-dropdown-item>Nursery</b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="dropdown-1" text="Activities" class="m-md-2">
                  <b-dropdown-item>Clubs</b-dropdown-item>
                  <b-dropdown-item>Outings</b-dropdown-item>
                  <b-dropdown-item>School vacation</b-dropdown-item>
                </b-dropdown> -->
              
                <router-link to='/'>Home</router-link>
                <!-- <router-link to='/'>School Life</router-link>
                <router-link to='/'>Services</router-link>
                <router-link to='/'>Activities</router-link> -->
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto navLink">
                <router-link to='/Parent'>Parent Dashboard</router-link>
                <router-link to='/Teacher/Schedule'>Teacher Dashboard</router-link>
                <router-link to='/Admin'>Admin</router-link>
                <router-link to='/Login'>Login</router-link>
                <router-link to='/Signup'>Sign up</router-link>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>       
      </div>
    </div><br>
    <router-view/> 
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  
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
