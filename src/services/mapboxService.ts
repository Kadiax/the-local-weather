import type { LocationSearch } from '@/models/LocationSearch';
import axios from '@/lib/axiosInstance';

export const fetchLocationSearch = async (query: string): Promise<LocationSearch> => {
  const response = await axios.get('/map', {
    params: {
      city: query
    }
  });

  return response.data;
};
