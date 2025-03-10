<template>
  <div class="saved-cities">
    <p v-if="hasFetchWeatherError">{{ $t('DashboardView.CityList.fetchError') }}</p>

    <template v-else>
      <CityCard v-for="city in savedCities" :key="city.id" :city="city" @click="navigateToCity(city)" />
      <p v-if="!savedCities.length" class="no-cities-message">{{ $t('DashboardView.CityList.noCities') }}</p>
    </template>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import CityCard from '@/components/dashboardView/CityCard.vue';
  import * as WeatherService from '@/services/weatherService';
  import { useCityStore } from '@/stores/cityStore';

  const router = useRouter();
  const cityStore = useCityStore();
  const savedCities = ref([]);
  const hasFetchWeatherError = ref(false);

  const fetchSavedCities = async () => {
    const storedCities = cityStore.getCities;
    if (storedCities.length == 0) return;

    savedCities.value = storedCities;

    try {
      // Fetch weather data for all saved cities in parallel
      const weatherPromises = savedCities.value.map((city) => {
        if (!city.coords.lat || !city.coords.lng) return;

        return WeatherService.fetchWeather(city.coords.lat, city.coords.lng);
      });

      const weatherDataArray = await Promise.all(weatherPromises);

      // Simulated delay to prevent UI flickering
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Merge weather data with saved cities
      savedCities.value = savedCities.value.map((city, index) => ({
        ...city,
        weather: weatherDataArray[index]
      }));

      hasFetchWeatherError.value = false;
    } catch (error) {
      console.error('Error fetching saved cities weather:', error);
      hasFetchWeatherError.value = true;
    }
  };

  const navigateToCity = (city) => {
    router.push({
      name: 'cityView',
      params: { state: city.state, city: city.city },
      query: { id: city.id, lat: city.coords.lat, lng: city.coords.lng }
    });
  };

  await fetchSavedCities();
</script>

<style scoped>
  @import '@/assets/styles/dashboardView/city-list.css';
</style>
