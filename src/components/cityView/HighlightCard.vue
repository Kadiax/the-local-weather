<template>
  <div class="highlight-card">
    <div class="title">{{ $t('CityView.AsyncCityView.HighlightCard.title') }}</div>
    <div class="cards">
      <HighlightItem :title="$t('CityView.AsyncCityView.HighlightCard.firstHighlightItem')" icon="pressure-icon.svg">
        <span class="value-number">{{ pressure }}</span>
        <span class="value-unit">hPa</span>
      </HighlightItem>

      <HighlightItem :title="$t('CityView.AsyncCityView.HighlightCard.secondHighlightItem')" icon="aqi.svg">
        <span class="value-number">{{ aqi ?? '--' }}</span>
      </HighlightItem>

      <HighlightItem :title="$t('CityView.AsyncCityView.HighlightCard.thirdHighlightItem')" icon="wind-icon.svg">
        <span class="value-number">{{ windSpeed }}</span>
        <span class="value-unit">m/s</span>
      </HighlightItem>

      <HighlightItem :title="$t('CityView.AsyncCityView.HighlightCard.fourthHighlightItem')" icon="humidity-icon.svg">
        <span class="value-number">{{ humidity }}</span>
        <span class="value-unit">%</span>
      </HighlightItem>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import HighlightItem from '@/components/cityView/HighlightItem.vue';
  import type { WeatherData } from '@/models/WeatherData';

  const props = defineProps<{
    weatherData: WeatherData;
    aqi?: number;
  }>();

  // Computed properties for safe access
  const pressure = computed(() => props.weatherData?.main?.pressure ?? '--');
  const humidity = computed(() => props.weatherData?.main?.humidity ?? '--');
  const windSpeed = computed(() => props.weatherData?.wind?.speed ?? '--');
</script>

<style scoped>
  @import '@/assets/styles/cityView/highlight-card.css';
</style>
