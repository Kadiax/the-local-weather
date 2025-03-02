<template>
  <div class="saved-cities">
    <CityCardSkeleton />
    <CityCardSkeleton />
    <CityCardSkeleton />
    <CityCardSkeleton />
    <CityCardSkeleton />
    <CityCardSkeleton />
    <CityCardSkeleton />
    <CityCardSkeleton />
  </div>
</template>

<script setup>
import CityCardSkeleton from "@/components/dashboardView/skeleton/CityCardSkeleton.vue";
</script>
<style scoped>
@import "@/assets/styles/dashboardView/city-list.css";
</style>
