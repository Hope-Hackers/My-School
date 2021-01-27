import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    mode:"history",
    routes:[
        {
            path:"/",
            component: () => import("./components/Home.vue"),
            index: 0,
        },
        {
            path: "/login",
            component: () => import("./components/Login.vue"),
            index:1
        },
        {
            path: "/signup",
            component: () => import("./components/Signup.vue"),
            index:2
        },
        {
            path: "/teacher/schedule",
            component: () => import("./components/Teacher/Teacher.vue"),
            index: 3,
        },
        {
            path: "/admin",
            component: () => import("./components/admin/Admin.vue"),
            index: 4,
        },
        {
            path: "/parent",
            component: () => import("./components/Teacher/StudentGrades.vue"),
            index: 5,
        }
    ]
});