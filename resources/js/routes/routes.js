import Vue from 'vue';
import VueRouter from 'vue-router';
import backendRoutes from '../routes/backend-routes';
import frontendRoutes from '../routes/frontend-routes';


Vue.use(VueRouter);
var allRoutes = [];
allRoutes = allRoutes.concat(backendRoutes,frontendRoutes);
const router = new VueRouter({
    mode : 'history',
    routes : allRoutes
});

export default router;