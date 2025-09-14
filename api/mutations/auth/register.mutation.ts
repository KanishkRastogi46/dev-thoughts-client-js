import { useMutation } from '@tanstack/react-query';
import { authRoutes } from 'api/api-routes';
import { api } from 'api/axios.config';
import type { IRegister } from 'utils/types/auth.type';

export const useRegisterMuatation = () => {
  return useMutation({
    mutationKey: ['auth', 'register'],
    mutationFn: async (data: IRegister) =>
      await api.post(authRoutes.register, data),
  });
};
