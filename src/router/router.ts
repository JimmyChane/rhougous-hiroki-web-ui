import type { Component } from "vue";
import { createRouter, createWebHistory } from "vue-router";

export interface Navigation {
  id: string;
  component: () => Promise<Component>;
}

export const HOME: Navigation = {
  id: "home",
  component: () => import("@/pages/home/HomePage.vue"),
};
export const ABOUT: Navigation = {
  id: "about",
  component: () => import("@/pages/about/AboutPage.vue"),
};
export const STORY: Navigation = {
  id: "story",
  component: () => import("@/pages/story/StoryPage.vue"),
};
export const GALLERY: Navigation = {
  id: "gallery",
  component: () => import("@/pages/gallery/GalleryPage.vue"),
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: HOME.id, component: HOME.component },
    { path: "/about", name: ABOUT.id, component: ABOUT.component },
    { path: "/story", name: STORY.id, component: STORY.component },
    { path: "/gallery", name: GALLERY.id, component: GALLERY.component },
    { path: "/:pathMatch(.*)*", redirect: { name: HOME.id } },
  ],
});

export default router;
