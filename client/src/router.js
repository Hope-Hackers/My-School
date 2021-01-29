import Vue from "vue";
import axios from "axios";
import Router from "vue-router";

Vue.use(Router);

const isAdmin = async function(next) {
  let user = await axios.post("http://localhost:7000/api/users/filterByToken", {
    token: localStorage.token,
  });
  console.log("here", user);
  if (user.data && user.data.role == "Admin") {
    next();
  } else {
    localStorage.clear();
    next({ path: `/login` });
  }
};

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
          beforeEnter: (to, from, next) => {
            isAdmin(next);
          },
        },
        {
          path: "/ContactAdmin",
          component: () => import("./components/admin/ContactAdmin.vue"),
          index: 8,
        },
        {
          path: "Updates",
          component: () => import("./components/UpdateTemplate.vue"),
          index: 9,
        },
        {
          path: "News",
          component: () => import("./components/NewsTemplate.vue"),
          index: 10,
        },
        {
          path: "/parent",
          component: () => import("./components/Teacher/StudentGrades.vue"),
          index: 11,
        },
        {
          path: "event",
          component: () => import("./components/EventTemplate.vue"),
          index: 12,
        },
        {
          path: "service",
          component: () => import("./components/ServiceTemplate.vue"),
          index: 13,
        },
        {
          path: "activity",
          component: () => import("./components/ActivityTemplate.vue"),
          index: 14,
        },
        {
          path: "events",
          component: () => import("./components/Events.vue"),
          index: 15,
        },
      ],
    },
  ],
});
