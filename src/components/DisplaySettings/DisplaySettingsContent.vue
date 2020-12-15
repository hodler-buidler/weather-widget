<script>
export default {
  name: 'DisplaySettingsContent',

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
    <div v-show="isActive" class="settings-wrapper" :class="$stylingTheme">
      Content
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.settings-wrapper {
  --color-background: #{$light};
}

.dark {
  --color-background: #{$dark};
}

.settings-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  background: var(--color-background);
  width: 100%;
  height: 100%;
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
