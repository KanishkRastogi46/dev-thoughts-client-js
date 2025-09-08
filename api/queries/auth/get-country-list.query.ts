import { useQuery } from '@tanstack/react-query';
import { api } from 'api/axios.config';

export const useGetCountryList = async () => {
  return useQuery({
    queryKey: ['country-list'],
    queryFn: async () => {
      const response = await api.get('/auth/countries');
      return response.data;
    },
    select: (data: { id: number; name: string; code: number }[]) => data,
  });
};
