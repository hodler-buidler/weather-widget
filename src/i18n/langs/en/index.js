const translations = {
  stats: {
    humidity: 'humidity',
    visibility: 'visibility',
    cloudiness: 'cloudiness',
  },
  settingsForm: {
    title: 'settings',
    labels: {
      addLocation: 'add location',
    },
    placeholders: {
      addLocation: 'your city',
    },
  },
  errors: {
    dataNotLoadedForCity: `some error occurred, data couldn't be loaded for city`,
    locationsNotInitiated: `locations data couldn't be obtained, please checkout network connection and reload the page`,
    cityNotIdentified: 'requested city not found',
    duplicateCityRequested: 'city already added',
  },
  loadersText: {
    locations: 'locations loading',
  },
  words: {
    feelsLike: 'feels like',
  },
  units: {
    'mile/h': 'mile/h',
    'm/s': 'm/s',
    hPa: 'hPa',
    miles: 'miles',
    km: 'km',
  },
};

export default translations;
