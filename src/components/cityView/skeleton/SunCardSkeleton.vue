<template>
  <div class="sun-card">
    <div class="day-info-container">
      <div class="day-info">
        <div class="label">
          <AnimatedPlaceholder />
        </div>
        <div class="time-info">
          <AnimatedPlaceholder width="6rem" height="6rem" />
        </div>
      </div>
      <div class="day-info">
        <div class="label"><AnimatedPlaceholder /></div>
        <div class="time-info">
          <AnimatedPlaceholder width="6rem" height="6rem" />
        </div>
      </div>
      <div class="day-info">
        <div class="label">
          <AnimatedPlaceholder />
        </div>
        <div class="time-info">
          <AnimatedPlaceholder width="6rem" height="6rem" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import AnimatedPlaceholder from "@/components/AnimatedPlaceholder.vue";
</script>
<style scoped>
@import "@/assets/styles/cityView/sun-card.css";
</style>
