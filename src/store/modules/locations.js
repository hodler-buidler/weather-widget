/* eslint-disable no-param-reassign */
import Storage from '@/storage/Storage';
import Location from '@/storage/models/Location';
import IpInfoSdk from '@/api/ip-info-sdk';
import OpenWeatherSdk from '@/api/open-weather-sdk';
import makeLocation from '@/factories/makeLocation';
import isDuplicateLocation from '@/utils/isDuplicateLocation';

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
      if (!isDuplicateLocation(location, state.locations)) {
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

    async addCity({ state, dispatch }, { city }) {
      const data = await OpenWeatherSdk.weather.byCityName({ city });
      const location = makeLocation({
        city: data.name,
        countryCode: data.sys.country,
      });

      const DuplicateError = { isDuplicate: true };
      if (isDuplicateLocation(location, state.locations)) throw DuplicateError;
      else dispatch('addLocation', location);
    },
  },
};

export default weather;
