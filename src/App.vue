<script setup lang="ts">
  import { onMounted, ref, watch } from "vue";
  import { RouterView, useRoute } from "vue-router";
  import Actionbar from "@/components/Actionbar.vue";
  import AppBackground from "./App-Background.vue";

  // background
  import HomeBackground from "@/assets/bg/bg-home.webp";
  import AboutBackground from "@/assets/bg/bg-about.webp";
  import StoryBackground from "@/assets/bg/bg-story.webp";
  import GalleryBackground from "@/assets/bg/bg-gallery.webp";

  const route = useRoute();

  const show = ref(false);
  const refAppBody = ref<HTMLDivElement>();
  const appBodyScrollTop = ref(0);
  const appBackground = ref("");

  function onScroll(e: Event) {
    const target = e.target as HTMLDivElement;
    appBodyScrollTop.value = target.scrollTop ?? 0;
  }
  function getBackground() {
    switch (route.name) {
      case "home":
        return HomeBackground;
      case "about":
        return AboutBackground;
      case "story":
        return StoryBackground;
      case "gallery":
        return GalleryBackground;
      default:
        return "";
    }
  }

  watch(
    () => route.name,
    () => {
      if (refAppBody.value) {
        refAppBody.value.scrollTo({ top: 0 });
      }

      const name = route.name;
      show.value = false;
      setTimeout(() => {
        if (name !== route.name) return;
        appBackground.value = getBackground();
        show.value = true;
      }, 400);
    },
  );

  onMounted(() => {
    appBackground.value = getBackground();
    setTimeout(() => (show.value = true), 100);
  });
</script>

<template>
  <div class="app">
    <div class="app-background-parent" :data-show="show">
      <AppBackground :style="{ 'z-index': '1' }" :src="appBackground" />
    </div>

    <div class="app-body" :style="{ 'z-index': '2' }" ref="refAppBody" @scroll="onScroll">
      <Actionbar :style="{ 'z-index': '2' }" :is-scrolled-top="appBodyScrollTop > 0" />
      <RouterView :style="{ 'z-index': '1' }" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .app-background-parent {
    transition: all 400ms ease;
    opacity: 0;
    transform: scale(1.02);
    &[data-show="true"] {
      opacity: 0.4;
      transform: scale(1);
    }

    pointer-events: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .app {
    width: 100%;
    height: 100dvh;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    .app-body {
      width: 100%;
      height: 100dvh;
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow-y: auto;
    }
  }
</style>
