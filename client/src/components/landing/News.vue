<template>
  <div class="news-updates" id="News">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-heading">
            <h2 class="text-black">News &amp; Updates</h2>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="post-entry-big">
                <a href="Updates" class="img-link"
                  ><img
                    src="images/SL3.jpg"
                    alt="Image"
                    class="img-fluid"
                    id="imgnews"
                /></a>
                <div class="post-content">
                  <div class="post-meta">
                    <a href="#"> january,26, 2021</a>
                    <span class="mx-1">/</span>
                    <a href="#">Admission</a>, <a href="#">Updates</a>
                  </div>
                  <h3 class="post-heading">
                    <a href="#">all Updates</a>
                  </h3>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="post-entry-big">
                <a href="News" class="img-link"
                  ><img
                    src="images/SL6.jpg"
                    alt="Image"
                    class="img-fluid"
                    id="imgnews"
                /></a>
                <div class="post-content">
                  <div class="post-meta">
                    <a href="#">january 25, 2021</a>
                    <span class="mx-1">/</span>
                    <a href="#">Admission</a>, <a href="#">News</a>
                  </div>
                  <h3 class="post-heading">
                    <a href="#">All News</a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></template
>
<script>
export default {
  name: "News",
  data() {
    return {
      info: null,
    };
  },
};
</script>
<style>
.news-updates {
  padding: 5rem 0;
}
.news-updates .section-heading {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;
}
.news-updates .section-heading h2 {
  margin-bottom: 0;
  line-height: 0;
}
.news-updates .section-heading a {
  font-size: 16px;
}
.news-updates .post-entry-big .img-link {
  position: relative;
  display: inline-block;
  margin-bottom: 30px;
  overflow: hidden;
}
.news-updates .post-entry-big .img-link img {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.news-updates .post-entry-big .img-link:before {
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  position: absolute;
  content: "";
  background: #000;
  opacity: 0;
  z-index: 2;
  visibility: hidden;
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
.news-updates .post-entry-big .img-link img {
  z-index: 1;
}
.news-updates .post-entry-big .img-link:hover:before {
  opacity: 0.6;
  visibility: visible;
}
.news-updates .post-entry-big .img-link:hover img {
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
}
.news-updates .post-entry-big .post-content .post-meta a {
  display: inline-block;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: bold;
  color: #939393;
}
.news-updates .post-entry-big .post-content .post-heading {
  line-height: 0.9;
}
.news-updates .post-entry-big .post-content .post-heading a {
  font-size: 18px;
  font-weight: bold;
  color: #303030;
}
.news-updates .post-entry-big .post-content .post-heading a:hover {
  color: #51be78;
}
.news-updates .post-entry-big.horizontal .img-link {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 90px;
  flex: 0 0 90px;
}
#imgnews {
  background-size: contain;
}
</style>
