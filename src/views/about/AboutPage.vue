<script setup lang="ts"></script>

<template>
  <div class="about-page">
    <div class="about-title">
      <h1>Rhougous Hiroki</h1>
      <div class="about-title-labels">
        <span>220 Years Old</span>
        <span>Male</span>
        <span>215cm</span>
      </div>
    </div>

    <div class="about-row">
      <h4>Species</h4>
      <span>Dragon, Western, Earth and Water</span>
    </div>
    <div class="about-row">
      <h4>Country of Origin</h4>
      <span>Germany</span>
    </div>
    <div class="about-row">
      <h4>Current Country</h4>
      <span>Japan</span>
    </div>
    <div class="about-row">
      <h4>Year</h4>
      <span>Distant Future</span>
    </div>

    <h3>Clothing</h3>
    <div class="about-row">
      <h4>Shirts</h4>
      <span>2 Hoodies</span>
    </div>
    <div class="about-row">
      <h4>Pants</h4>
      <span>Boxer Black Red Stripe Shorts</span>
    </div>
    <div class="about-row">
      <h4>Underwear</h4>
      <span>Orange Undies</span>
    </div>

    <h3>Hobby</h3>
    <div class="about-row">
      <h4>Hobby</h4>
      <span>Likes to workout</span>
      <span>Tinker with tech</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about-page {
    width: 100%;
    max-width: var(--content-max-width);

    gap: 1rem;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    .about-title {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      & > h1 {
        color: white;
      }
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
          color: rgba(255, 255, 255, 0.8);
        }
      }
    }
    .about-row {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      & > h4 {
        color: white;
      }
    }
  }
</style>
