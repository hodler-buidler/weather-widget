<script>
import { mapState, mapActions } from 'vuex';
import VueDraggable from 'vuedraggable';
import LocationDisplay from '@/components/LocationDisplay/LocationDisplay.vue';

export default {
  name: 'DisplaySettingsLocations',
  components: { VueDraggable, LocationDisplay },

  computed: {
    ...mapState('locations', ['locations']),

    locationsList: {
      get() {
        return this.locations;
      },
      set(value) {
        this.setLocations(value);
      },
    },

    isLastLocation() {
      return this.locations.length === 1;
    },
  },

  methods: {
    ...mapActions('locations', ['removeLocation', 'setLocations']),
  },
};
</script>

<template>
  <vue-draggable
    v-model="locationsList"
    class="locations"
    :class="$stylingTheme"
    handle=".js-handle"
  >
    <location-display
      v-for="item in locations"
      :key="`${item.city}--${item.countryCode}`"
      :location="item"
      class="locations__item"
      :removable="!isLastLocation"
      with-handle
      handle-class="js-handle"
      @remove="removeLocation"
    />
  </vue-draggable>
</template>

<style lang="scss" scoped>
.locations {
  &__item {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
