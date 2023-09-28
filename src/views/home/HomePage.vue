<script setup lang="ts">
  import Social from "./SocialItem.vue";

  // icon
  import TelegramIcon from "@/assets/icon/telegram-bk.svg";
  import TwitterIcon from "@/assets/icon/twitter-bk.svg";
  import DiscordIcon from "@/assets/icon/discord-bk.svg";
  import FacebookIcon from "@/assets/icon/facebook-bk.svg";
</script>

<template>
  <div class="home-page">
    <div class="home-content">
      <div class="home-greeting">
        <h1>Rhougous Hiroki</h1>
        <p>Meet Rhougous Hiroki, a Western dragon with earth and water elements.</p>
      </div>

      <div class="home-socials">
        <Social href="https://t.me/Rhougous" :icon="TelegramIcon" text="Telegram" />
        <Social href="https://twitter.com/Rhougous" :icon="TwitterIcon" text="Twitter" />
        <Social :icon="DiscordIcon" text="Discord" />
        <Social href="https://www.facebook.com/Rhougous" :icon="FacebookIcon" text="Facebook" />
        <!-- <Social href="https://www.furaffinity.net/user/rhougous" text="FA" />
        <Social href="https://steamcommunity.com/id/HiRhou" text="Steam" />
        <Social href="https://www.twitch.tv/hirhou" text="Twitch" />
        <Social href="https://www.youtube.com/channel/UCX87xxCf4ohR65nZoZfDQ-A" text="YouTube" />
        <Social href="https://www.tiktok.com/@hirhou" text="Tiktok" /> -->
      </div>
    </div>

    <div class="home-avatar">
      <div class="home-avatar-foreground"></div>
      <img src="@/assets/img/home-avatar.png" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .home-page {
    width: 100%;
    height: calc(100dvh - var(--actionbar-height));

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    display: flex;
    flex-direction: column;

    .home-content {
      width: 100%;
      height: 50%;
      max-height: 50%;
      padding: 1rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 2rem;

      .home-greeting {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 0.5rem;

        & > h1 {
          font-size: 3rem;
          color: white;
          line-height: 1;
        }
        & > P {
          width: 70%;
          color: rgba(255, 255, 255, 0.8);
        }
      }
      .home-socials {
        width: 100%;
        gap: 0.2em;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
      }
    }
    .home-avatar {
      width: 100%;
      height: 50%;
      display: flex;
      flex-direction: column;
      position: relative;
      .home-avatar-foreground {
        width: 100%;
        height: 50%;
        display: flex;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        background-image: linear-gradient(0deg, #22272b, transparent);
      }
      & > img {
        height: 50%;
        object-fit: contain;
        display: flex;
        flex-grow: 1;
      }
    }
  }
</style>
