<script>
import DisplaySettingsTrigger from './DisplaySettingsTrigger.vue';

export default {
  name: 'DisplaySettings',
  components: { DisplaySettingsTrigger },
};
</script>

<template>
  <div class="display-settings" :class="$stylingTheme">
    <display-settings-trigger />
  </div>
</template>

<style lang="scss" scoped></style>
