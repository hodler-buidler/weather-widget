<script>
import trimSpaces from '@/utils/trimSpaces';

export default {
  name: 'UiTextField',

  props: {
    value: {
      type: [String, Number],
      default: '',
    },

    theme: {
      type: String,
      default: '',
    },

    trimSpaces: {
      type: Boolean,
      default: false,
    },
  },

  data: () => ({
    inputValue: '',
  }),

  computed: {
    defaultStylingClass() {
      return 'default-styling';
    },
  },

  watch: {
    inputValue(newValue) {
      if (newValue !== this.value) {
        this.$emit('input', newValue);
      }
    },

    value: {
      handler(newValue) {
        if (newValue !== this.inputValue) {
          this.inputValue = newValue;
        }
      },
      immediate: true,
    },
  },

  methods: {
    updateValue(event) {
      let result = event.target.value;
      if (this.trimSpaces) result = trimSpaces(result);
      this.inputValue = result;
    },
  },
};
</script>

<template>
  <div class="ui-text-field" :class="theme">
    <input
      v-model="inputValue"
      v-bind="$attrs"
      class="field"
      :class="[defaultStylingClass]"
      @input="updateValue"
    />
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
