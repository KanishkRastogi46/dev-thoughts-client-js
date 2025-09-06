import { useMutation } from '@tanstack/react-query';
import { api } from 'api/axios.config';
import type { IRegister } from 'utils/types/auth.type';

export const useRegisterMuatation = () => {
  return useMutation({
    mutationKey: ['auth', 'register'],
    mutationFn: (data: IRegister) => api.post('/auth/register', data),
  });
};
