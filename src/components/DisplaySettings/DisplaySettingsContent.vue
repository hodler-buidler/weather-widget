<script>
import { mapActions } from 'vuex';
import AddLocationForm from '@/components/AddLocationForm/AddLocationForm.vue';
import DisplaySettingsLocations from './DisplaySettingsLocations.vue';

export default {
  name: 'DisplaySettingsContent',
  components: { DisplaySettingsLocations, AddLocationForm },

  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    isCityDataLoading: false,
    addCityServerErrors: {},
  }),

  watch: {
    isActive: {
      handler(value) {
        if (value) {
          window.addEventListener('keydown', this.onKeyDown);
          this.lockWidgetScroll();
        } else {
          window.removeEventListener('keydown', this.onKeyDown);
          this.unlockWidgetScroll();
          this.clearAddCityServerErrors();
        }
      },
      immediate: true,
    },
  },

  methods: {
    ...mapActions('general', ['lockWidgetScroll', 'unlockWidgetScroll']),
    ...mapActions('locations', ['addCity']),

    async addNewCity(addCityFormData) {
      this.isCityDataLoading = true;
      try {
        await this.addCity(addCityFormData);
        this.clearAddCityServerErrors();
      } catch (error) {
        if (error.isDuplicate) {
          const duplicationError = this.$t('errors.duplicateCityRequested');
          this.$set(this.addCityServerErrors, 'city', duplicationError);
          return;
        }

        const cityNotIdentifiedError = this.$t('errors.cityNotIdentified');
        this.$set(this.addCityServerErrors, 'city', cityNotIdentifiedError);
      } finally {
        this.isCityDataLoading = false;
      }
    },

    clearAddCityServerErrors() {
      this.addCityServerErrors = {};
    },

    onKeyDown(event) {
      if (event.key === 'Escape') this.closeSettings();
    },

    closeSettings() {
      this.$emit('close');
    },
  },
};
</script>

<template>
  <transition name="fade">
    <div v-show="isActive" class="settings" :class="$stylingTheme">
      <div class="settings__header">
        {{ $t('settingsForm.title') | capFirstLetter }}
      </div>
      <div class="settings__locations">
        <display-settings-locations />
      </div>
      <div>
        <add-location-form
          :is-loading="isCityDataLoading"
          :server-errors="addCityServerErrors"
          @submit="addNewCity"
        />
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.settings {
  --color-background: #{$light};
}

.dark {
  --color-background: #{$dark};
}

.settings {
  position: absolute;
  top: 0;
  left: 0;
  background: var(--color-background);
  width: 100%;
  min-height: 100%;
  padding: $app-padding;
  box-sizing: border-box;

  &__header {
    margin-bottom: 20px;
    @extend %main-font-medium;
  }

  &__locations {
    margin-bottom: 20px;
    max-height: $app-height * 0.7;
    overflow-y: auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
