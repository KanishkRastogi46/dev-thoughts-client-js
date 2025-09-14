import { useMutation } from '@tanstack/react-query';
import { authRoutes } from 'api/api-routes';
import { api } from 'api/axios.config';
import type { ILogin } from 'utils/types/auth.type';

export const useLoginMuatation = () => {
  return useMutation({
    mutationKey: ['auth', 'login'],
    mutationFn: async (data: ILogin) => await api.post(authRoutes.login, data),
  });
};
