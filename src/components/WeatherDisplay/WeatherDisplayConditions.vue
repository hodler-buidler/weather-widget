<script>
import OpenWeatherSdk from '@/api/open-weather-sdk';
import unitsMixin from '@/mixins/units';

export default {
  name: 'WeatherDisplayConditions',

  mixins: [unitsMixin],

  props: {
    weatherData: {
      validator(prop) {
        return typeof prop === 'object' || prop === null;
      },
      required: true,
    },

    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    temperature() {
      if (this.weatherData) {
        return this.weatherData.main.temp;
      }
      return 0;
    },

    icon() {
      if (this.weatherData) {
        return OpenWeatherSdk.makeIconPath(this.weatherData.weather[0].icon, 2);
      }
      return '';
    },
  },
};
</script>

<template>
  <div>
    <ui-skeleton-loader v-if="isLoading" :height="90" :theme="$stylingTheme">
      <rect x="0" y="0" rx="12" ry="12" width="100%" height="90px" />
    </ui-skeleton-loader>
    <div v-else class="conditions" :class="$stylingTheme">
      <img class="icon" :src="icon" alt="" />
      <span class="temperature">
        {{ temperature | temperature($unitsType) }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.conditions {
  --color-background: #{$light-dark-2};
}

.dark {
  --color-background: #{$dark-light-1};
}

.conditions {
  display: inline-flex;
  align-items: center;
  background: var(--color-background);
  padding: 0 20px 0 5px;
  border-radius: 15px;
}

.temperature {
  font-size: $base-font-size * 3;
  @extend %main-font-medium;
  white-space: nowrap;
}

.icon {
  user-select: none;
}
</style>
