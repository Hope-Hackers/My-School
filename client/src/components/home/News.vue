<template>
  <div class="py-5">
    <div>
      <b-jumbotron header="News" lead="" id="News">
        <b-row>
          <b-col>
            <a href="NewsItem">
              <b-card
                overlay
                img-src="./images/SL3.jpg"
                img-alt="Card Image"
                text-variant="white"
                title="News:"
              >
                <b-card-text>
                  <h3>All the apdate and news related to ou school</h3>
                </b-card-text>
              </b-card>
            </a>
          </b-col>
          <b-col>
            <a href="update">
              <b-card
                overlay
                img-src="./images/person_1.jpg"
                img-alt="Card Image"
                text-variant="white"
                title="update:"
              >
                <b-card-text>
                  <h3>All the apdate and news related to ou school</h3>
                </b-card-text>
              </b-card>
            </a>
          </b-col>
        </b-row>
      </b-jumbotron>
      <div></div>
    </div>
  </div>
</template>
<script>
//sets a cookie for the login for storage
export default {
  name: "News",
};
</script>
<style></style>





