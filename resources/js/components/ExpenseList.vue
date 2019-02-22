<template>
    <div class="row">
        <h5>Your expenses so far <a href="#" class="btn btn-info btn-sm pull-right" data-toggle="modal" data-target="#CreateExpense">Add new?</a></h5>
        <ExpenseSearch></ExpenseSearch>
        <div class="row">
        <table class="table table-striped table-condensed table-bordered">
            <thead class="bg-info">
            <th>Date</th>
            <th>Expense</th>
            <th>Comments</th>
            <th>Amount</th>
            </thead>
            <tbody v-if="expenses.length > 0">
             <tr v-for="(expense,index) in expenses" :key="index">
                <td>{{ expense.expense_date }}</td>
                <td>{{ expense.expense }}</td>
                <td>{{ expense.comments }}</td>
                <td class="text-right">{{ expense.amount }}</td>                
             </tr>  
             <tr>
                 <td colspan="3" class="text-right"><strong>Total</strong></td>
                 <td  class="text-right">{{ totalAmount }}</td>
             </tr> 
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ExpenseSearch from '../components/ExpenseSearch';

export default {
    name : 'ExpenseList',
    components : {
        ExpenseSearch
    },
    methods : {
        ...mapActions(['getExpenses'])
    },
    created(){
        this.getExpenses();
    },
    computed : {
        ...mapGetters(['expenses']),
        totalAmount : function(){
           let total = 0;
           this.expenses.forEach(item => {
               total += parseFloat(item.amount);
           });
           return total.toFixed(2);
        }
    }
}
</script>

