<template>
  <div class="card">
    <div class="weather-info">
      <div class="figures">
        <div class="today-temp">
          <AnimatedPlaceholder width="6rem" />
        </div>
      </div>
      <div class="city-name"><AnimatedPlaceholder /></div>
    </div>
    <AnimatedPlaceholder height="3rem" />
  </div>
</template>

<script setup>
import AnimatedPlaceholder from "@/components/AnimatedPlaceholder.vue";
</script>

<style scoped>
@import "@/assets/styles/dashboardView/city-card.css";
</style>
