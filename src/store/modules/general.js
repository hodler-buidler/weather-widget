/* eslint-disable no-param-reassign */

const general = {
  namespaced: true,

  state: {
    isGlobalScrollLocked: false,
  },

  getters: {},

  mutations: {
    SET_GLOBAL_SCROLL_LOCKED(state, isLocked) {
      state.isGlobalScrollLocked = isLocked;
    },
  },

  actions: {
    lockWidgetScroll({ commit }) {
      commit('SET_GLOBAL_SCROLL_LOCKED', true);
    },

    unlockWidgetScroll({ commit }) {
      commit('SET_GLOBAL_SCROLL_LOCKED', false);
    },
  },
};

export default general;
