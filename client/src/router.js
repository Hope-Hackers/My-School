import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
    mode:"history",
    routes:[
        // {
        //     path:"/",
        //     component: () => import("./components/Home.vue"),
        //     index:0
        // },
        {
            path: "/login",
            component: () => import("./components/login.vue"),
            index:1
        }
    ]
});