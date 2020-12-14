<script>
export default {
  name: 'WeatherDisplayConditions',
};
</script>

<template>
  <div class="conditions" :class="$stylingTheme">
    <img
      class="icon"
      src="http://openweathermap.org/img/wn/03d@2x.png"
      alt=""
    />
    <span class="temperature">-7&deg;C</span>
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
}

.icon {
  user-select: none;
}
</style>
