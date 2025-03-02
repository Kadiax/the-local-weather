import axios from 'axios';

const API_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const API_KEY = import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY;

export const fetchWeather = async (lat: number, lon: number) => {
  const response = await axios.get(`${API_BASE_URL}/weather`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: 'metric'
    }
  });
  return response.data;
};

export const fetchForecast = async (lat: number, lon: number) => {
  const response = await axios.get(`${API_BASE_URL}/forecast`, {
    params: {
      lat,
      lon,
      appid: API_KEY,
      units: 'metric'
    }
  });
  return response.data;
};

export const fetchAirPollution = async (lat: number, lon: number) => {
  const response = await axios.get(`${API_BASE_URL}/air_pollution`, {
    params: {
      lat,
      lon,
      appid: API_KEY
    }
  });
  return response.data;
};

export const fetchAllWeatherData = async (lat: number, lon: number) => {
  const [weather, forecast, pollution] = await Promise.all([
    fetchWeather(lat, lon),
    fetchForecast(lat, lon),
    fetchAirPollution(lat, lon)
  ]);

  return { weather, forecast, pollution };
};
