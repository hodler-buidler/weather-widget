import {
  STANDARD_UNITS_TYPE,
  METRIC_UNITS_TYPE,
  IMPERIAL_UNITS_TYPE,
} from '@/config/general';
import metersToKm from '@/utils/metersToKm';
import metersToMile from '@/utils/metersToMile';

const unitsMixin = {
  filters: {
    temperature(value, type) {
      const temperatureValue = Math.round(value);

      if (type === STANDARD_UNITS_TYPE) return `${temperatureValue} K`;
      if (type === METRIC_UNITS_TYPE) return `${temperatureValue}°C`;
      if (type === IMPERIAL_UNITS_TYPE) return `${temperatureValue}°F`;

      return temperatureValue;
    },

    windSpeed(value, type) {
      if (type === IMPERIAL_UNITS_TYPE) return `${value} mile/h`;
      return `${value} m/s`;
    },

    pressure(value) {
      return `${value}hPa`;
    },

    humidity(value) {
      return `${value}%`;
    },

    cloudiness(value) {
      return `${value}%`;
    },

    visibility(value, type) {
      if (type === IMPERIAL_UNITS_TYPE) return `${metersToMile(value)} miles`;
      return `${metersToKm(value)}km`;
    },
  },
};

export default unitsMixin;
