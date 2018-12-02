import Vue from 'vue';
import App from './App.vue';
import 'bulma';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faUserCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCheck, faUserCircle, faExclamationTriangle);

Vue.component('Icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
