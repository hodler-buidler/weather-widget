<script>
import unitsMixin from '@/mixins/units';

export default {
  name: 'WeatherDisplayOverview',
  mixins: [unitsMixin],

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },

    weatherData: {
      validator(prop) {
        return typeof prop === 'object' || prop === null;
      },
      required: true,
    },
  },

  computed: {
    feelTemperature() {
      if (this.weatherData) {
        return this.weatherData.main.feels_like;
      }
      return 0;
    },

    weatherDescription() {
      if (this.weatherData) {
        return this.weatherData.weather[0].description;
      }
      return '';
    },
  },
};
</script>

<template>
  <div>
    <ui-skeleton-loader
      v-if="isLoading"
      :height="40"
      :width="185"
      :theme="$stylingTheme"
    >
      <rect x="0" y="0" rx="12" ry="12" width="100%" height="100%" />
    </ui-skeleton-loader>
    <div v-else class="overview" :class="$stylingTheme">
      <span>
        {{ $t('words.feelsLike') | capFirstLetter }}
        {{ feelTemperature | temperature($unitsType) }}.
      </span>
      <span>{{ weatherDescription | capFirstLetter }}.</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overview {
  line-height: 1.5;
}
</style>
