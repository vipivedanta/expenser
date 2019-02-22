<template>
    <div class="header site-name row">
        <div class="site-name col-md-2" :title="site_name">
            <font-awesome-icon icon="money " />
            <span class="span-1">The</span><span class="span-2">Expenser</span>
            </div>
        <div class="menus col-md-10 text-right">
            <a v-if="accessToken != null" href="#" @click="hitLogoutAPI">Logout</a>
        </div>
    </div>
</template>

<script>
import env from '../../env';
import { mapActions, mapGetters } from 'vuex';
export default {
    name : 'Header',
    data(){
        return {
            site_name : env.SITE_NAME
        }
    },
    methods : {
        ...mapActions(['hitLogoutAPI'])
    },
    computed : {
        ...mapGetters(['accessToken'])
    }
}
</script>

<style>
 .header{
     padding:5px;
     display:block;
 }

.span-1{
    background: orange;
    color:#000;    
}
.span-1,.span-2{
    border:solid 1px orange;
    padding: 5px;
    font-weight: 800;
}
</style> 