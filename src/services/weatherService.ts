import type { WeatherData } from '@/models/WeatherData';
import axios from 'axios';

export const fetchWeather = async (lat: number, lon: number): Promise<WeatherData> => {
  const response = await axios.get('/api/weather/', {
    params: {
      lat,
      lon
    }
  });
  return response.data;
};

export const fetchAllWeatherData = async (lat: number, lon: number) => {
  const response = await axios.get('/api/weather/all', {
    params: {
      lat,
      lon
    }
  });
  return response.data;
};
