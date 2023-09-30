<script setup lang="ts">
  import { useRoute } from "vue-router";

  defineProps({
    isScrolledTop: { type: Boolean, default: false },
  });

  const route = useRoute();

  const navigations = [
    { key: "home", text: "Home" },
    { key: "about", text: "About" },
    { key: "story", text: "Story" },
    { key: "gallery", text: "Gallery" },
  ];
</script>

<template>
  <div class="home-actionbar" :data-scrolled-top="isScrolledTop">
    <img class="actionbar-logo" src="@/assets/img/pfp.png" />

    <div class="actionbar-right">
      <RouterLink
        v-for="navigation of navigations"
        :data-selected="route.name === navigation.key"
        :to="`/${navigation.key}`"
        >{{ navigation.text }}</RouterLink
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
  .home-actionbar {
    &[data-scrolled-top="true"] {
      background: black;
    }

    transition: all 200ms ease-in-out;

    min-height: var(--actionbar-height);
    padding-inline: 2rem;

    position: sticky;
    top: 0;
    left: 0;
    right: 0;

    width: 100%;
    gap: 0.5rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .actionbar-logo {
      border-radius: 50%;
      aspect-ratio: 1/1;
      display: flex;
      height: 2rem;
    }

    .actionbar-right {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      gap: 1.5rem;

      & > * {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        font-size: 1rem;

        &[data-selected="true"] {
          color: white;
          font-weight: 600;
        }
      }
    }
  }
</style>
