<script setup lang="ts">
  import { ABOUT, GALLERY, HOME, STORY, type Navigation } from "@/router/router";
  import { computed } from "vue";
  import { useRoute } from "vue-router";

  defineProps<{ isScrolledTop?: boolean }>();

  const route = useRoute();

  const navigations = computed(() => {
    return [HOME, ABOUT, STORY, GALLERY].map((navigation) => {
      return { id: navigation.id, text: getText(navigation) };
    });
  });

  function getText(navigation: Navigation) {
    switch (navigation.id) {
      case HOME.id:
        return "Home";
      case ABOUT.id:
        return "About";
      case STORY.id:
        return "Story";
      case GALLERY.id:
        return "Gallery";
    }
  }
</script>

<template>
  <div class="actionbar" :data-scrolled-top="isScrolledTop">
    <div class="actionbar-body">
      <img class="actionbar-logo" src="@/assets/img/pfp.webp" />

      <div class="actionbar-right">
        <RouterLink
          v-for="navigation of navigations"
          :data-selected="route.name === navigation.id"
          :to="{ name: navigation.id }"
        >
          {{ navigation.text }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .actionbar {
    width: 100%;

    position: sticky;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all 200ms ease-in-out;
    &[data-scrolled-top="true"] {
      background: black;
    }

    .actionbar-body {
      width: 100%;
      max-width: var(--content-max-width);
      min-height: var(--actionbar-height);

      padding-inline: 2rem;
      gap: 1.5rem;

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

      @media (min-width: 900px) {
        gap: 3rem;
        .actionbar-right {
          gap: 3rem;
          justify-content: flex-start;
        }
      }
    }
  }
</style>
