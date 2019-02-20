<template>
    <div>
        <Header></Header>
        <Message></Message>
        Welcome to Expenser {{ getUser.name }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from './templates/Header';
import Message from './templates/Message';

export default {
    name : 'Dashboard',
    computed : {
        ...mapGetters(['getUser'])
    },
    components : {
        Header,
        Message
    }
}
</script>
