<script setup lang="ts">
  import { computedAsync } from "@vueuse/core";
  import { computed, ref, watch } from "vue";
  import { RouterView, useRoute } from "vue-router";

  import AboutBackground from "@/assets/bg/bg-about.webp";
  import GalleryBackground from "@/assets/bg/bg-gallery.webp";
  import HomeBackground from "@/assets/bg/bg-home.webp";
  import StoryBackground from "@/assets/bg/bg-story.webp";
  import { ABOUT, GALLERY, HOME, STORY } from "@/router/router";
  import { wait, waitFrame } from "@/utils/Await";

  import SplashView from "@/views/SplashView.vue";

  import AppActionbar from "./App-Actionbar.vue";
  import AppBackground from "./App-Background.vue";

  const route = useRoute();

  const show = ref(false);
  const refAppBody = ref<HTMLDivElement>();
  const appBodyScrollTop = ref(0);
  const appBackground = computedAsync(
    async () => {
      const routeName = route.name;

      show.value = false;
      await wait(400);
      await waitFrame();
      if (route.name === routeName) {
        show.value = true;
      }

      switch (routeName) {
        case HOME.id:
          return HomeBackground;
        case ABOUT.id:
          return AboutBackground;
        case STORY.id:
          return StoryBackground;
        case GALLERY.id:
          return GalleryBackground;
        default:
          return "";
      }
    },
    "",
    { lazy: true },
  );

  const splashDuration = computed(() => 800);
  const showSplash = computedAsync(async () => {
    await wait(splashDuration.value);
    await waitFrame();
    return false;
  }, true);
  const useSplash = computedAsync(async () => {
    if (showSplash.value) return true;
    await wait(splashDuration.value);
    await waitFrame();
    return false;
  }, true);

  function onScroll() {
    appBodyScrollTop.value = refAppBody.value?.scrollTop ?? 0;
  }

  watch([() => route.name], () => {
    refAppBody.value?.scrollTo({ top: 0 });
  });
</script>

<template>
  <div class="app">
    <div class="app-background-parent" :data-show="show">
      <AppBackground style="z-index: 1" :src="appBackground" />
    </div>

    <div class="app-body" style="z-index: 2" ref="refAppBody" @scroll="onScroll">
      <AppActionbar style="z-index: 2" :is-scrolled-top="appBodyScrollTop > 0" />
      <RouterView style="z-index: 1" />
    </div>

    <SplashView v-if="useSplash" style="z-index: 3" :show="showSplash" />
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
