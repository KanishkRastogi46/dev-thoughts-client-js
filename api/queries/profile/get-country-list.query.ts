import { useQuery } from '@tanstack/react-query';
import { profileRoutes } from 'api/api-routes';
import { api } from 'api/axios.config';

export interface ICountry {
  id: number;
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
}

export const useGetCountryList = () => {
  return useQuery({
    queryKey: ['profile', 'country-list'],
    queryFn: async () => {
      const response = await api.get(profileRoutes.countryList);
      return response.data;
    },
    select: (data: ICountry[]) => data,
  });
};
