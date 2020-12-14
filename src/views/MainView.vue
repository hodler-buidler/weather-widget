<script>
import WeatherDisplay from '@/components/WeatherDisplay/WeatherDisplay.vue';

export default {
  name: 'MainView',
  components: { WeatherDisplay },
};
</script>

<template>
  <div class="main-view" :class="$stylingTheme">
    <div class="main-view__display-item">
      <weather-display />
    </div>
    <div class="main-view__display-item">
      <weather-display />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-view {
  --color-devider: #{$black};
}

.dark {
  --color-devider: #{$light};
}

.main-view {
  &__display-item {
    padding: 20px;
    border-bottom: 1px solid var(--color-devider);

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }
  }
}
</style>
