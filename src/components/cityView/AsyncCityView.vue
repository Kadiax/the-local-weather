<template>
  <p v-if="hasFetchWeatherError">{{ $t('CityView.AsyncCityView.fetchWeatherError') }}</p>
  <div v-else class="overview-content">
    <div class="figures">
      <div class="main">
        <TempCard :city="route.params.city" :weatherData="weatherData" />
        <HourlyCard :forecastData="forecastData" />
        <SunCard :weatherData="weatherData" />
      </div>
      <div class="side">
        <HighlightCard :weatherData="weatherData" :aqi="polluantData?.list?.[0]?.main?.aqi" />
        <PollutionCard :polluantData="polluantData" />
      </div>
    </div>
    <div v-if="cityStore.isCityExist(Number(route.query.lat), Number(route.query.lng))" class="remove-button">
      <button class="button remove" @click="removeCity">
        <i class="fa-solid fa-trash-can"></i>
        <span class="title">{{ $t('common.actions.remove.label') }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useCityStore } from '@/stores/cityStore';
  import TempCard from '@/components/cityView/TempCard.vue';
  import HourlyCard from '@/components/cityView/HourlyCard.vue';
  import SunCard from '@/components/cityView/SunCard.vue';
  import HighlightCard from '@/components/cityView/HighlightCard.vue';
  import PollutionCard from '@/components/cityView/PollutionCard.vue';
  import * as WeatherService from '@/services/weatherService';

  const route = useRoute();
  const router = useRouter();
  const cityStore = useCityStore();

  const weatherData = ref(null);
  const forecastData = ref(null);
  const polluantData = ref(null);

  const hasFetchWeatherError = ref(false);

  const coordinates = computed(() => ({
    lat: route.query.lat,
    lng: route.query.lng
  }));

  // Fetch both weather and air pollution data concurrently
  const fetchData = async () => {
    if (!coordinates.value.lat || !coordinates.value.lng) return;

    try {
      const data = await WeatherService.fetchAllWeatherData(coordinates.value.lat, coordinates.value.lng);

      processWeatherData(data.weather, data.forecast);
      polluantData.value = data.pollution;
      hasFetchWeatherError.value = false;
    } catch {
      hasFetchWeatherError.value = true;
    }
  };

  // Process weather and forecast data
  const processWeatherData = (weather, forecast) => {
    const localOffset = new Date().getTimezoneOffset() * 60000;
    const timezoneOffset = weather.timezone * 1000;

    // Convert timestamp to local time
    weather.currentTime = weather.dt * 1000 + localOffset + timezoneOffset;

    // Process hourly forecast timestamps
    forecast.list.forEach((hour) => {
      hour.currentTime = hour.dt * 1000 + localOffset + timezoneOffset;
    });

    // Process sunrise and sunset times
    weather.sys.sunrise = weather.sys.sunrise * 1000 + localOffset + timezoneOffset;
    weather.sys.sunset = weather.sys.sunset * 1000 + localOffset + timezoneOffset;

    // Compute day length
    weather.sys.dayLength = computed(() => {
      const sunrise = new Date(weather.sys.sunrise);
      const sunset = new Date(weather.sys.sunset);
      const diff = sunset - sunrise;
      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      return `${hours}h ${minutes}m`;
    });

    weatherData.value = weather;
    forecastData.value = forecast;
  };

  // Remove city from local storage
  const removeCity = () => {
    const cityId = route.query.id;
    cityStore.removeCity(cityId);
    router.push({ name: 'dashboard' });
  };

  await fetchData();
</script>

<style scoped>
  @import '@/assets/styles/cityView/async-city-view.css';
</style>
