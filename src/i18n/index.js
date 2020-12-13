import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './messages';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: process.env.VUE_APP_DEFAULT_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_FALLBACK_LOCALE || 'en',
  messages,
});

export default i18n;
