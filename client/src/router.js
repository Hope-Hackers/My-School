import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    mode:"history",
    routes:[
        {
            path:"/",
            component: () => import("./components/Home.vue"),
            index:0
        },
        {
            path: "/login",
            component: () => import("./components/Login.vue"),
            index:1
        },
        {
            path: "/signup",
            component: () => import("./components/Signup.vue"),
            index:1
        }
    ]
});