<template>
    <div class="header row">
        <div class="site-name col-md-2">{{ site_name }}</div>
        <div class="menus col-md-10 text-right">
            <a href="#" @click="hitLogoutAPI">Logout</a>
        </div>
    </div>
</template>

<script>
import env from '../../env';
import { mapActions } from 'vuex';
export default {
    name : 'Header',
    data(){
        return {
            site_name : env.SITE_NAME
        }
    },
    methods : {
        ...mapActions(['hitLogoutAPI'])
    }
}
</script>

<style>
 .header{
     padding:5px;
     display:block;
 }
</style> 