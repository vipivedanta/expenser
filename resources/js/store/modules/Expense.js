import axios from 'axios';
import env from '../../env';

const state = {
    expenses : {},
    expenseCreated : false
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
    updateExpenseCreated : (state,status) => state.expenseCreated = status
}

const actions = {
    getExpenses({commit}){
        axios.post( env.API_URL + 'expenses')
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
    }
}; 

export default{
    state,
    getters,
    mutations,
    actions
}