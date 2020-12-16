<script>
export default {
  name: 'AddLocationForm',

  data: () => ({
    form: {
      city: '',
    },
  }),

  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (this.validate()) {
        this.$emit('submit', this.form);
      }
    },

    validate() {
      return this.validateCity();
    },

    validateCity() {
      if (!this.form.city) return false;
      return true;
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
          placeholder="Your City"
          :theme="$stylingTheme"
        />
        <button type="submit" class="submit-btn">
          <ui-icon name="subdirectory_arrow_left" clickable />
        </button>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.field {
  &__label {
    margin-bottom: 6px;
  }
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
  padding: none;
}
</style>
