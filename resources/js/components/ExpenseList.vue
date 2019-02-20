<template>
    <div class="row">
        <h4>Your expenses so far</h4>
        <table class="table table-striped table-condensed">
            <thead>
            <th>Date</th>
            <th>Expense</th>
            <th>Amount</th>
            </thead>
            <tbody v-if="expenses.length > 0">
             <tr v-for="(expense,index) in expenses" :key="index">
                <td>{{ expense.expense_date }}</td>
                <td>{{ expense.expense }}</td>
                <td class="text-right">{{ expense.amount }}</td>
             </tr>  
             <tr>
                 <td colspan="2" class="text-right"><strong>Total</strong></td>
                 <td  class="text-right">{{ totalAmount.toFixed(2) }}</td>
             </tr> 
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name : 'ExpenseList',
    methods : {
        ...mapActions(['getExpenses'])
    },
    created(){
        this.getExpenses();
    },
    computed : {
        ...mapGetters(['expenses']),
        totalAmount : function(){
            return 1000.00
        }
    }
}
</script>

