import Vue from 'vue';
import VueCustomElement from 'vue-custom-element';

// Polyfill for older browsers
import 'document-register-element/build/document-register-element';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';

import GeneralPlugin from '@/plugins/GeneralPlugin';

Vue.use(VueCustomElement);
Vue.use(GeneralPlugin, {
  theme: 'dark',
});

Vue.config.productionTip = false;

App.store = store;
App.router = router;
App.i18n = i18n;
App.$colorTheme = 'default';
Vue.customElement('weather-widget', App);
