import type { LocationSearch } from '@/models/LocationSearch';
import axios from 'axios';

export const fetchLocationSearch = async (query: string): Promise<LocationSearch> => {
  const response = await axios.get('/api/map', {
    params: {
      city: query
    }
  });

  return response.data;
};
