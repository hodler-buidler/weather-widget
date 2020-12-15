import Vue from 'vue';
import VueCustomElement from 'vue-custom-element';
import Vue2Filters from 'vue2-filters';

// Polyfill for older browsers
import 'document-register-element/build/document-register-element';
// Material icons
import 'material-icons/iconfont/material-icons.css';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';

import GeneralPlugin from '@/plugins/GeneralPlugin';

import UiSkeletonLoader from '@/components/ui/UiSkeletonLoader.vue';
import UiIcon from '@/components/ui/UiIcon.vue';

Vue.config.productionTip = false;

Vue.use(VueCustomElement);
Vue.use(Vue2Filters);
Vue.use(GeneralPlugin, {
  theme: 'dark',
});

Vue.component('UiSkeletonLoader', UiSkeletonLoader);
Vue.component('UiIcon', UiIcon);

App.store = store;
App.router = router;
App.i18n = i18n;
Vue.customElement('weather-widget', App);
