<script>
import unitsMixin from '@/mixins/units';
import StatItemSkeleton from './StatItemSkeleton.vue';

export default {
  name: 'WeatherDisplayStats',
  components: { StatItemSkeleton },
  mixins: [unitsMixin],

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },

    weatherData: {
      validator(prop) {
        return typeof prop === 'object' || prop === null;
      },
      required: true,
    },
  },

  computed: {
    windSpeed() {
      if (this.weatherData) {
        return this.weatherData.wind.speed;
      }
      return 0;
    },

    pressure() {
      if (this.weatherData) {
        return this.weatherData.main.pressure;
      }
      return 0;
    },

    humidity() {
      if (this.weatherData) {
        return this.weatherData.main.humidity;
      }
      return 0;
    },

    visibility() {
      if (this.weatherData) {
        return this.weatherData.visibility;
      }
      return 0;
    },

    cloudiness() {
      if (this.weatherData) {
        return this.weatherData.clouds.all;
      }
      return 0;
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
        <span class="nowrap">{{ windSpeed | windSpeed($unitsType) }}</span>
      </template>
    </div>
    <div class="stat">
      <stat-item-skeleton v-if="isLoading" />
      <template v-else>
        <span class="material-icons stat__label-icon">blur_circular</span>
        <span>{{ pressure | pressure }}</span>
      </template>
    </div>
    <div class="stat">
      <stat-item-skeleton v-if="isLoading" />
      <template v-else>
        <span class="stat__label-text">
          {{ $t('stats.humidity') | capitalize({ onlyFirstLetter: true }) }}:
        </span>
        <span>{{ humidity | humidity }}</span>
      </template>
    </div>
    <div class="stat">
      <stat-item-skeleton v-if="isLoading" />
      <template v-else>
        <span class="stat__label-text">
          {{ $t('stats.cloudiness') | capitalize({ onlyFirstLetter: true }) }}:
        </span>
        <span>{{ cloudiness | cloudiness }}</span>
      </template>
    </div>
    <div class="stat">
      <stat-item-skeleton v-if="isLoading" />
      <template v-else>
        <span class="stat__label-text">
          {{ $t('stats.visibility') | capitalize({ onlyFirstLetter: true }) }}:
        </span>
        <span class="nowrap">{{ visibility | visibility($unitsType) }}</span>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nowrap {
  white-space: nowrap;
}

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
