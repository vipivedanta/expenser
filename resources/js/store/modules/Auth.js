import axios from 'axios';

const getters = {};
const states = {
    accessToken : null
};
const mutators = {};

const actions = {
    hitLoginAPI : function(email,password){
        axios.get(API_URL + 'login',{
            email : email,
            password : password
        }).then( response => (state.accessToken = response.access_token));
    }
};

export default{
    states,
    getters,
    mutators,
    actions
}