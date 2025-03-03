<template>
  <div class="card">
    <div class="weather-info">
      <div class="figures">
        <div class="today-temp">{{ roundedTemperature(city.weather.main.temp) }}&deg;</div>
        <div class="today-high-low">
          H{{ roundedTemperature(city.weather.main.temp_max) }}&deg; L{{
            roundedTemperature(city.weather.main.temp_min)
          }}&deg;
        </div>
      </div>
      <div class="city-name">{{ city.city }}</div>
    </div>
    <img v-if="weatherIconUrl" :src="weatherIconUrl(city.weather.weather[0].icon)" alt="Weather Icon" />
  </div>
</template>

<script setup>
  import { roundedTemperature } from '@/helpers/roundedTemperature';
  import { weatherIconUrl } from '@/helpers/weatherIconUrl';

  defineProps({
    city: {
      type: Object,
      default: () => ({}),
      required: true
    }
  });
</script>

<style scoped>
  @import '@/assets/styles/dashboardView/city-card.css';
</style>
