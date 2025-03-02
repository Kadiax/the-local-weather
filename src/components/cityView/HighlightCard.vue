<template>
  <div class="highlight-card">
    <div class="title">Today’s Highlights</div>
    <div class="cards">
      <HighlightItem title="Pressure" icon="pressure-icon.svg">
        <span class="value-number">{{ pressure }}</span>
        <span class="value-unit">hPa</span>
      </HighlightItem>

      <HighlightItem title="Air Quality Index" icon="aqi.svg">
        <span class="value-number">{{ aqi ?? "--" }}</span>
      </HighlightItem>

      <HighlightItem title="Wind Speed" icon="wind-icon.svg">
        <span class="value-number">{{ windSpeed }}</span>
        <span class="value-unit">m/s</span>
      </HighlightItem>

      <HighlightItem title="Humidity" icon="humidity-icon.svg">
        <span class="value-number">{{ humidity }}</span>
        <span class="value-unit">%</span>
      </HighlightItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import HighlightItem from "@/components/cityView/HighlightItem.vue";

interface WeatherMain {
  pressure?: number;
  humidity?: number;
}

interface WeatherWind {
  speed?: number;
}

interface WeatherData {
  main?: WeatherMain;
  wind?: WeatherWind;
}

const props = defineProps<{
  weatherData: WeatherData;
  aqi?: number;
}>();

// Computed properties for safe access
const pressure = computed(() => props.weatherData?.main?.pressure ?? "--");
const humidity = computed(() => props.weatherData?.main?.humidity ?? "--");
const windSpeed = computed(() => props.weatherData?.wind?.speed ?? "--");
</script>

<style scoped>
@import "@/assets/styles/cityView/highlight-card.css";
</style>
