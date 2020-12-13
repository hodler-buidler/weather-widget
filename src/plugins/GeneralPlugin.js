/* eslint-disable no-param-reassign */
import { SUPPORTED_THEMES, DEFAULT_THEME } from '@/config/general';

const GeneralPlugin = {
  install(Vue, { theme = DEFAULT_THEME } = {}) {
    Vue.prototype.$stylingTheme = theme;

    Vue.prototype.$setStylingTheme = (stylingTheme) => {
      if (SUPPORTED_THEMES.includes(stylingTheme)) {
        Vue.prototype.$stylingTheme = stylingTheme;
      }
    };
  },
};

export default GeneralPlugin;
