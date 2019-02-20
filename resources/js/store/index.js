import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './modules/Auth';
import User from './modules/User';
import Message from './modules/Message';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules : {
        Auth,
        User,
        Message
    }
});

export default store;