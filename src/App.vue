<script>
/* eslint-disable vue/require-prop-types */

import localeMixin from '@/mixins/locale';

export default {
  name: 'App',
  mixins: [localeMixin],

  props: ['lang'],

  created() {
    this.setLocale(this.lang);
  },
};
</script>

<template>
  <router-view />
</template>
