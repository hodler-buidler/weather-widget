import i18n from '@/i18n';
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
      if (type === IMPERIAL_UNITS_TYPE)
        return `${value} ${i18n.t('units.mile/h')}`;
      return `${value} ${i18n.t('units.m/s')}`;
    },

    pressure(value) {
      return `${value} ${i18n.t('units.hPa')}`;
    },

    humidity(value) {
      return `${value}%`;
    },

    cloudiness(value) {
      return `${value}%`;
    },

    visibility(value, type) {
      if (type === IMPERIAL_UNITS_TYPE) {
        return `${metersToMile(value)} ${i18n.t('units.miles')}`;
      }

      return `${metersToKm(value)} ${i18n.t('units.km')}`;
    },
  },
};

export default unitsMixin;
