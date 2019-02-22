import axios from 'axios';
import env from '../../env';

const state = {
    expenses : {},
    expenseCreated : false,
    filter : false
};

const getters = {
    expenses : state => state.expenses,
    isExpenseCreated : state => state.expenseCreated
}

const mutations = {
    setExpenses : (state,expenses) => state.expenses = expenses,
    addExpense : (state,expense) => state.expenses.push({
        expense : expense.expense,
        amount : parseFloat(expense.amount).toFixed(2),
        expense_date : expense.date,
        comments : expense.comment
    }),
    updateExpenseCreated : (state,status) => state.expenseCreated = status,
    setFilter : (state,filter) => state.filter = filter
};

const actions = {
    
    /*get the expenses from api*/
    getExpenses({commit,state}){
        axios.post( env.API_URL + 'expenses', {
            filter : state.filter
        })
        .then( response => {
            commit('setExpenses', response.data.expenses );            
        });
    },
    addExpense({commit,rootState},expense){
        axios.post( env.API_URL + 'save-expense',expense)
        .then( response => {
            commit('addExpense',expense); 
            commit('updateExpenseCreated',true);
            rootState.Message.messages.success = response.data.msg;
        })       

    },

    /* filter the expense list*/
    filterExpense({commit, dispatch},filter){
        commit('setFilter',filter);
        dispatch('getExpenses');
    }
}; 

export default{
    state,
    getters,
    mutations,
    actions
}