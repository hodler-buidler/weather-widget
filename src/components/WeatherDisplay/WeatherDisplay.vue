<script>
import OpenWeatherSdk from '@/api/open-weather-sdk';
import WeatherDisplayLocation from './WeatherDisplayLocation.vue';
import WeatherDisplayConditions from './WeatherDisplayConditions.vue';
import WeatherDisplayOverview from './WeatherDisplayOverview.vue';
import WeatherDisplayStats from './WeatherDisplayStats.vue';

export default {
  name: 'WeatherDisplay',
  components: {
    WeatherDisplayLocation,
    WeatherDisplayConditions,
    WeatherDisplayOverview,
    WeatherDisplayStats,
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
          units: this.$unitsType,
          lang: this.$i18n.locale,
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
        <weather-display-location :location="location" />
      </div>
      <div class="weather-display__conditions">
        <weather-display-conditions
          :weather-data="weatherData"
          :is-loading="isLoading"
        />
      </div>
      <div class="weather-display__overview">
        <weather-display-overview
          :weather-data="weatherData"
          :is-loading="isLoading"
        />
      </div>
      <div>
        <weather-display-stats
          :weather-data="weatherData"
          :is-loading="isLoading"
        />
      </div>
    </template>
    <div v-show="isError">
      <span>
        {{ $t('errors.dataNotLoadedForCity') | capFirstLetter }}
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
</style>
