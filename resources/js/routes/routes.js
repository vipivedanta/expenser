import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home';

Vue.use(VueRouter);
const router = new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            component : Home
        },
        {
            path : '/home',
            component : Home
        }   
    ]
});

export default router;