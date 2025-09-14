import { useQuery } from '@tanstack/react-query';
import { profileRoutes } from 'api/api-routes';
import { api } from 'api/axios.config';

export const useGetProfileQuery = (id: string | number) => {
  return useQuery({
    queryKey: ['profile', id],
    queryFn: async () => {
      const { data } = await api.get(`${profileRoutes.getProfile}/${id}`);
      return data;
    },
    enabled: !!id,
  });
};
