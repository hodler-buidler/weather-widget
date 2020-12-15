<script>
export default {
  name: 'LocationDisplay',

  props: {
    location: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="location" :class="$stylingTheme">
    <div class="location__left">
      <ui-icon class="location__burger" name="menu" />
      <div>
        {{ location.city | capitalize }}
      </div>
    </div>
    <div>
      <ui-icon class="i-delete" name="delete" clickable />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.location {
  --color-background: #{$light-dark-2};
}

.dark {
  --color-background: #{$dark-light-1};
}

.location {
  background: var(--color-background);
  padding: 8px 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__burger {
    margin-right: 6px;
  }

  &__left {
    display: flex;
    align-items: center;
  }
}

.i-delete {
  color: $red;
}
</style>
