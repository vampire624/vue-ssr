import VueRouter from "vue-router"
import Vue from "vue"
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            alias: '/home',
            path: '/',
            component: Home,
            // component: () => import('../components/Home.vue'),
        },
        {
            path: '/login',
            component: Login,
            // component: () => import('../components/Login.vue'),
        },
        {
            path: '/about',
            component: About,
            // component: () => import('../components/About.vue'),
        }
    ]
})

export default router