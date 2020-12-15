<script>
export default {
  name: 'DisplaySettingsTrigger',

  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="settings-trigger" :class="$stylingTheme">
    <ui-icon v-if="isActive" name="settings" clickable />
    <ui-icon v-else name="close" clickable />
  </div>
</template>

<style lang="scss" scoped>
.settings-trigger {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 5;
}
</style>
