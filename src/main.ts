import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import { mult } from './services/mult';

// tslint:disable-next-line: no-console
console.log('Multiplicação:', mult(2, 2));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
