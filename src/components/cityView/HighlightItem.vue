<template>
  <div class="card">
    <div class="card-header">
      <div class="header-title">{{ title }}</div>
      <div class="header-icon">
        <img :src="`/assets/images/${icon}`" :alt="`${title}-icon`" />
      </div>
    </div>
    <div class="card-value">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
    icon: string;
  }>();
</script>

<style scoped>
  @import '@/assets/styles/cityView/highlight-card.css';
</style>
