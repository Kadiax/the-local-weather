<template>
  <div class="temp-card">
    <div class="data">
      <div class="weather">
        <AnimatedPlaceholder width="12rem" height="12rem" />
      </div>
      <div class="icon">
        <AnimatedPlaceholder width="6rem" height="6rem" />
        <div class="description">
          <div class="description-title">
            <AnimatedPlaceholder />
          </div>
          <div class="feels-like">
            <AnimatedPlaceholder />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import AnimatedPlaceholder from "@/components/AnimatedPlaceholder.vue";
</script>
<style scoped>
@import "@/assets/styles/cityView/temp-card.css";
</style>
