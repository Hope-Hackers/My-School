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
          path: "",
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
          path: "/Teacher",
          component: () => import("./components/Teacher/Teacher.vue"),
          index: 5,
        },
        {
          path: "/ChatStructure",
          component: () => import("./components/profil/ChatStructure.vue"),
          index: 6,
        },
        {
          path: "/admin",
          component: () => import("./components/admin/Admin.vue"),
          index: 7,
        },
        {
          path: "/ContactAdmin",
          component: () => import("./components/admin/ContactAdmin.vue"),
          index: 8,
        },
        {
          path: "UpdateTemplate",
          component: () => import("./components/UpdateTemplate.vue"),
          index: 9,
        },
        {
          path: "NewsTemplate",
          component: () => import("./components/NewsTemplate.vue"),
          index: 10,
        },
      ],
    },
  ],
});
