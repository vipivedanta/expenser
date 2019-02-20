import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './modules/Auth';
import User from './modules/User';
import Message from './modules/Message';
import Expense from './modules/Expense';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules : {
        Auth,
        User,
        Message,
        Expense
    }
});

export default store;