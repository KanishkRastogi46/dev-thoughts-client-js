import { useMutation } from '@tanstack/react-query';
import { authRoutes } from 'api/api-routes';
import { api } from 'api/axios.config';
import type { IForgotPassword } from 'utils/types/auth.type';

export const useForgetPasswordMuatation = () => {
  return useMutation({
    mutationKey: ['auth', 'forgot-password'],
    mutationFn: (data: IForgotPassword) =>
      api.post(authRoutes.forgetPassword, data),
  });
};
