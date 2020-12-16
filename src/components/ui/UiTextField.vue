<script>
export default {
  name: 'UiTextField',

  props: {
    theme: {
      type: String,
      default: '',
    },
  },

  computed: {
    defaultStylingClass() {
      return 'default-styling';
    },
  },
};
</script>

<template>
  <div class="ui-text-field" :class="theme">
    <input v-bind="$attrs" class="field" :class="[defaultStylingClass]" />
  </div>
</template>

<style lang="scss" scoped>
.field {
  width: 100%;
  box-sizing: border-box;
  outline: none;
}

.default-styling {
  --color-default-background: #{$light-dark-2};
  --color-default-text: #{$black};
}

.dark .default-styling {
  --color-default-background: #{$dark-light-1};
  --color-default-text: #{$white};
}

.default-styling {
  border-radius: 4px;
  border: none;
  padding: 8px;
  background: var(--color-default-background);
  color: var(--color-default-text);
  font-size: $base-font-size * 0.9;

  &::placeholder {
    color: var(--color-default-text);
    opacity: 0.3;
  }
}
</style>
