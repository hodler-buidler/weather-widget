<script>
export default {
  name: 'StatItemSkeleton',
};
</script>

<template>
  <ui-skeleton-loader :height="20" :width="90" :theme="$stylingTheme">
    <rect
      x="0" y="0"
      rx="6"
      ry="6" width="100%"
      height="100%"
    />
  </ui-skeleton-loader>
</template>

<style lang="scss" scoped></style>
