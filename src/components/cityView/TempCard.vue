<template>
  <div class="temp-card">
    <div class="data">
      <div class="weather">
        <div class="location">
          <div class="city-name">{{ city }}</div>
          <div class="date-time">
            {{ formattedDate }} <br />
            {{ formattedTime }}
          </div>
        </div>
        <div class="temperature">
          <div class="temp-details">
            <div class="temp-value">
              {{ roundedTemperature(weatherData?.main?.temp) }}
              <span class="temp-deg">&deg;</span>
              <span class="temp-unit">C</span>
            </div>
            <div class="cloud-icon">
              <img src="@/assets/images/cloud_svgrepo-big.com.svg" alt="cloud" />
            </div>
          </div>
          <div class="high-low">
            High: {{ roundedTemperature(weatherData?.main?.temp_max) }}&deg; Low:
            {{ roundedTemperature(weatherData?.main?.temp_min) }}&deg;
          </div>
        </div>
      </div>
      <div class="icon">
        <img class="weather-icon" :src="weatherIconUrl(weatherData.weather[0].icon)" alt="weather-icon" />
        <div class="description">
          <div class="description-title">
            {{ formattedDescription }}
          </div>
          <div class="feels-like">
            {{ $t('CityView.AsyncCityView.TempCard.description') }}
            {{ roundedTemperature(weatherData?.main?.feels_like) }}
          </div>
        </div>
      </div>
    </div>
    <img class="small-cloud-icon" src="@/assets/images/cloud_svgrepo.com.svg" alt="cloud" />
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { capitalize } from '@/helpers/capitalize';
  import { roundedTemperature } from '@/helpers/roundedTemperature';
  import { weatherIconUrl } from '@/helpers/weatherIconUrl';

  const props = defineProps({
    city: {
      type: String,
      default: ''
    },
    weatherData: {
      type: Object,
      default: () => ({})
    }
  });

  // Computed properties for date and time formatting
  const formattedDate = computed(() => {
    return props.weatherData?.currentTime
      ? new Date(props.weatherData.currentTime).toLocaleDateString('en-US', {
          weekday: 'short',
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      : '--';
  });

  const formattedTime = computed(() => {
    return props.weatherData?.currentTime
      ? new Date(props.weatherData.currentTime).toLocaleTimeString('en-US', {
          timeStyle: 'short'
        })
      : '--';
  });

  // Computed property for capitalized weather description
  const formattedDescription = computed(() => {
    return props.weatherData?.weather?.[0]?.description ? capitalize(props.weatherData.weather[0].description) : '--';
  });
</script>

<style scoped>
  @import '@/assets/styles/cityView/temp-card.css';
</style>
