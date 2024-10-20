<script setup lang="ts">
  defineProps<{ show: boolean }>();
</script>

<template>
  <div class="splash-page" :data-show="show">
    <span>Rhougous Hiroki</span>
  </div>
</template>

<style lang="scss" scoped>
  .splash-page {
    position: fixed;
    padding: 1rem;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;

    min-height: 100dvh;
    min-width: 100vw;

    display: grid;
    place-items: center;

    background-color: black;

    transition:
      opacity 200ms ease 100ms,
      scale 400ms linear;

    &[data-show="false"] {
      pointer-events: none;
      opacity: 0;
      scale: 3;
    }
  }
</style>
