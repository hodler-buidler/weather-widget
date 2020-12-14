<script>
import VueContentLoading from 'vue-content-loading';
import {
  DEFAULT_THEME,
  DARK_THEME,
  SKELETON_DEFAULT_THEME_PRIMARY,
  SKELETON_DEFAULT_THEME_SECONDARY,
  SKELETON_DARK_THEME_PRIMARY,
  SKELETON_DARK_THEME_SECONDARY,
} from '@/config/general';

export default {
  name: 'UiSkeletonLoader',
  components: { VueContentLoading },

  props: {
    height: {
      type: Number,
      default: 100,
    },

    width: {
      type: Number,
      default: 200,
    },

    theme: {
      type: String,
      default: DEFAULT_THEME,
    },
  },

  computed: {
    isDefaultTheme() {
      return !this.theme || this.theme === DEFAULT_THEME;
    },

    isDarkTheme() {
      return this.theme === DARK_THEME;
    },

    primaryColor() {
      if (this.isDarkTheme) return SKELETON_DARK_THEME_PRIMARY;
      return SKELETON_DEFAULT_THEME_PRIMARY;
    },

    secondaryColor() {
      if (this.isDarkTheme) return SKELETON_DARK_THEME_SECONDARY;
      return SKELETON_DEFAULT_THEME_SECONDARY;
    },
  },
};
</script>

<template>
  <div :style="{ width: `${width}px`, height: `${height}` }">
    <vue-content-loading
      :height="height"
      :width="width"
      :primary="primaryColor"
      :secondary="secondaryColor"
    >
      <slot />
    </vue-content-loading>
  </div>
</template>

<style lang="scss" scoped></style>
