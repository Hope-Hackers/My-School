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
          <br />
          <p>E-mail: myschool@gmail.com</p>
          <br />
          <p>Phone number: +216 71 20 89 23</p>
          <br />
          <a class="rs" href="#">LinkedIn</a>&nbsp;&nbsp;
          <a class="rs" href="#">Instagram</a>&nbsp;&nbsp;
          <a class="rs" href="#">Facebook</a>
        </div>
        <div class="col-6">
          <div class="copyright">
            <p>
              Copyright &copy; All rights reserved | This website is made
              <i class="icon-heart" aria-hidden="true"></i> by
              <a href="#" target="_blank" id="hope">Hope-Hackers </a>
            </p>
          </div>
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
</style>
