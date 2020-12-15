import {
  STANDARD_UNITS_TYPE,
  METRIC_UNITS_TYPE,
  IMPERIAL_UNITS_TYPE,
} from '@/config/general';

const unitsMixin = {
  filters: {
    temperature(value, type) {
      const temperatureValue = Math.round(value);

      if (type === STANDARD_UNITS_TYPE) return `${temperatureValue} K`;
      if (type === METRIC_UNITS_TYPE) return `${temperatureValue}°C`;
      if (type === IMPERIAL_UNITS_TYPE) return `${temperatureValue}°F`;

      return temperatureValue;
    },
  },
};

export default unitsMixin;
