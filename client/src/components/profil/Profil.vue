<template>
  <div class="Profiles">
    <div class="pro1">
      <v-card class="mx-auto1" max-width="434" tile>
        <v-img
          height="100%"
          src="https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg"
        >
          <v-row align="end" class="fill-height">
            <v-col align-self="start" class="pa-0" cols="12">
              <v-avatar class="profile" color="grey" size="164" tile>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
                ></v-img>
              </v-avatar>
            </v-col>

            <v-col class="py-0">
              <v-list-item color="rgba(0, 0, 0, .4)" dark>
                <v-list-item-content>
                  <v-list-item-title class="title">
                    Melek Houidi
                  </v-list-item-title>

                  <v-list-item-subtitle>English teacher</v-list-item-subtitle>
                  <div class="btn">
                    <v-btn
                      depressed
                      color="primary"
                      @click="redirectMessages(123)"
                    >
                      Message
                    </v-btn>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
          <div class="details">
            <v-btn depressed color="primary" @click="redirectDetails">
              Details
            </v-btn>
          </div>
        </v-img>
      </v-card>
    </div>

    <v-card class="mx-auto2" max-width="434" tile>
      <v-img
        height="100%"
        src="https://ak.picdn.net/shutterstock/videos/27266011/thumb/1.jpg"
      >
        <v-row align="end" class="fill-height">
          <v-col align-self="start" class="pa-0" cols="12">
            <v-avatar class="profile" color="grey" size="164" tile>
              <v-img
                src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              ></v-img>
            </v-avatar>
          </v-col>

          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="title">
                  Khaled Yeferni
                </v-list-item-title>

                <v-list-item-subtitle>physics teacher </v-list-item-subtitle>
                <div class="btn">
                  <v-btn
                    depressed
                    color="primary"
                    @click="redirectMessages(133)"
                  >
                    Message
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
        <div class="details">
          <v-btn depressed color="primary" @click="redirectDetails">
            Details
          </v-btn>
        </div>
      </v-img>
    </v-card>
    <v-card class="mx-auto3" max-width="434" tile>
      <v-img
        height="100%"
        src="https://www.publicdomainpictures.net/pictures/130000/velka/abstract-wallpaper-1442844611tgq.jpg"
      >
        <v-row align="end" class="fill-height">
          <v-col align-self="start" class="pa-0" cols="12">
            <v-avatar class="profile" color="grey" size="164" tile>
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
            </v-avatar>
          </v-col>

          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="title">
                  Zied sradki
                </v-list-item-title>

                <v-list-item-subtitle>Arabic teacher</v-list-item-subtitle>
                <div class="btn">
                  <v-btn
                    depressed
                    color="primary"
                    @click="redirectMessages(143)"
                  >
                    Message
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
        <div class="details">
          <v-btn depressed color="primary" @click="redirectDetails">
            Details
          </v-btn>
        </div>
      </v-img>
    </v-card>
    <v-card class="mx-auto4" max-width="434" tile>
      <v-img
        height="100%"
        src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v748-toon-131_1_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=c03f4e1df88801665806cbdbaef503d4"
      >
        <v-row align="end" class="fill-height">
          <v-col align-self="start" class="pa-0" cols="12">
            <v-avatar class="profile" color="grey" size="164" tile>
              <v-img
                src="https://i.guim.co.uk/img/media/08fc341156d84851b8aeb920982b31d1dff58886/971_312_4432_2659/master/4432.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=c87ad34976002770d18e7decae1b010f"
              ></v-img>
            </v-avatar>
          </v-col>

          <v-col class="py-0">
            <v-list-item color="rgba(0, 0, 0, .4)" dark>
              <v-list-item-content>
                <v-list-item-title class="title">
                  Wael Jouini
                </v-list-item-title>

                <v-list-item-subtitle>Sports teacher</v-list-item-subtitle>
                <div class="btn">
                  <v-btn
                    depressed
                    color="primary"
                    @click="redirectMessages(153)"
                  >
                    Message
                  </v-btn>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
        <div class="details">
          <v-btn depressed color="primary" @click="redirectDetails">
            Details
          </v-btn>
        </div>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Profil",
  methods: {
    redirectMessages(x) {
      this.$store.commit("setroom", x);
      this.$router.push({ path: "/ChatContainer", addToHistory: false });
    },
    redirectDetails() {
      this.$router.push({ path: "/Teacher", addToHistory: false });
    },
  },
  data() {
    return {};
  },
};
</script>
<style>
.Profiles {
  min-width: 100%;
  min-height: 100vh;
  background: url("./image/1.jpg") center center;
  background-size: cover;
  padding-top: 30px;
}
.mx-auto1.v-card.v-sheet.theme--light.rounded-0 {
  margin-left: 490px;
  height: 237px;
  height: 250px;
}
.mx-auto2.v-card.v-sheet.theme--light.rounded-0 {
  margin-left: 491px;
  margin-top: 42px;
  height: 250px;
}
.mx-auto3.v-card.v-sheet.theme--light.rounded-0 {
  margin-left: 1033px;
  margin-top: -538px;
  height: 244px;
}
.mx-auto4.v-card.v-sheet.theme--light.rounded-0 {
  margin-left: 1035px;
  margin-top: 48px;
}
.pa-0.col.col-12.align-self-start {
  margin-left: -195px;
  margin-top: 15px;
}
.v-list-item__content {
  margin-left: -25px;
  margin-top: 50px;
}
button.v-btn.v-btn--has-bg.theme--light.v-size--default.primary {
  background: #a51515a1;
  border-radius: 30px;
}
.details {
  margin-left: -163px;
  margin-top: -36px;
}
.btn {
  margin-left: -32px;
  margin-top: 40px;
}
</style>
