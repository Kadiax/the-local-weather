<template>
  <p v-if="hasFetchWeatherError">
    Sorry, there was a problem. The weather data has not been retrieved.
  </p>
  <div v-else class="saved-cities">
    <template v-if="savedCities.length">
      <CityCard
        v-for="city in savedCities"
        :key="city.id"
        :city="city"
        @click="navigateToCity(city)"
      />
    </template>
    <p v-else>
      No locations added. To start tracking a location, search in the field
      above.
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import CityCard from "@/components/dashboardView/CityCard.vue";
import * as WeatherService from "@/services/weatherService";

const router = useRouter();
const savedCities = ref([]);
const hasFetchWeatherError = ref(false);

const fetchSavedCities = async () => {
  const storedCities = localStorage.getItem("savedCities");
  if (!storedCities) return;

  savedCities.value = JSON.parse(storedCities);

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
      weather: weatherDataArray[index],
    }));

    hasFetchWeatherError.value = false;
  } catch (error) {
    console.error("Error fetching saved cities weather:", error);
    hasFetchWeatherError.value = true;
  }
};

const navigateToCity = (city) => {
  router.push({
    name: "cityView",
    params: { state: city.state, city: city.city },
    query: { id: city.id, lat: city.coords.lat, lng: city.coords.lng },
  });
};

await fetchSavedCities();
</script>

<style scoped>
@import "@/assets/styles/dashboardView/city-list.css";
</style>
