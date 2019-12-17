require('./bootstrap');

window.Vue = require('vue');

import router from './routes';
import store from './stores'

store.dispatch('auth/setDefaultAuthorizationHeader');

window.onload = function () {
    const app = new Vue({
        router,
        store,
        el: '#app',
    });
};
