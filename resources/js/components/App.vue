<template>
    <div class="container">
        <Header></Header>
        <Message></Message>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>

import Header from './templates/Header';
import Message from './templates/Message';
import Footer from './templates/Footer';

export default {
    name : 'App',
    components : {
        Header,
        Message,
        Footer
    }
}
</script>

<style scoped>
.container{
    padding-top: 40px;
    padding-bottom: 20px;
}
</style>
