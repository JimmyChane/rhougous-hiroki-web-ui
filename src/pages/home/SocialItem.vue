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
    color: white;
    border-radius: 0.3em;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    gap: 0.8rem;

    text-decoration: none;
    cursor: pointer;

    & > img {
      width: 1.5em;
      height: 1.5em;
      filter: invert(100%);
    }

    &:hover {
      background: hsla(0, 0%, 0%, 0.2);
    }

    @media (max-width: 600px) {
      border-radius: 50%;
      width: 3em;
      height: 3em;
      aspect-ratio: 1/1;
      padding: 0.8em;

      & > span {
        display: none;
      }
    }
  }
</style>
