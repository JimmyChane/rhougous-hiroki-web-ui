<script setup lang="ts">
  import { computed, ref } from "vue";
  import { RouterView, useRoute, useRouter } from "vue-router";
  import Background from "@/components/Background.vue";
  import Actionbar from "@/components/Actionbar.vue";

  import homeBackground from "@/assets/bg/bg-home.png";
  import aboutBackground from "@/assets/bg/bg-about.jpg";
  import storyBackground from "@/assets/bg/bg-story.jpg";
  import galleryBackground from "@/assets/bg/bg-gallery.png";

  const appBackground = computed(() => {
    const route = useRoute();

    switch (route.name) {
      case "home":
        return homeBackground;
      case "about":
        return aboutBackground;
      case "story":
        return storyBackground;
      case "gallery":
        return galleryBackground;
      default:
        return "";
    }
  });
  const scrollTop = ref(0);

  const onScroll = (e: Event) => {
    const target = e.target as HTMLDivElement;
    scrollTop.value = target.scrollTop ?? 0;
  };
</script>

<template>
  <div class="app">
    <Background :style="{ 'z-index': '1' }" :src="appBackground" />

    <div class="app-body" :style="{ 'z-index': '2' }" @scroll="onScroll">
      <Actionbar :style="{ 'z-index': '2' }" :is-scrolled-top="scrollTop > 0" />
      <RouterView :style="{ 'z-index': '1' }" />
    </div>
  </div>
</template>

<style scoped lang="scss">
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
