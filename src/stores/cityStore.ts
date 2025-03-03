import { defineStore } from 'pinia';

interface City {
  id: string;
  state: string;
  city: string;
  coords: {
    lat: number;
    lng: number;
  };
}

export const useCityStore = defineStore('cityStore', {
  state: () => ({
    savedCities: [] as City[]
  }),

  getters: {
    getCities: (state) => state.savedCities
  },

  actions: {
    addCity(newCity: City) {
      this.savedCities.push(newCity);
    },

    removeCity(cityId: string) {
      this.savedCities = this.savedCities.filter((city) => city.id !== cityId);
    }
  },

  persist: true // Enables persistence with LocalStorage
});
