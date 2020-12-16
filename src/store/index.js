import Vue from 'vue';
import Vuex from 'vuex';

import locations from './modules/locations';
import general from './modules/general';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    locations,
    general,
  },
});
