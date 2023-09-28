<script setup lang="ts">
  defineProps({
    href: { type: String },
    icon: { type: String },
    text: { type: String },
  });
</script>

<template>
  <a class="social-item" :href="href" target="_blank">
    <img v-if="icon" :src="icon" />
    <span>{{ text }}</span>
  </a>
</template>

<style scoped lang="scss">
  .social-item {
    font-size: 0.8em;
    color: white;
    border-radius: 0.3em;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    gap: 0.5rem;

    text-decoration: none;
    cursor: pointer;

    & > img {
      width: 1rem;
      filter: invert(100%);
    }

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 600px) {
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      aspect-ratio: 1/1;
      padding: 0.8rem;
      & > img {
        width: 100%;
      }
      & > span {
        display: none;
      }
    }
  }
</style>
