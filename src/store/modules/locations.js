/* eslint-disable no-param-reassign */
import Storage from '@/storage/Storage';
import Location from '@/storage/models/Location';
import IpInfoSdk from '@/api/ip-info-sdk';
import makeLocation from '@/factories/makeLocation';

const weather = {
  namespaced: true,
  state: {
    LocationsCache: null,
    storage: new Storage(),
    locations: [],
  },

  getters: {},

  mutations: {
    SET_LOCATIONS(state, locations) {
      state.locations = locations;
    },

    ADD_LOCATION(state, location) {
      const hasDuplicate = state.locations.find(({ city, countryCode }) => {
        return city === location.city && countryCode === location.countryCode;
      });

      if (!hasDuplicate) {
        state.locations.push(location);
      }
    },

    MAKE_LOCATIONS_CACHE(state, { instanceId }) {
      state.LocationsCache = new Location(state.storage, instanceId);
    },
  },

  actions: {
    async initLocations({ state, dispatch, commit }, { instanceId } = {}) {
      commit('MAKE_LOCATIONS_CACHE', { instanceId });

      if (!state.locations.length) {
        const cachedLocations = state.LocationsCache.getAll();
        if (cachedLocations) commit('SET_LOCATIONS', cachedLocations);
        else await dispatch('loadCurrentLocation');
      }
    },

    async loadCurrentLocation({ dispatch }) {
      const { city, country } = await IpInfoSdk.basicInfo();
      const location = makeLocation({ city, countryCode: country });
      dispatch('addLocation', location);
    },

    addLocation({ commit, state }, location) {
      commit('ADD_LOCATION', location);
      if (state.locations.length) {
        state.LocationsCache.setAll(state.locations);
      }
    },
  },
};

export default weather;
