<script>
/* eslint-disable vue/require-prop-types */
import localeMixin from '@/mixins/locale';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  mixins: [localeMixin],

  props: ['lang', 'theme', 'instanceId'],

  data: () => ({
    isError: false,
    isLocationsLoading: false,
  }),

  async created() {
    this.setLocale(this.lang);
    this.$setStylingTheme(this.theme);
    this.$setInstanceId(this.instanceId);
    await this.initLocations();
  },

  methods: {
    ...mapActions('locations', {
      initLocationsAction: 'initLocations',
    }),

    async initLocations() {
      try {
        this.isLocationsLoading = true;
        await this.initLocationsAction({ instanceId: this.$instanceId });
      } catch (RequestError) {
        this.isError = true;
      } finally {
        this.isLocationsLoading = false;
      }
    },
  },
};
</script>

<template>
  <div class="widget-wrap" :class="$stylingTheme">
    <div v-if="isLocationsLoading" class="locations-loader">
      {{
        $t('loadersText.locations') | capitalize({ onlyFirstLetter: true })
      }}...
    </div>

    <div v-if="isError">
      {{
        $t('errors.locationsNotInitiated')
          | capitalize({ onlyFirstLetter: true })
      }}
    </div>
    <router-view v-else />
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

.widget-wrap {
  --color-main-background: #{$light};
  --color-main-text: #{$black};
}

.dark {
  --color-main-background: #{$dark};
  --color-main-text: #{$white};
}

.widget-wrap {
  padding: 15px;
  max-width: 300px;
  box-sizing: border-box;
  @extend %main-font;
  font-size: $base-font-size;
  background: var(--color-main-background);
  color: var(--color-main-text);
}

.locations-loader {
  text-align: center;
}
</style>
