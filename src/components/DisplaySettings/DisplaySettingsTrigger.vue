<script>
export default {
  name: 'DisplaySettingsTrigger',
};
</script>

<template>
  <div class="settings-trigger" :class="$stylingTheme">
    <ui-icon name="settings" clickable />
  </div>
</template>

<style lang="scss" scoped>
.settings-trigger {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
