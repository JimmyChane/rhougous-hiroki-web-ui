import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/home/HomePage.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/pages/about/AboutPage.vue"),
    },
    {
      path: "/story",
      name: "story",
      component: () => import("@/pages/story/StoryPage.vue"),
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("@/pages/gallery/GalleryPage.vue"),
    },
    { path: "/:pathMatch(.*)*", redirect: { name: "home" } },
  ],
});

export default router;
