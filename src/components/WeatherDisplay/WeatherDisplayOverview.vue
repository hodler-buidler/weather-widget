<script>
export default {
  name: 'WeatherDisplayOverview',

  props: {
    isLoading: {
      type: Boolean,
      default: false,
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
      Feels like -3&deg;C. Broken clouds. Light breeze.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overview {
  line-height: 1.5;
}
</style>
