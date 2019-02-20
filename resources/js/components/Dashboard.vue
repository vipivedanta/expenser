<template>
    <div>
        <Header></Header>
        <Message></Message>
        
        <div class="row">
            <div class="col-md-7">
                <ExpenseList></ExpenseList>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from './templates/Header';
import Message from './templates/Message';
import ExpenseList from './ExpenseList';

export default {
    name : 'Dashboard',
    computed : {
        ...mapGetters(['getUser'])
    },
    components : {
        Header,
        Message,
        ExpenseList
    }
}
</script>
