<script>
import { mapState } from 'vuex';
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
        console.log(value);
      },
    },
  },
};
</script>

<template>
  <vue-draggable v-model="locationsList" :class="$stylingTheme">
    <location-display
      v-for="item in locations"
      :key="`${item.city}--${item.countryCode}`"
      :location="item"
    />
  </vue-draggable>
</template>

<style lang="scss" scoped></style>
