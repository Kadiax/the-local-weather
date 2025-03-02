<template>
  <div class="wrapper">
    <SiteNavigation />
    <RouterView class="flex-1" v-slot="{ Component }">
      <Transition name="page">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import SiteNavigation from '@/components/SiteNavigation.vue';
</script>

<style>
  .page-enter-active {
    transition: 600ms ease all;
  }

  .page-enter-from {
    opacity: 0;
  }

  /* Colors */

  :root {
    --color-bg-primary: #060c1a; /* Main background color for larger areas */
    --color-bg-secondary: #0e1421; /* Secondary background for cards, sections */
    --color-bg-focus: #162850; /* Secondary text, less emphasis */
    --color-brand-primary: #742bec; /* Brand color, use for buttons, links, accents */
    --color-text-primary: #ffffff; /* Main text color, highly readable */
    --color-text-secondary: #676b73; /* Secondary text, less emphasis */
    --color-text-success: #1bda37;
    --color-text-error: #ef4444;
    --color-text-warning: #eab308;
    --color-text-warning-secondary: #f97316;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
  }

  * {
    margin: 0;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: var(--color-bg-secondary);
    border-radius: 50px;
    width: 158px;
    height: 51px;
    padding: 0px 9px;
    cursor: pointer;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .button:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }

  .button i {
    font-size: 22px;
    color: var(--color-text-primary);
  }

  .title {
    color: var(--color-text-primary);
    font-size: 16px;
    font-family: Inter;
    font-weight: 400;
    word-wrap: break-word;
  }

  .wrapper {
    width: auto;
    height: 100vh;
    margin: 20px;
  }

  /*Page content*/
  .page-content {
    margin-left: 125px;
  }

  .page-content .main-title {
    align-self: flex-start; /* Align the title to the left */
    width: fit-content;
    color: var(--color-text-primary);
    font-size: 40px;
    font-family: Inter;
    font-weight: 700;
    margin-top: 13px;
  }

  /*Tablets*/
  @media (max-width: 1024px) {
    .desktop-nav {
      display: none;
    }

    .page-content .main-title {
      font-size: 30px;
      margin: 20px;
    }
  }

  /*Tablets Laptops Desktops*/
  @media (max-width: 1440px) {
    .wrapper {
      width: auto;
      height: 100vh;
      margin: 0px;
      padding: 0px;
    }

    .page-content {
      margin: 20px;
      margin-top: 20px;
      padding-bottom: 60px;
      justify-self: center;
      width: 90%;
    }
  }

  /*Between Tablets Laptops Desktops*/
  @media (min-width: 1025px) and (max-width: 1440px) {
    .page-content {
      margin-left: 125px;
      padding: 0 70px;
    }

    .desktop-nav {
      margin-left: 20px;
    }
  }

  /*Mobiles*/
  @media (min-width: 360px) and (max-width: 700px) {
    .page-content .main-title {
      margin-left: 19px;
      font-size: 25px;
    }
    .page-content {
      padding: 14px;
    }
  }
</style>
