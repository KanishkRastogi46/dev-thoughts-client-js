import { useMutation } from '@tanstack/react-query';
import { api } from 'api/axios.config';
import { authRoutes } from 'api/api-routes';

export const useResendOtp = () => {
  return useMutation({
    mutationKey: ['auth', 'resend-otp'],
    mutationFn: async () =>
      await api.get(authRoutes.resendOtp, {
        headers: {
          'x-user-id': localStorage.getItem('userid') || '',
        },
      }),
  });
};
