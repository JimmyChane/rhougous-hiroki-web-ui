<script setup lang="ts">
  defineProps({
    src: { type: String },
  });
</script>

<template>
  <img class="background" :src="src" />
</template>

<style scoped lang="scss">
  img.background {
    display: flex;
    object-fit: cover;
    pointer-events: none;

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    max-height: 100%;

    pointer-events: none;
    opacity: 0.4;
  }
</style>
