<template>
  <div class="highlight-card">
    <div class="title">
      <AnimatedPlaceholder width="7rem" />
    </div>
    <div class="cards">
      <div class="card">
        <div class="card-header">
          <div class="header-title">
            <AnimatedPlaceholder />
          </div>
        </div>
        <div class="card-value">
          <AnimatedPlaceholder width="6rem" height="3rem" />
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <div class="header-title">
            <AnimatedPlaceholder />
          </div>
        </div>
        <div class="aqi card-value">
          <AnimatedPlaceholder width="6rem" height="3rem" />
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <div class="header-title">
            <AnimatedPlaceholder />
          </div>
        </div>
        <div class="card-value">
          <AnimatedPlaceholder width="6rem" height="3rem" />
        </div>
      </div>
      <div class="card">
        <div class="card-header">
          <div class="header-title">
            <AnimatedPlaceholder />
          </div>
        </div>
        <div class="humidity card-value">
          <AnimatedPlaceholder width="6rem" height="3rem" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import AnimatedPlaceholder from "@/components/AnimatedPlaceholder.vue";
</script>
<style scoped>
@import "@/assets/styles/cityView/highlight-card.css";
</style>
