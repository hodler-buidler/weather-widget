<script>
export default {
  name: 'WeatherDisplayLocation',

  props: {
    location: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="location" :class="$stylingTheme">
    {{ location.city | capitalize }},
    {{ location.countryCode | uppercase }}
  </div>
</template>

<style lang="scss" scoped>
.location {
  @extend %main-font-medium;
}
</style>
