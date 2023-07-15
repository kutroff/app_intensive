import Vue from "vue";
import VueRouter from "vue-router";
import LoginPage from "@/pages/LoginPage.vue";
import TodoPage from "@/pages/TodoPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: TodoPage,
        meta: { requiresAuth: true }
    },
    {
        path: "/login",
        component: LoginPage,
        meta: { requiresAuth: false }
    }
];
const router = new VueRouter( {
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) =>{
    const token = localStorage.getItem('token')

    if(to.meta.requiresAuth && !token) {
        next('/login')
    }   else  {
        next()
    }
})
export default router;