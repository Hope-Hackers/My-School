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
          path: "Landing",
          component: () => import("./components/Landing.vue"),
          index: 0,
        },
        {
          path: "Login",
          component: () => import("./components/Login.vue"),
          index: 0,
        },
        {
          path: "Register",
          component: () => import("./components/Login.vue"),
          index: 1,
        },
        {
          path: "Profil",
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
        {
          path: "/Event",
          component: () => import("./components/Event.vue"),
          index: 4,
        },
        {
          path: "/Service",
          component: () => import("./components/Service.vue"),
          index: 5,
        },
        {
          path: "/Activity",
          component: () => import("./components/activity.vue"),
          index: 6,
        },
        {
          path: "/eventUser",
          component: () => import("./components/eventUser.vue"),
          index: 7,
        },
        {
          path: "Landing",
          component: () => import("./components/Landing.vue"),
          index: 8,
        },
        {
          path: "Updates",
          component: () => import("./components/UpdateTemplate.vue"),
          index: 8,
        },
        {
          path: "News",
          component: () => import("./components/NewsTemplate.vue"),
          index: 8,
        },
      ],
    },
  ],
});
