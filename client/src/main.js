import Vue from 'vue'
import App from './App.vue'

import router from './router.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify';


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.config.productionTip = false
Vue.use(Vuetify)
new Vue({
  render: h => h(App),
  vuetify: new Vuetify({
    icons: {
      iconfont: 'mdi',
    },
  }),
  router
}).$mount('#app')