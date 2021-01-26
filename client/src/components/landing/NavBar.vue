<template>
  <header
    class="site-navbar py-4 js-sticky-header site-navbar-target"
    role="banner"
  >
    <div class="container" id="nav1">
      <div class="d-flex align-items-center">
        <div class="site-logo">
          <a href="index.html" class="d-block">
            <img src="images/logo.png" alt="Image" class="img-fluid" />
          </a>
        </div>
        <div class="mr-auto">
          <nav class="site-navigation position-relative text-right">
            <ul
              class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block"
            >
              <li class="active">
                <a href="/" class="nav-link text-left">Home</a>
              </li>
              <li class="">
                <a href="#School" class="nav-link text-left"
                  >About Our School</a
                >
              </li>
              <li class="">
                <a href="#Teachers" class="nav-link text-left">Our Teachers</a>
              </li>
              <li class="">
                <a href="#News" class="nav-link text-left">News & Updates</a>
              </li>
              <li class="">
                <a href="ContactUs" class="nav-link text-left">Contact Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "nav-bar",
  data() {
    return {
      info: null,
    };
  },
};
</script>

<style>
.site-navbar {
  margin-bottom: 0px;
  z-index: 1999;
  position: absolute;
  width: 116%;
}
.site-navbar .container-fluid {
  padding-left: 7rem;
  padding-right: 7rem;
}
.site-navbar .site-navigation.border-bottom {
  border-bottom: 1px solid #f3f3f4 !important;
}
.site-navbar .site-navigation .site-menu {
  margin-bottom: 0;
}
.site-navbar .site-navigation .site-menu .active > a {
  color: #51be78;
  display: inline-block;
  padding: 5px 20px;
}
.site-navbar .site-navigation .site-menu a {
  text-decoration: none !important;
  display: inline-block;
}
.site-navbar .site-navigation .site-menu > li {
  display: inline-block;
}
.site-navbar .site-navigation .site-menu > li .desc {
  font-size: 12px;
  color: #969696;
}
.site-navbar .site-navigation .site-menu > li > a {
  padding: 20px 20px;
  color: #000;
  display: inline-block;
  text-decoration: none !important;
}
.site-navbar .site-navigation .site-menu > li > a:hover {
  color: #51be78;
}
.site-navbar .site-navigation .site-menu .has-children {
  position: relative;
}
.site-navbar .site-navigation .site-menu .has-children > a {
  position: relative;
  padding-right: 20px;
}
.site-navbar .site-navigation .site-menu .has-children > a:before {
  position: absolute;
  content: "\e313";
  font-size: 16px;
  top: 50%;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-family: "icomoon";
}
.site-navbar .site-navigation .site-menu .has-children .dropdown {
  visibility: hidden;
  opacity: 0;
  top: 100%;
  position: absolute;
  text-align: left;
  border-top: 2px solid #51be78;
  -webkit-box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 10px -2px rgba(0, 0, 0, 0.1);
  border-left: 1px solid #edf0f5;
  border-right: 1px solid #edf0f5;
  border-bottom: 1px solid #edf0f5;
  padding: 0px 0;
  margin-top: 20px;
  margin-left: 0px;
  background: #fff;
  -webkit-transition: 0.2s 0s;
  -o-transition: 0.2s 0s;
  transition: 0.2s 0s;
}
.site-navbar .site-navigation .site-menu .has-children .dropdown.arrow-top {
  position: absolute;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown.arrow-top:before {
  bottom: 100%;
  left: 20%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown.arrow-top:before {
  border-color: rgba(136, 183, 213, 0);
  border-bottom-color: #fff;
  border-width: 10px;
  margin-left: -10px;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li
  > a:hover {
  background: #f4f5f9;
  color: #25262a;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children
  > a:before {
  content: "\e315";
  right: 20px;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children
  > .dropdown,
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children
  > ul {
  left: 100%;
  top: 0;
}
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children:hover
  > a,
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children:active
  > a,
.site-navbar
  .site-navigation
  .site-menu
  .has-children
  .dropdown
  > li.has-children:focus
  > a {
  background: #f4f5f9;
  color: #25262a;
}
.site-navbar .site-navigation .site-menu .has-children:hover > a,
.site-navbar .site-navigation .site-menu .has-children:focus > a,
.site-navbar .site-navigation .site-menu .has-children:active > a {
  color: #51be78;
}
.site-navbar .site-navigation .site-menu .has-children:hover,
.site-navbar .site-navigation .site-menu .has-children:focus,
.site-navbar .site-navigation .site-menu .has-children:active {
  cursor: pointer;
}
.site-navbar .site-navigation .site-menu .has-children:hover > .dropdown,
.site-navbar .site-navigation .site-menu .has-children:focus > .dropdown,
.site-navbar .site-navigation .site-menu .has-children:active > .dropdown {
  -webkit-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
  margin-top: 0px;
  visibility: visible;
  opacity: 1;
}
.site-navbar .site-navigation .site-menu.site-menu-dark > li > a {
  color: #000;
}
.sticky-wrapper .site-navbar {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
  background: #fff;
}
.sticky-wrapper .site-navbar .site-logo a {
  color: #000;
}
.sticky-wrapper .site-navbar .site-menu > li {
  display: inline-block;
}
.sticky-wrapper .site-navbar .site-menu > li > a.active {
  color: #000;
  position: relative;
}
.sticky-wrapper .site-navbar .site-menu > li > a.active:after {
  height: 2px;
  background: #fff;
  content: "";
  position: absolute;
  bottom: 0;
  left: 20px;
  right: 20px;
}
.sticky-wrapper.is-sticky .site-navbar {
  background: #fff;
  -webkit-box-shadow: 4px 0 20px -5px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 0 20px -5px rgba(0, 0, 0, 0.2);
}
.sticky-wrapper.is-sticky .site-navbar .site-logo a {
  color: #000;
}
.sticky-wrapper.is-sticky .site-navbar .site-menu > li {
  display: inline-block;
}
.sticky-wrapper.is-sticky .site-navbar .site-menu > li > a {
  padding: 5px 20px;
  color: #000;
  display: inline-block;
  text-decoration: none !important;
}
.sticky-wrapper.is-sticky .site-navbar .site-menu > li > a:hover {
  color: #51be78;
}
.sticky-wrapper.is-sticky .site-navbar .site-menu > li > a.active:after {
  background: #51be78;
}
.sticky-wrapper.is-sticky .site-navbar .site-menu > li.active > a {
  color: #51be78;
}

/* Navbar */
.site-logo {
  position: relative;
  font-weight: 900;
  font-size: 1.3rem;
  width: 200px;
}
.site-logo span {
  font-size: 2rem;
}
.site-logo a {
  color: #000;
}

.site-mobile-menu {
  width: 300px;
  position: fixed;
  right: 0;
  z-index: 2000;
  padding-top: 20px;
  background: #fff;
  height: calc(100vh);
  -webkit-transform: translateX(110%);
  -ms-transform: translateX(110%);
  transform: translateX(110%);
  -webkit-box-shadow: -10px 0 20px -10px rgba(0, 0, 0, 0.1);
  box-shadow: -10px 0 20px -10px rgba(0, 0, 0, 0.1);
  -webkit-transition: 0.3s all ease-in-out;
  -o-transition: 0.3s all ease-in-out;
  transition: 0.3s all ease-in-out;
}
.offcanvas-menu .site-mobile-menu {
  -webkit-transform: translateX(0%);
  -ms-transform: translateX(0%);
  transform: translateX(0%);
}
.site-mobile-menu .site-mobile-menu-header {
  width: 100%;
  float: left;
  padding-left: 20px;
  padding-right: 20px;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-close {
  float: right;
  margin-top: 8px;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-close span {
  font-size: 30px;
  display: inline-block;
  padding-left: 10px;
  padding-right: 0px;
  line-height: 1;
  cursor: pointer;
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-close span:hover {
  color: #25262a;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo {
  float: left;
  margin-top: 10px;
  margin-left: 0px;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo a {
  display: inline-block;
  text-transform: uppercase;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo a img {
  max-width: 70px;
}
.site-mobile-menu .site-mobile-menu-header .site-mobile-menu-logo a:hover {
  text-decoration: none;
}
.site-mobile-menu .site-mobile-menu-body {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;
  padding: 0 20px 20px 20px;
  height: calc(100vh - 52px);
  padding-bottom: 150px;
}
.site-mobile-menu .site-nav-wrap {
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
}
.site-mobile-menu .site-nav-wrap a {
  padding: 10px 20px;
  display: block;
  position: relative;
  color: #212529;
}
.site-mobile-menu .site-nav-wrap a:hover {
  color: #51be78;
}
.site-mobile-menu .site-nav-wrap li {
  position: relative;
  display: block;
}
.site-mobile-menu .site-nav-wrap li .active > a {
  color: #51be78;
}
.site-mobile-menu .site-nav-wrap .arrow-collapse {
  position: absolute;
  right: 0px;
  top: 10px;
  z-index: 20;
  width: 36px;
  height: 36px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
}
.site-mobile-menu .site-nav-wrap .arrow-collapse:hover {
  background: #f8f9fa;
}
.site-mobile-menu .site-nav-wrap .arrow-collapse:before {
  font-size: 12px;
  z-index: 20;
  font-family: "icomoon";
  content: "\f078";
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) rotate(-180deg);
  -ms-transform: translate(-50%, -50%) rotate(-180deg);
  transform: translate(-50%, -50%) rotate(-180deg);
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.site-mobile-menu .site-nav-wrap .arrow-collapse.collapsed:before {
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.site-mobile-menu .site-nav-wrap > li {
  display: block;
  position: relative;
  float: left;
  width: 100%;
}
.site-mobile-menu .site-nav-wrap > li > a {
  padding-left: 20px;
  font-size: 20px;
}
.site-mobile-menu .site-nav-wrap > li > ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.site-mobile-menu .site-nav-wrap > li > ul > li {
  display: block;
}
.site-mobile-menu .site-nav-wrap > li > ul > li > a {
  padding-left: 40px;
  font-size: 16px;
}
.site-mobile-menu .site-nav-wrap > li > ul > li > ul {
  padding: 0;
  margin: 0;
}
.site-mobile-menu .site-nav-wrap > li > ul > li > ul > li {
  display: block;
}
.site-mobile-menu .site-nav-wrap > li > ul > li > ul > li > a {
  font-size: 16px;
  padding-left: 60px;
}
.site-mobile-menu .site-nav-wrap[data-class="social"] {
  float: left;
  width: 100%;
  margin-top: 30px;
  padding-bottom: 5em;
}
.site-mobile-menu .site-nav-wrap[data-class="social"] > li {
  width: auto;
}
.site-mobile-menu .site-nav-wrap[data-class="social"] > li:first-child a {
  padding-left: 15px !important;
}
</style>
