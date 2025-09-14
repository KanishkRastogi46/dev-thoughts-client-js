import { useMutation } from '@tanstack/react-query';
import { authRoutes } from 'api/api-routes';
import { api } from 'api/axios.config';
import type { IOtp } from 'utils/types/auth.type';

export const useOtpMuatation = () => {
  return useMutation({
    mutationKey: ['auth', 'otp'],
    mutationFn: (data: IOtp) =>
      api.post(authRoutes.verifyOtp, data, {
        headers: {
          'x-user-id': localStorage.getItem('userid') || '',
        },
      }),
  });
};
