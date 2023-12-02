import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/home/HomePage.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/about/AboutPage.vue"),
    },
    {
      path: "/story",
      name: "story",
      component: () => import("@/views/story/StoryPage.vue"),
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("@/views/gallery/GalleryPage.vue"),
    },
    { path: "/:pathMatch(.*)*", redirect: { name: "home" } },
  ],
});

export default router;
