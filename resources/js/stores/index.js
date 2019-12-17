import Vue from 'vue'
import Vuex from 'vuex'
import modules from "./Modules";
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
    key: 'vuex_store',
    storage: window.localStorage
});

Vue.use(Vuex);
export default new Vuex.Store({
    modules,
    plugins: [vuexPersist.plugin]
});
