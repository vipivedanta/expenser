<template>
    <div class="row">
        <div class="col-md-5">
            <input type="date" v-model="filter.date" class="form-control" />
        </div>
        <div class="col-md-3">
            <input type="text" v-model="filter.expense" class="form-control" />
        </div>
        <div class="col-md-3">
            <button @click="filterExpense(filter)" class="btn btn-sm btn-warning" type="button">Search</button>
            <button @click="filterResetNow" class="btn btn-sm btn-danger" type="button">Reset</button>
        </div>
    </div>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    name : 'ExpenseSearch',
    data(){
        return {
            filter : {
                date : null,
                expense : null
            }
        }
    },
    methods : {
        ...mapActions(['filterExpense']),
        filterResetNow() {
            console.log(this.filter)
            this.filter = { date : null,expense : null };
            this.filterExpense();
        }
    }
}
</script>
