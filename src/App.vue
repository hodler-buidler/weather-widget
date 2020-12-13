<script>
/* eslint-disable vue/require-prop-types */
import localeMixin from '@/mixins/locale';

export default {
  name: 'App',
  mixins: [localeMixin],

  props: ['lang', 'theme'],

  created() {
    this.setLocale(this.lang);
    this.$setStylingTheme(this.theme);
  },
};
</script>

<template>
  <div class="widget-wrap" :class="$stylingTheme">
    <router-view />
  </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap');

.widget-wrap {
  --color-main-background: #{$light};
  --color-main-text: #{$black};
}

.dark {
  --color-main-background: #{$dark};
  --color-main-text: #{$white};
}

.widget-wrap {
  padding: 15px;
  max-width: 300px;
  box-sizing: border-box;
  @extend %main-font;
  font-size: $base-font-size;
  background: var(--color-main-background);
  color: var(--color-main-text);
}
</style>
