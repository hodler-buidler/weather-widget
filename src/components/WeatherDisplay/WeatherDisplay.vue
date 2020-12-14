<script>
import WeatherDisplayStats from './WeatherDisplayStats.vue';
import WeatherDisplayConditions from './WeatherDisplayConditions.vue';

export default {
  name: 'WeatherDisplay',
  components: { WeatherDisplayStats, WeatherDisplayConditions },
};
</script>

<template>
  <div class="weather-display" :class="$stylingTheme">
    <div class="weather-display__heading">
      <span class="location">London, UK</span>
    </div>
    <div class="weather-display__conditions">
      <weather-display-conditions />
    </div>
    <div class="weather-display__overview">
      <span class="overview">
        Feels like -3&deg;C. Broken clouds. Light breeze.
      </span>
    </div>
    <div>
      <weather-display-stats />
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
