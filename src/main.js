import Vue from 'vue';
import VueCustomElement from 'vue-custom-element';

// Polyfill for older browsers
import 'document-register-element/build/document-register-element';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';

Vue.use(VueCustomElement);

Vue.config.productionTip = false;

App.store = store;
App.router = router;
App.i18n = i18n;
Vue.customElement('weather-widget', App);
