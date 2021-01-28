<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <img
            src="images/logo.png"
            alt="Image"
            class="img-fluid"
            id="footer-logo"
          /><br />
          <h5>Contact Us:</h5>
          <div class="col-md-12">
            <br />
            <ul class="social-network social-circle">
              <li>
                <a href="#" class="icoFacebook" title="Facebook"
                  ><i class="fa fa-facebook"></i
                ></a>
              </li>
              <li>
                <a href="#" class="icoGoogle" title="Google +"
                  ><i class="fa fa-google-plus"></i
                ></a>
              </li>
              <li>
                <a href="#" class="icoinstagram" title="instagram"
                  ><i class="fa fa-instagram"></i
                ></a>
              </li>
              <li>
                <a href="#" class="icolinkedin" title="linkedin"
                  ><i class="fa fa-linkedin"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-6">
          <div class="copyright">
            <p>
              Copyright &copy; All rights reserved | This website is made
              <i class="icon-heart" aria-hidden="true"></i> by
              <a href="#" target="_blank" id="hope">Hope-Hackers </a>
            </p>
          </div>
          <div></div>
        </div>
        <div class="col-2">
          <div>
            <a id="footer-menu" href="/" class="nav-link text-left">Home</a>
            <a id="footer-menu" href="#School" class="nav-link text-left"
              >About Our School</a
            >
            <a id="footer-menu" href="#Teachers" class="nav-link text-left"
              >Our Team</a
            >
            <a id="footer-menu" href="#News" class="nav-link text-left"
              >News & Updates</a
            >
            <a id="footer-menu" href="ContactUs" class="nav-link text-left"
              >Contact Us</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "footer",
  data() {
    return {
      info: null,
    };
  },
};
</script>
<style>
.site-footer {
}
@media (min-width: 768px) {
  .site-footer {
    padding: 8em 0;
  }
}
.site-footer p {
  color: #737373;
}
.site-footer a {
  color: #999999;
}
.site-footer a:hover {
  color: black;
}
.site-footer ul li {
  margin-bottom: 10px;
}
.site-footer .footer-heading {
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 900;
}
.footer {
  background: #5a764fcf;
  font-size: 14px;
  color: #fff;
}
.footer .footer-heading {
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
}
.footer .footer-heading span {
  border-bottom: 3px solid #fff;
}
.footer a:hover {
  color: #fff;
  text-decoration: underline;
}
.footer .copyright {
  color: #fff;
  padding-top: 13rem;
  text-align: left;
}
#footer-menu {
  color: #4f6646 !important;
  text-align: left !important;
  text-decoration: none !important;
}
#footer-logo {
  max-width: 70%;
}
.col-4 {
  line-height: 0.5;
}
.rs {
  color: #f89d13 !important;
  text-decoration: none !important;
  font-size: 16px;
}
#hope {
  color: black;
}
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
  background-color: #e99c00;
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
</style>
