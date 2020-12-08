import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import VueClipboard from 'vue-clipboard2';
import App from './App.vue';
import router from './router';
import store from './store';
import icons from './icons';

icons.setup();

VueClipboard.config.autoSetContainer = true;

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueClipboard);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
