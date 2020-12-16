<script>
import DeleteIcon from 'vue-material-design-icons/Delete.vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue';

export default {
  name: 'LocationDisplay',

  components: { DeleteIcon, MenuIcon },

  props: {
    location: {
      type: Object,
      required: true,
    },

    removable: {
      type: Boolean,
      default: true,
    },

    withHandle: {
      type: Boolean,
      default: false,
    },

    handleClass: {
      type: String,
      default: 'js-handle',
    },
  },

  methods: {
    removeLocation() {
      if (this.removable) {
        this.$emit('remove', this.location);
      }
    },
  },
};
</script>

<template>
  <div class="location" :class="$stylingTheme">
    <div class="location__left">
      <ui-icon
        v-if="withHandle"
        class="handle location__burger"
        :class="handleClass"
      >
        <menu-icon />
      </ui-icon>
      <div>
        {{ location.city | capitalize }}
      </div>
    </div>
    <div>
      <ui-icon
        v-if="removable"
        class="i-delete"
        clickable
        @click.native="removeLocation"
      >
        <delete-icon />
      </ui-icon>
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

.handle {
  cursor: move;
}
</style>
