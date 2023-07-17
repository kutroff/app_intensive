import Vue from "vue";
import PostPage from "@/pages/PostPage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import VueRouter from "vue-router";
import store from "@/store";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: PostPage,
        meta: { requiresAuth: true }
    },
    {
        path: "/login",
        component: LoginPage,
        meta: { requiresAuth: false }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next) =>{
    const token = store.state.post.token;

    if (to.meta.requiresAuth && !token) {
        next('/login');
    } else {
        next()
    }
})

export default router;