const localeMixin = {
  methods: {
    setLocale(locale) {
      if (typeof locale === 'string' && locale.length === 2) {
        this.$i18n.locale = locale;
      }
    },
  },
};

export default localeMixin;
