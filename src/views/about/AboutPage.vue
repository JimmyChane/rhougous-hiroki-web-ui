<script setup lang="ts">
  import { onMounted, ref } from "vue";

  onMounted(() => {
    setTimeout(() => {
      show.value = true;
    }, 100);
  });
  const show = ref(false);
</script>

<template>
  <div class="about-page" :data-show="show">
    <div class="about-title">
      <h1>Rhougous Hiroki</h1>
      <div class="about-title-labels">
        <span>220 Years Old</span>
        <span>Male</span>
        <span>215cm</span>
      </div>
    </div>

    <div class="about-section">
      <h3>Bio</h3>
      <div class="about-row">
        <h4>Species</h4>
        <div class="about-section-contents">
          <span>Dragon, Western, Earth and Water</span>
        </div>
      </div>
      <div class="about-row">
        <h4>Country of Origin</h4>
        <div class="about-section-contents">
          <span>Germany</span>
        </div>
      </div>
      <div class="about-row">
        <h4>Current Country</h4>
        <div class="about-section-contents">
          <span>Japan</span>
        </div>
      </div>
      <div class="about-row">
        <h4>Year</h4>
        <div class="about-section-contents">
          <span>Distant Future</span>
        </div>
      </div>
    </div>

    <div class="about-section">
      <h3>Clothing</h3>
      <div class="about-row">
        <h4>Shirts</h4>
        <div class="about-section-contents">
          <span>2 Hoodies</span>
        </div>
      </div>
      <div class="about-row">
        <h4>Pants</h4>
        <div class="about-section-contents">
          <span>Boxer Black Red Stripe Shorts</span>
        </div>
      </div>
      <div class="about-row">
        <h4>Underwear</h4>
        <span>Orange Undies</span>
      </div>
    </div>

    <div class="about-section">
      <div class="about-row">
        <h4>Hobby</h4>
        <div class="about-section-contents">
          <span>Likes to workout</span>
          <span>Tinker with tech</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about-page {
    transition: all 400ms ease;
    opacity: 0;
    transform: translateY(0.5rem);
    &[data-show="true"] {
      opacity: 1;
      transform: translateY(0);
    }

    width: 100%;
    max-width: var(--content-max-width);

    gap: 4rem;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .about-title {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      color: white;

      .about-title-labels {
        width: 100%;
        display: flex;
        flex-direction: row;
        font-size: 0.7rem;
        gap: 0.2em;
        & > * {
          background: rgba(0, 0, 0, 0.5);
          border-radius: 2em;
          padding: 0.4em 0.8em;
        }
      }
    }
    .about-section {
      width: 100%;
      max-width: 40rem;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: white;
      & > h3 {
        text-align: start;
        width: 100%;
        padding-block: 1rem;
        font-size: 1.4rem;
        letter-spacing: 0.2rem;
      }
      .about-row {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        padding-block: 1rem;

        &:first-child {
          border-top: none;
        }

        .about-section-contents {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: end;
          color: white;
        }
      }
    }
  }
</style>
