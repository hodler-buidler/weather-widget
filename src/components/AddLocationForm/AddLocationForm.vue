<script>
export default {
  name: 'AddLocationForm',
};
</script>

<template>
  <form name="AddLocationForm" :class="$stylingTheme">
    <div class="field">
      <div class="field__label">
        <span class="label">
          {{ $t('settingsForm.labels.addLocation') | capitalize }}
        </span>
      </div>

      <div class="location-field-wrapper">
        <ui-text-field
          class="location-field"
          placeholder="Your City"
          :theme="$stylingTheme"
        />
        <div>
          <ui-icon name="subdirectory_arrow_left" clickable />
        </div>
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
</style>
