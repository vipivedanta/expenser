require('./bootstrap');
window.Vue = require('vue');
import App from './components/App';
import router from './routes/routes';
import store from './store';

new Vue({
    render : h => h(App),
    router : router,
    store : store
}).$mount('#app');