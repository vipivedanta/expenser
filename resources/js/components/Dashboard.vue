<template>
    <div>
        Welcome to Expenser {{ getUser.name }}!
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name : 'Dashboard',
    computed : {
        ...mapGetters(['getUser'])
    }
}
</script>
