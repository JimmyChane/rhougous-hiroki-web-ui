import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Rhougous Hiroki",
        short_name: "Rhougous",
        icons: [
          { src: "/icon/favicon-16.png", sizes: "16x16", type: "image/png" },
          { src: "/icon/favicon-32.png", sizes: "32x32", type: "image/png" },
          { src: "/icon/favicon.ico", sizes: "48x48", type: "image/ico" },
          { src: "/icon/favicon-192.png", sizes: "192x192", type: "image/png" },
          { src: "/icon/favicon-512.png", sizes: "512x512", type: "image/png" },
          { src: "/icon/favicon-582.png", sizes: "582x582", type: "image/png" },
        ],
        start_url: "/",
        theme_color: "#182a41",
        background_color: "#182a41",
        display: "browser",
      },
      workbox: {
        globPatterns: ["**/*.{js,css,jpg,jpeg,png,webp,gif,svg}"],
        cleanupOutdatedCaches: true,
        navigateFallback: undefined,
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "NetworkOnly",
          },
          {
            urlPattern: /.*\.js$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "js-cache",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 6 * 60 * 60, // 6 hours
              },
            },
          },
          {
            urlPattern: /.*\.css$/,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "css-cache",
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 6 * 60 * 60, // 6 hours
              },
            },
          },
          {
            urlPattern: /.*\.(?:png|jpg|jpeg|webp|gif|svg)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "image-cache",
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 60 * 24 * 60 * 60, // 60 days
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
