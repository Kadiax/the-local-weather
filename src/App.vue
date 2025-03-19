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
  @import '@/assets/styles/main.css';
</style>
