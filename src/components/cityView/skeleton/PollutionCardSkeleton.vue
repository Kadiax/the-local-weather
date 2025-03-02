<template>
  <div class="pollution-card">
    <div class="title">
      <AnimatedPlaceholder width="7rem" />
    </div>
    <AnimatedPlaceholder class="skeleton" width="auto" height="15rem" />
  </div>
</template>
<script setup>
import AnimatedPlaceholder from "@/components/AnimatedPlaceholder.vue";
</script>
<style scoped>
@import "@/assets/styles/cityView/pollution-card.css";
</style>
