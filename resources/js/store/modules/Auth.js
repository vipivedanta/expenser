import axios from 'axios';
import env from '../../env';

const getters = {};
const states = {
    accessToken : null
};
const mutations = {
    setAccessToken : (state,accessToken) => state.accessToken = accessToken
};

const actions = {
    hitLoginAPI : function( {commit},email,password){
        axios.get(env.API_URL + 'login',{
            email : email,
            password : password
        }).then( response => {
            commit('setAccessToken',response.data.access_token);
            localStorage.setItem('access-token',response.data.access_token)
        })
    }
};

export default{
    states,
    getters,
    mutations,
    actions
}