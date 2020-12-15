<script>
import DisplaySettingsLocations from './DisplaySettingsLocations.vue';

export default {
  name: 'DisplaySettingsContent',
  components: { DisplaySettingsLocations },

  props: {
    isActive: {
      type: Boolean,
      default: false,
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
      <div>
        <display-settings-locations />
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
