<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import Social from "./SocialItem.vue";

  // icon
  import TelegramIcon from "@/assets/icon/telegram-bk.svg";
  import TwitterIcon from "@/assets/icon/twitter-bk.svg";
  import DiscordIcon from "@/assets/icon/discord-bk.svg";
  import FacebookIcon from "@/assets/icon/facebook-bk.svg";
  import SteamIcon from "@/assets/icon/steam-bk.svg";
  import YoutubeIcon from "@/assets/icon/youtube-bk.svg";
  import TiktokIcon from "@/assets/icon/tiktok-bk.svg";
  import TwitchIcon from "@/assets/icon/twitch-bk.svg";
  import FuraffinityIcon from "@/assets/icon/furaffinity-bk.png";

  onMounted(() => {
    setTimeout(() => {
      show.value = true;
    }, 100);
  });
  const show = ref(false);
</script>

<template>
  <div class="home-page" :data-show="show">
    <div class="home-content">
      <div class="home-greeting">
        <h1>Rhougous Hiroki</h1>
        <p>Meet Rhougous Hiroki, a Western dragon with earth and water elements.</p>
      </div>

      <div class="home-socials">
        <Social href="https://t.me/Rhougous" :icon="TelegramIcon" text="Telegram" />
        <Social href="https://twitter.com/Rhougous" :icon="TwitterIcon" text="Twitter" />
        <Social
          href="https://discordapp.com/users/961143663554068550"
          :icon="DiscordIcon"
          text="Discord"
        />
        <Social href="https://www.facebook.com/Rhougous" :icon="FacebookIcon" text="Facebook" />

        <Social
          href="https://www.furaffinity.net/user/rhougous"
          :icon="FuraffinityIcon"
          text="FA"
        />
        <Social href="https://steamcommunity.com/id/HiRhou" :icon="SteamIcon" text="Steam" />
        <Social href="https://www.twitch.tv/hirhou" :icon="TwitchIcon" text="Twitch" />
        <Social
          href="https://www.youtube.com/channel/UCX87xxCf4ohR65nZoZfDQ-A"
          :icon="YoutubeIcon"
          text="YouTube"
        />
        <Social href="https://www.tiktok.com/@hirhou" :icon="TiktokIcon" text="Tiktok" />
      </div>
    </div>

    <div class="home-avatar-parent">
      <div class="home-avatar">
        <img src="@/assets/img/rhougous-transparent.webp" />
        <div class="home-avatar-foreground"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .home-page {
    transition: all 400ms ease;
    opacity: 0;
    transform: translateY(0.5rem);
    &[data-show="true"] {
      opacity: 1;
      transform: translateY(0);
    }

    width: 100%;
    height: calc(100dvh - var(--actionbar-height));

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .home-content {
      width: 100%;
      height: max-content;
      min-height: max-content;
      padding: 1rem;
      padding-top: 4rem;
      padding-bottom: 6rem;

      display: flex;
      flex-direction: column;
      flex: 1 1;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 3rem;

      transition: all 400ms ease;

      .home-greeting {
        display: flex;
        flex-direction: column;
        align-items: inherit;
        text-align: inherit;
        gap: 0.5rem;

        & > h1 {
          font-size: 3em;
          color: white;
          line-height: 1;
        }
        & > P {
          min-width: 90%;
          max-width: 55vmin;
          color: rgba(255, 255, 255, 0.8);
        }
      }
      .home-socials {
        width: 55vmin;
        gap: 0.8em;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: inherit;
        justify-content: inherit;

        @media (max-width: 600px) {
          gap: 0.2em;
        }
      }

      @media (min-width: 900px) {
        font-size: 1.2rem;
      }
      @media (max-width: 550px), (max-height: 850px) {
        padding-block: 3rem;
        gap: 1.5rem;
      }
      @media (max-width: 450px), (max-height: 750px) {
        padding-block: 2rem;
        gap: 1rem;
      }
    }
    .home-avatar-parent {
      width: 100%;
      display: flex;
      .home-avatar {
        width: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        overflow: hidden;

        & > img {
          z-index: 1;
          object-fit: contain;
          display: flex;
          flex-grow: 1;
        }
        .home-avatar-foreground {
          z-index: 2;
          width: 100%;
          height: 33%;
          display: flex;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          pointer-events: none;

          opacity: 0.33;
          background-image: linear-gradient(0deg, var(--background-color), transparent);
        }
      }
    }

    @media (min-width: 900px) {
      flex-direction: row-reverse;
      align-items: flex-start;
      max-width: var(--content-max-width);

      .home-content {
        height: 100%;
        align-items: flex-start;
        text-align: start;
        padding: 3rem;
        padding-left: 2rem;
        flex-grow: 1 1;
        justify-content: flex-start;
        overflow: hidden;

        .home-greeting {
          width: 100%;
        }

        .home-socials {
          height: 50vmin;
          flex: 1 1;
          flex-direction: column;
        }
      }
      .home-avatar-parent {
        top: var(--actionbar-height);
        left: 0;
        position: sticky;

        margin: 2rem;
        margin-right: 0;

        height: calc(100% - 4rem);
        max-height: 50rem;
        width: 45%;
        max-width: 40rem;

        flex-grow: 2 2;
        justify-content: flex-end;
        border-radius: 2rem;
        overflow: hidden;
        background: linear-gradient(180deg, #00000000 0%, #00000066 100%);

        .home-avatar {
          justify-content: flex-end;

          & > img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            flex-grow: unset;
            object-position: top;
          }
        }
      }
    }
  }
</style>
