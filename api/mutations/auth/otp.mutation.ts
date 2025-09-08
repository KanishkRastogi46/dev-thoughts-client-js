import { useMutation } from '@tanstack/react-query';
import { api } from 'api/axios.config';
import type { IOtp } from 'utils/types/auth.type';

export const useOtpMuatation = () => {
  return useMutation({
    mutationKey: ['auth', 'otp'],
    mutationFn: (data: IOtp) => api.post('/auth/verify-otp', data),
  });
};
