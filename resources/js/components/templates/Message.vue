<template>
    <div>
        <div class="alert alert-danger" v-if="messages.error != false">{{ messages.error }}</div>
        <div class="alert alert-info" v-if="messages.info != false">{{ messages.info }}</div>
        <div class="alert alert-success" v-if="messages.success != false">{{ messages.success }}</div>
    </div>    
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name : 'Message',
    computed : {
        ...mapGetters(['messages']) 
    }
}
</script>

