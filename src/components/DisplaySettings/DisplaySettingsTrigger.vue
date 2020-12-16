<script>
import SettingsIcon from 'vue-material-design-icons/Cog.vue';
import CloseIcon from 'vue-material-design-icons/Close.vue';

export default {
  name: 'DisplaySettingsTrigger',
  components: { SettingsIcon, CloseIcon },

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
    <ui-icon v-if="isActive" clickable>
      <settings-icon />
    </ui-icon>
    <ui-icon v-else clickable>
      <close-icon />
    </ui-icon>
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
