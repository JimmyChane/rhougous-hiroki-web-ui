<script setup lang="ts">
  import { onMounted, ref, watch } from "vue";

  const props = defineProps({
    src: { type: String, required: true },
  });

  watch(() => props.src, reset);

  onMounted(reset);

  const timeUpdate = ref(0);
  const imageLoaded = ref(false);
  const imageSrc = ref("");

  function onImageLoad() {
    imageLoaded.value = true;
  }
  function reset() {
    const time = (timeUpdate.value = Date.now());
    imageSrc.value = "";
    setTimeout(() => {
      if (time !== timeUpdate.value) return;
      imageLoaded.value = false;
      imageSrc.value = props.src;
    }, 100);
  }
</script>

<template>
  <img
    class="app-background"
    v-if="imageSrc"
    :src="imageSrc"
    :data-loaded="imageLoaded"
    @load="onImageLoad"
  />
</template>

<style scoped lang="scss">
  .app-background {
    display: flex;
    object-fit: cover;
    pointer-events: none;

    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    max-width: 100%;
    max-height: 100%;

    transition: all 400ms ease;

    opacity: 0;
    &[data-loaded="true"] {
      opacity: 1;
    }
  }
</style>
