import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./Home.vue"),
      index: 0,
      children: [
        {
          path: "/Login",
          component: () => import("./components/Login.vue"),
          index: 0,
        },
        {
          path: "/Register",
          component: () => import("./components/Login.vue"),
          index: 1,
        },
        {
          path: "/Profil",
          component: () => import("./components/profil/Profil.vue"),
          index: 2,
        },
        {
          path: "/ChatContainer",
          component: () => import("./components/profil/ChatContainer.vue"),
          index: 3,
        },
        {
          path: "/ContactUs",
          component: () => import("./components/ContactUs.vue"),
          index: 4,
        },
      ],
    },
  ],
});
