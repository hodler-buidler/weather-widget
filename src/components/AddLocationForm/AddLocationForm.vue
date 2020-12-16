<script>
const INITIAL_FORM_DATA = {
  city: '',
};

export default {
  name: 'AddLocationForm',

  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },

    serverErrors: {
      type: Object,
      default: () => ({}),
    },
  },

  data: () => ({
    form: { ...INITIAL_FORM_DATA },
  }),

  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.validate()) {
        this.$emit('submit', this.form);
        this.resetForm();
      }
    },

    validate() {
      return this.validateCity();
    },

    validateCity() {
      if (!this.form.city) return false;
      return true;
    },

    resetForm() {
      this.form = { ...INITIAL_FORM_DATA };
    },
  },
};
</script>

<template>
  <form
    ref="form"
    name="AddLocationForm"
    :class="$stylingTheme"
    @submit="onSubmit"
  >
    <div class="field">
      <div class="field__label">
        <span class="label">
          {{ $t('settingsForm.labels.addLocation') | capitalize }}
        </span>
      </div>

      <div class="location-field-wrapper">
        <ui-text-field
          v-model.trim="form.city"
          trim-spaces
          class="location-field"
          :placeholder="
            $t('settingsForm.placeholders.addLocation') | capFirstLetter
          "
          :theme="$stylingTheme"
          :disabled="isLoading"
        />
        <div>
          <button v-if="!isLoading" type="submit" class="submit-btn">
            <ui-icon name="subdirectory_arrow_left" clickable />
          </button>
          <ui-icon v-else class="loading-icon" name="refresh" />
        </div>
      </div>

      <div class="field__message">
        <span class="error-message">
          {{ serverErrors.city | capFirstLetter }}
        </span>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.field {
  &__label {
    margin-bottom: 6px;
  }

  &__message {
    margin-top: 4px;
  }
}

.error-message {
  color: $red;
  font-size: $base-font-size * 0.8;
}

.location-field-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.location-field {
  width: 100%;
  margin-right: 4px;
}

.label {
  @extend %main-font-medium;
}

.submit-btn {
  color: inherit;
  background: none;
  border: none;
  padding: 0;
}

.loading-icon {
  animation: rotate 0.8s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
