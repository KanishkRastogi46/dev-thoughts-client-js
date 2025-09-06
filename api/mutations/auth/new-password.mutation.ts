import { useMutation } from '@tanstack/react-query';
import { api } from 'api/axios.config';
import type { IResetPassword } from 'utils/types/auth.type';

export const useResetPasswordMuatation = () => {
  return useMutation({
    mutationKey: ['auth', 'register'],
    mutationFn: (data: IResetPassword) => api.post('/auth/new-password', data),
  });
};
