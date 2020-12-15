<script>
/* eslint-disable vue/require-prop-types */
import { mapActions } from 'vuex';
import localeMixin from '@/mixins/locale';
import DisplaySettings from '@/components/DisplaySettings/DisplaySettings.vue';

export default {
  name: 'App',
  components: { DisplaySettings },
  mixins: [localeMixin],

  props: ['lang', 'theme', 'instanceId', 'units'],

  data: () => ({
    isError: false,
    isLocationsLoading: false,
  }),

  async created() {
    this.setLocale(this.lang);
    this.$setStylingTheme(this.theme);
    this.$setInstanceId(this.instanceId);
    this.$setUnitsType(this.units);
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
      {{ $t('loadersText.locations') | capFirstLetter }}...
    </div>

    <div v-if="isError">
      {{ $t('errors.locationsNotInitiated') | capFirstLetter }}.
    </div>
    <router-view v-else />

    <display-settings v-if="!isError && !isLocationsLoading" />
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
  position: relative;
  padding: $app-padding;
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
