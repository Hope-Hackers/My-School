<template>
  <!-- footer -->
  <b-container class="bv-example-row">
    <b-row>
      <img
        src="images/logo.png"
        alt="Image"
        class="img-fluid text-center"
        style="padding-bottom: 20px;"
      />
      <b-col>
        
      </b-col>
      <b-col>
        <div>© 2020 Copyright: <a href="#"> HopeHackers </a></div>
      </b-col>
      <b-col>
      
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
//sets a cookie for the login for storage
export default {
  name: "News",
};
</script>

<style>
ul.social-network {
  list-style: none;
  display: inline;
  margin-left: 0px !important;
  padding: 0;
  float: left;
}
ul.social-network li {
  display: inline;
  margin: 0 5px;
}
.social-network a.icoYt:hover {
  background-color: #e52d27;
}
.social-network a.icoFacebook:hover {
  background-color: #3b5998;
}

.social-network a.icoinstagram:hover {
  background-color: #bc2a8d;
}
.social-network a.icolinkedin:hover {
  background-color: #291ad3c4;
}

.social-network a.icoGoogle:hover {
  background-color: #bd3518;
}
.social-circle li a {
  display: inline-block;
  position: relative;
  margin: 0 auto 0 auto;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  text-align: center;
  width: 50px;
  height: 50px;
  font-size: 20px;
  background-color: #2b603e7a;
  margin-top: 36px;
}
.social-circle li i {
  margin: 0;
  line-height: 50px;
  text-align: center;
}

.social-circle li a:hover i,
.triggeredHover {
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -ms--transform: rotate(360deg);
  transform: rotate(360deg);
  -webkit-transition: all 3.2s;
  -moz-transition: all 0.2s;
  -o-transition: all 0.2s;
  -ms-transition: all 0.2s;
  transition: all 0.8s;
}
.social-circle i {
  color: #fff;
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  -o-transition: all 0.8s;
  -ms-transition: all 0.8s;
  transition: all 0.8s;
}
.footer-logo {
  padding: 50px;
}
</style>
