<script setup lang="ts">
  import { onMounted, ref } from "vue";

  onMounted(() => {
    setTimeout(() => {
      show.value = true;
    }, 100);
  });
  const show = ref(false);
</script>

<template>
  <div class="gallery-page" :data-show="show">
    <div class="gallery-title">
      <h1>Rhougous Hiroki</h1>
    </div>

    <div class="gallery-images">
      <img src="https://static.f-list.net/images/charimage/14947207.png" />
      <img src="https://static.f-list.net/images/charimage/14947208.jpg" />
      <img src="https://static.f-list.net/images/charimage/14947282.jpg" />
      <img src="https://static.f-list.net/images/charimage/14947255.jpg" />
      <img src="https://static.f-list.net/images/charimage/14947241.jpg" />
      <img src="https://static.f-list.net/images/charimage/14947267.jpg" />
      <img src="https://static.f-list.net/images/charimage/14947204.jpg" />
      <img src="https://static.f-list.net/images/charimage/14947203.jpg" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .gallery-page {
    transition: all 400ms ease;
    opacity: 0;
    transform: translateY(0.5rem);

    width: 100%;
    max-width: var(--content-max-width);

    gap: 1rem;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    &[data-show="true"] {
      opacity: 1;
      transform: translateY(0);
    }

    .gallery-title {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      & > h1 {
        color: white;
      }
    }
    .gallery-images {
      width: 100%;

      min-height: 10rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      overflow-x: auto;
      overflow-y: hidden;

      border-radius: 0.3em;
      gap: 0.5rem;

      & > * {
        height: 10rem;
        flex: 1 1;
        border-radius: 0.2rem;
        object-fit: cover;
        background: rgba(0, 0, 0, 0.5);
      }
    }
  }
</style>
