import axios from 'axios';
import env from '../../env';

const state = {
    expenses : {}
};

const getters = {
    expenses : state => state.expenses
}

const mutations = {
    setExpenses : (state,expenses) => state.expenses = expenses
}

const actions = {
    getExpenses({commit}){
        axios.post( env.API_URL + 'expenses')
        .then( response => commit('setExpenses', response.data.expenses ));
    }
}; 

export default{
    state,
    getters,
    mutations,
    actions
}