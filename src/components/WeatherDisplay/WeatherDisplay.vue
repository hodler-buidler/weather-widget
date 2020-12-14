<script>
import OpenWeatherSdk from '@/api/open-weather-sdk';
import WeatherDisplayStats from './WeatherDisplayStats.vue';
import WeatherDisplayConditions from './WeatherDisplayConditions.vue';

export default {
  name: 'WeatherDisplay',
  components: {
    WeatherDisplayStats,
    WeatherDisplayConditions,
  },

  props: {
    location: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    isLoading: false,
    weatherData: null,
    isError: false,
  }),

  async mounted() {
    await this.loadWeatherData();
  },

  methods: {
    async loadWeatherData() {
      try {
        this.isLoading = true;
        this.weatherData = await OpenWeatherSdk.weather.byCityName({
          city: this.location.city,
          countryCode: this.location.countryCode,
        });
      } catch (RequestError) {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<template>
  <div class="weather-display" :class="$stylingTheme">
    <template v-if="!isError">
      <div class="weather-display__heading">
        <span class="location">
          {{ location.city | capitalize }},
          {{ location.countryCode | uppercase }}
        </span>
      </div>
      <div class="weather-display__conditions">
        <ui-skeleton-loader
          v-if="isLoading"
          :height="90"
          :theme="$stylingTheme"
        >
          <rect
            x="0" y="0"
            rx="12"
            ry="12" width="100%"
            height="100%"
          />
        </ui-skeleton-loader>
        <weather-display-conditions v-else />
      </div>
      <div class="weather-display__overview">
        <ui-skeleton-loader
          v-if="isLoading"
          :height="40"
          :width="185"
          :theme="$stylingTheme"
        >
          <rect
            x="0" y="0"
            rx="12"
            ry="12" width="100%"
            height="100%"
          />
        </ui-skeleton-loader>
        <span v-else class="overview">
          Feels like -3&deg;C. Broken clouds. Light breeze.
        </span>
      </div>
      <div>
        <weather-display-stats :is-loading="isLoading" />
      </div>
    </template>
    <div v-show="isError">
      <span>
        {{
          $t('errors.dataNotLoadedForCity')
            | capitalize({ onlyFirstLetter: true })
        }}
        {{ location.city | capitalize }}.
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.weather-display {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__heading {
    margin-bottom: 12px;
  }

  &__conditions {
    margin-bottom: 12px;
  }

  &__overview {
    margin-bottom: 14px;
    width: 80%;
    text-align: center;
  }
}

.overview {
  line-height: 1.5;
}

.location {
  @extend %main-font-medium;
}
</style>
