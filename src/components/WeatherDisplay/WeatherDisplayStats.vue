<script>
import StatItemSkeleton from './StatItemSkeleton.vue';

export default {
  name: 'WeatherDisplayStats',
  components: { StatItemSkeleton },

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="stats-grid" :class="$stylingTheme">
    <div class="stat">
      <stat-item-skeleton v-if="isLoading" />
      <template v-else>
        <span class="material-icons stat__label-icon">near_me</span>
        <span>3.0m/s SSE</span>
      </template>
    </div>
    <div class="stat">
      <stat-item-skeleton v-if="isLoading" />
      <template v-else>
        <span class="material-icons stat__label-icon">blur_circular</span>
        <span>1021hPa</span>
      </template>
    </div>
    <div class="stat">
      <stat-item-skeleton v-if="isLoading" />
      <template v-else>
        <span class="stat__label-text">
          {{ $t('stats.humidity') | capitalize({ onlyFirstLetter: true }) }}:
        </span>
        <span>97%</span>
      </template>
    </div>
    <div class="stat">
      <stat-item-skeleton v-if="isLoading" />
      <template v-else>
        <span class="stat__label-text">
          {{ $t('stats.dewPoint') | capitalize({ onlyFirstLetter: true }) }}:
        </span>
        <span>0&deg;C</span>
      </template>
    </div>
    <div class="stat">
      <stat-item-skeleton v-if="isLoading" />
      <template v-else>
        <span class="stat__label-text">
          {{ $t('stats.visibility') | capitalize({ onlyFirstLetter: true }) }}:
        </span>
        <span>10.0km</span>
      </template>
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
