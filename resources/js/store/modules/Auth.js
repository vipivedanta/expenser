import axios from 'axios';
import env from '../../env';
import router from '../../routes/routes';

const state = {
    accessToken : null,
    emailError : false,
    passwordError : false,
    invalidLoginError : false,
    processing : false
};

const getters = {
    emailError : state => state.emailError,
    passwordError : state => state.passwordError,
    invalidLoginError : state => state.invalidLoginError,
    processing : state => state.processing
};

const mutations = {
    setAccessToken : (state,accessToken) => state.accessToken = accessToken,
    setEmailError : (state,error) => state.emailError = error,
    setPasswordError : (state,error) => state.passwordError = error,
    setInvalidLoginError : (state,error) => state.invalidLoginError = error,
    setProcessingState : (state,processing) => state.processing = processing
};

const actions = {
    hitLoginAPI : function( {rootState,commit},user){
        commit('setProcessingState',true);
        axios.post(env.API_URL + 'login',{
            email : user.email,
            password : user.password
        })
        .then( response => {
            commit('setProcessingState',false);
            if(response.data.status == true){
                rootState.User.user = response.data.user;
                commit('setPasswordError',null);
                commit('setEmailError',null);
                router.push('/dashboard');                
            }else{
                commit('setInvalidLoginError',response.data.error);                
            }
        })
        .catch( error => {
            commit('setProcessingState',false);
            if(error.response.status == 422){
                if(error.response.data.errors.password !== undefined){
                    commit('setPasswordError',error.response.data.errors.password[0])
                }
                if(error.response.data.errors.email !== undefined){
                    commit('setEmailError',error.response.data.errors.email[0]);
                }
            }
        })
        
    }
};

export default{
    state,
    getters,
    mutations,
    actions
}