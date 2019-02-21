<template>
  
            <div class="modal in" tabindex="-1" role="dialog" id="CreateExpense">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Create Expense</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        
                        <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Expense</label>
                            <input v-model="expense.expense" type="text" class="form-control" placeholder="Movies/Vegitables/Household/Tax ?">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Date</label>
                            <input v-model="expense.date" type="date" class="form-control" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Amount</label>
                            <input v-model="expense.amount" type="text" class="form-control" placeholder="in Rupees">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Comments</label>
                            <textarea v-model="expense.comment"  class="form-control"></textarea>
                        </div>
                       
                        </form>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="saveExpense">Save this</button>
                        <button type="button" class="btn btn-secondary close-modal" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>

    
</template>

<script>

import { mapActions, mapGetters } from 'vuex';

export default {
    name : 'CreateExpense',
    data(){
        return {
            expense : {
                expense : null,
                amount : 0,
                comment : null
            }
        }
    },
    methods : {
        ...mapActions(['addExpense']),
        saveExpense(){
            this.addExpense( this.expense );
        }
    },
    computed : {
        ...mapGetters(['isExpenseCreated'])
    },
    watch : {
       isExpenseCreated : function(status){
            if(status){
                $('.modal').modal('hide');
                $(document.body).removeClass('modal-open');
                $('.modal-backdrop').remove();
            }
       }
    }
}
</script>
