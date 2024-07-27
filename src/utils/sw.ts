async function uninstallServiceWorker() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
      const registrations = await navigator.serviceWorker
        .getRegistrations()
        .catch((error: Error) => error);
      if (registrations instanceof Error) {
        console.error("Service worker get registrations failed: ", registrations);
        return;
      }
      const promises = registrations.map((registration) => registration.unregister());
      const results = await Promise.all(promises).catch((error: Error) => error);
      if (results instanceof Error) {
        console.error("Service worker unregistering failed: ", results);
        return;
      }
    });
  }
}

// experiment
async function clearCache() {
  if ("caches" in window) {
    const cacheNames = await caches.keys().catch((error: Error) => error);
    if (cacheNames instanceof Error) {
      console.error("Error while clearing caches: ", cacheNames);
    } else {
      Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
    }
  }
}
