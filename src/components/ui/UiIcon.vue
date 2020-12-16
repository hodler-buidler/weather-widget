<script>
export default {
  name: 'UiIcon',

  props: {
    clickable: {
      type: Boolean,
      default: false,
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    clickableClass() {
      return this.clickable ? 'clickable' : '';
    },

    disabledClass() {
      return this.disabled ? 'disabled' : '';
    },

    tabIndexValue() {
      return this.clickable ? 0 : false;
    },
  },
};
</script>

<template>
  <span
    class="ui-icon"
    :class="[clickableClass, disabledClass]"
    :tabindex="tabIndexValue"
  >
    <slot />
  </span>
</template>

<style lang="scss" scoped>
$default-opacity: 0.7;

.ui-icon {
  user-select: none;
  outline: none;
}

.clickable {
  transition: 0.2s all;

  &:not(.disabled) {
    cursor: pointer;
  }

  &:not(.disabled):hover {
    opacity: $default-opacity;
  }
}

.disabled {
  opacity: $default-opacity;
  cursor: default;
}
</style>
