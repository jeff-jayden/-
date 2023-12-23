import Vue from "vue";
import VueRouter from "vue-router";
import HomeLayout from "@/views/HomeLayout.vue";
import compare from "@/views/Compare/index.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeLayout,
        redirect: '/compare',
        children: [
            {
                path: 'compare',
                name: 'HomeCompare',
                component: compare
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router