import { useMutation } from '@tanstack/react-query';
import { api } from 'api/axios.config';
import type { ILogin } from 'utils/types/auth.type';

export const useLoginMuatation = () => {
  return useMutation({
    mutationKey: ['auth', 'login'],
    mutationFn: (data: ILogin) => api.post('/auth/login', data),
  });
};
