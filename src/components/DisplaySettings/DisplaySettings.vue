<script>
import DisplaySettingsTrigger from './DisplaySettingsTrigger.vue';
import DisplaySettingsContent from './DisplaySettingsContent.vue';

export default {
  name: 'DisplaySettings',
  components: { DisplaySettingsTrigger, DisplaySettingsContent },

  data: () => ({
    isSettingsVisible: false,
  }),

  methods: {
    switchSettingsVisibility() {
      this.isSettingsVisible = !this.isSettingsVisible;
    },
  },
};
</script>

<template>
  <div class="display-settings" :class="$stylingTheme">
    <display-settings-trigger
      :is-active="!isSettingsVisible"
      @click.native="switchSettingsVisibility"
    />
    <display-settings-content :is-active="isSettingsVisible" />
  </div>
</template>

<style lang="scss" scoped></style>
