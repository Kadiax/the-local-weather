<template>
  <div class="hourly-card">
    <div class="title">
      <AnimatedPlaceholder width="8rem" />
    </div>
    <div class="weather-cards">
      <div class="weather-card">
        <AnimatedPlaceholder width="40rem" height="7rem" />
      </div>
    </div>
  </div>
</template>
<script setup>
import AnimatedPlaceholder from "@/components/AnimatedPlaceholder.vue";
</script>
<style scoped>
@import "@/assets/styles/cityView/hourly-card.css";
</style>
