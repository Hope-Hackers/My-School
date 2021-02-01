<template>
  <div id="app">
    <div>
      <NavBar/>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/home/NavBar"
export default {
  name: "App",
  components: {
    NavBar,
  },
  data: () => ({
    ShowMenu: false,
    NavigationItems: true,
  }),
  methods: {
      toggleMenu: function() {
          this.ShowMenu = !this.ShowMenu
      },
      toggleNavItem: function() {
          false
      }
  }
};
</script>

<style>
/* html {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

html::-webkit-scrollbar {
  width: 0;
  height: 0;
}
#app {
  width: 100%;
} */
.vs-sidebar__item__icon {
    color: #009FB7 !important;
}

html, body {
  font-family: 'Roboto', sans-serif  !important;
}

#app {
  --font-family-sans-serif :'Roboto'!important;
  font-family: 'Roboto', sans-serif !important;
}

nav.navbar.nav.sticky-top.navbar-light.navbar-expand-lg {
    margin-left: 50px;
}
</style>
