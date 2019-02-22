require('./bootstrap');
window.Vue = require('vue');
import App from './components/App';
import router from './routes/routes';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const API_URL = 'http://localhost:8000/api/';

new Vue({
    render : h => h(App),
    router : router,
    store : store
}).$mount('#app');