<template>
  <div class="overview-content">
    <div class="figures">
      <div class="main">
        <TempCardSkeleton />
        <HourlyCardSkeleton />
        <SunCardSkeleton />
      </div>
      <div class="side">
        <HighlightCardSkeleton />
        <PollutionCardSkeleton />
      </div>
    </div>
  </div>
</template>

<script setup>
import TempCardSkeleton from "@/components/cityView/skeleton/TempCardSkeleton.vue";
import HourlyCardSkeleton from "@/components/cityView/skeleton/HourlyCardSkeleton.vue";
import SunCardSkeleton from "@/components/cityView/skeleton/SunCardSkeleton.vue";
import HighlightCardSkeleton from "@/components/cityView/skeleton/HighlightCardSkeleton.vue";
import PollutionCardSkeleton from "@/components/cityView/skeleton/PollutionCardSkeleton.vue";
</script>

<style scoped>
@import "@/assets/styles/cityView/async-city-view.css";
</style>
