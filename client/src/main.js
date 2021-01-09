import Vue from "vue";
import App from "./App.vue";
import "./icons";

import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import router from "./router.js";


import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";

Vue.use(Vuetify);
Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  vuetify: new Vuetify(),
}).$mount("#app");
