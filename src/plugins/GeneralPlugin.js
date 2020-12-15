/* eslint-disable no-param-reassign */
import {
  SUPPORTED_THEMES,
  DEFAULT_THEME,
  DEFAULT_UNITS_TYPE,
  SUPPORTED_UNITS,
  DEFAULT_INSTANCE_KEY,
} from '@/config/general';

const GeneralPlugin = {
  install(Vue, { theme = DEFAULT_THEME, units = DEFAULT_UNITS_TYPE } = {}) {
    Vue.prototype.$stylingTheme = theme;
    Vue.prototype.$unitsType = units;

    Vue.prototype.$setStylingTheme = (stylingTheme) => {
      if (SUPPORTED_THEMES.includes(stylingTheme)) {
        Vue.prototype.$stylingTheme = stylingTheme;
      }
    };

    Vue.prototype.$setInstanceId = (instanceId) => {
      Vue.prototype.$instanceId = instanceId || DEFAULT_INSTANCE_KEY;
    };

    Vue.prototype.$setUnitsType = (type) => {
      if (SUPPORTED_UNITS.includes(type)) {
        Vue.prototype.$unitsType = type;
      }
    };

    Vue.filter('capFirstLetter', (value) => {
      if (!value) return '';
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    });
  },
};

export default GeneralPlugin;
