<template>
  <div class="hourly-card">
    <div class="title">Hourly Weather (5 days)</div>
    <div class="weather-cards">
      <div
        class="weather-card"
        v-for="hour in weatherData?.hours || []"
        :key="hour.dt"
      >
        <div class="weather-details">
          <div class="weather-time">
            {{ formatDate(hour.currentTime) }}<br />
            {{ formatTime(hour.currentTime) }}
          </div>
          <img
            class="weather-icon"
            :src="weatherIconUrl(hour?.weather?.[0]?.icon)"
            alt="Weather Icon"
          />
          <div class="weather-temp">
            {{ roundedTemperature(hour?.main?.temp) }}&deg;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { roundedTemperature } from "@/helpers/roundedTemperature";
import { weatherIconUrl } from "@/helpers/weatherIconUrl";

interface WeatherData {
  dt: number;
  currentTime: number;
  main: {
    temp: number;
  };
  weather: {
    icon: string;
  }[];
}

const props = defineProps<{
  weatherData: {
    hours?: WeatherData[];
  };
}>();

const hourlyWeather = computed(() => props.weatherData?.hours || []);

const formatDate = (timestamp?: number): string =>
  timestamp
    ? new Date(timestamp).toLocaleDateString("en-US", {
        weekday: "short",
        day: "2-digit",
        month: "short",
      })
    : "--";

const formatTime = (timestamp?: number): string =>
  timestamp
    ? new Date(timestamp).toLocaleTimeString("en-US", {
        hour: "numeric",
      })
    : "--";
</script>

<style scoped>
@import "@/assets/styles/cityView/hourly-card.css";
</style>
