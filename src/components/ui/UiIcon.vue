<script>
export default {
  name: 'UiIcon',

  props: {
    name: {
      type: String,
      required: true,
    },

    size: {
      type: String,
      default: '',
    },

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
    styles() {
      return {
        fontSize: this.size || 'default',
      };
    },

    clickableClass() {
      return this.clickable ? 'clickable' : '';
    },

    disabledClass() {
      return this.disabled ? 'disabled' : '';
    },
  },
};
</script>

<template>
  <span
    class="ui-icon material-icons"
    :class="[clickableClass, disabledClass]"
    :style="styles"
  >
    {{ name }}
  </span>
</template>

<style lang="scss" scoped>
$default-opacity: 0.7;

.ui-icon {
  user-select: none;
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
