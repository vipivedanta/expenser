const state = {
    messages : {
        success : false,
        error : false,
        info : false
    }, 
    defaultMessages : {
        success : false,
        error : false,
        info : false
    }
};

const getters = {
    messages : state => state.messages
};

const mutations = {};
const actions = {};

export default{
    state,
    getters,
    mutations,
    actions
}