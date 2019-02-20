import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './modules/Auth';
import User from './modules/User';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules : {
        Auth,
        User
    }
});

export default store;