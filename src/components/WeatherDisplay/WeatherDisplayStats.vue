<script>
export default {
  name: 'WeatherDisplayStats',
};
</script>

<template>
  <div class="stats-grid" :class="$stylingTheme">
    <div class="stat">
      <span class="material-icons stat__label-icon">near_me</span>
      <span>3.0m/s SSE</span>
    </div>
    <div class="stat">
      <span class="material-icons stat__label-icon">blur_circular</span>
      <span>1021hPa</span>
    </div>
    <div class="stat">
      <span class="stat__label-text">
        {{ $t('stats.humidity') | capitalize({ onlyFirstLetter: true }) }}:
      </span>
      <span>97%</span>
    </div>
    <div class="stat">
      <span class="stat__label-text">
        {{ $t('stats.dewPoint') | capitalize({ onlyFirstLetter: true }) }}:
      </span>
      <span>0&deg;C</span>
    </div>
    <div class="stat">
      <span class="stat__label-text">
        {{ $t('stats.visibility') | capitalize({ onlyFirstLetter: true }) }}:
      </span>
      <span>10.0km</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px 15px;
}

.stat {
  display: flex;
  align-items: center;

  &__label-text {
    margin-right: 6px;
    @extend %main-font-medium;
    white-space: nowrap;
  }

  &__label-icon {
    margin-right: 3px;
  }
}
</style>
