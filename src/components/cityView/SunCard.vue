<template>
  <div class="sun-card">
    <div class="day-info-container">
      <div class="day-info">
        <div class="label">{{ $t('CityView.AsyncCityView.SunCard.Sunrisetitle') }}</div>
        <div class="time-info">
          <div class="time">{{ formattedSunrise.time }}</div>
          <div class="period">{{ formattedSunrise.period }}</div>
        </div>
      </div>
      <div class="day-info">
        <div class="label">{{ $t('CityView.AsyncCityView.SunCard.Sunsettitle') }}</div>
        <div class="time-info">
          <div class="time">{{ formattedSunset.time }}</div>
          <div class="period">{{ formattedSunset.period }}</div>
        </div>
      </div>
      <div class="day-info">
        <div class="label">{{ $t('CityView.AsyncCityView.SunCard.LengthofDayTitle') }}</div>
        <div class="time-info">
          <div class="length">{{ formattedDayLength }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import type { WeatherData } from '@/models/WeatherData';

  const props = defineProps<{
    weatherData: WeatherData;
  }>();

  const formatTime = (timestamp?: number) => {
    if (!timestamp) return { time: '--', period: '--' };
    const [time, period] = new Date(timestamp)
      .toLocaleTimeString('en-US', {
        timeStyle: 'short'
      })
      .split(' ');
    return { time, period };
  };

  const formattedSunrise = computed(() => formatTime(props.weatherData?.sys?.sunrise));
  const formattedSunset = computed(() => formatTime(props.weatherData?.sys?.sunset));
  const formattedDayLength = computed(() => props.weatherData?.sys?.dayLength || '--');
</script>

<style scoped>
  @import '@/assets/styles/cityView/sun-card.css';
</style>
