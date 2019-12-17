import Vue from 'vue';
import VueRouter from 'vue-router';
import stores from './stores';
import './components';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/class-packs'
    },
    {
        path: '/class-packs/',
        component: Vue.component('class-packs'),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/class-packs/:alias',
        component: Vue.component('class-pack'),
        props: true,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Vue.component('login')
    },
    {
        path: '*',
        redirect: '/'
    }
];

let router = new VueRouter({
    hashbang: false,
    history: true,
    mode: "history",
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
    routes
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (stores.getters['auth/isLoggedIn']) {
            stores.dispatch('auth/validateAccessToken')
                .then(() => {
                    next();
                });
            return
        }
        next('/login')
    } else {
        next();
    }
});

export default router;
