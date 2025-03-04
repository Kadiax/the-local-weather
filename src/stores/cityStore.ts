import { defineStore } from 'pinia';
import type { City } from '@/models/City';

export const useCityStore = defineStore('cityStore', {
  state: () => ({
    savedCities: [] as City[]
  }),

  getters: {
    getCities: (state) => state.savedCities,
    isCityExist:
      (state) =>
      (lat: number, lng: number): boolean => {
        return state.savedCities.some((city) => city.coords.lat === lat && city.coords.lng === lng);
      }
  },

  actions: {
    addCity(newCity: City) {
      if (!this.isCityExist(newCity.coords.lat, newCity.coords.lng)) {
        this.savedCities.push(newCity);
      }
    },

    removeCity(cityId: string) {
      this.savedCities = this.savedCities.filter((city) => city.id !== cityId);
    }
  },

  persist: true // Enables persistence with LocalStorage
});
