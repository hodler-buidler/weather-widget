<script>
export default {
  name: 'DisplaySettingsTrigger',
};
</script>

<template>
  <div class="settings-trigger" :class="$stylingTheme">Trigger</div>
</template>

<style lang="scss" scoped>
.settings-trigger {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
