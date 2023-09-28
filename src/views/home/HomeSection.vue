<template>
  <div class="home-section">
    <slot />
  </div>
</template>

<style scoped lang="scss">
  .home-section {
    width: 100%;

    border-radius: 0.3em;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: rgba(0, 0, 0, 0.1);
  }
</style>
