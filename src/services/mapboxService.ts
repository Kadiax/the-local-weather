import type { LocationSearch } from '@/models/LocationSearch';
import axios from 'axios';

const MAPBOX_API_URL = 'https://api.mapbox.com/search/geocode/v6/forward';
const MAPBOX_API_KEY = import.meta.env.VITE_MAP_BOX_API_KEY;

export const fetchLocationSearch = async (query: string): Promise<LocationSearch[]> => {
  const response = await axios.get(MAPBOX_API_URL, {
    params: {
      q: query,
      access_token: MAPBOX_API_KEY,
      types: 'place'
    }
  });

  return response.data.features;
};
