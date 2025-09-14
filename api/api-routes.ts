export const authRoutes = {
  login: '/api/v1/auth/login',
  register: '/api/v1/auth/register',
  forgetPassword: '/api/v1/auth/forgot-password',
  resetPassword: '/api/v1/auth/reset-password',
  verifyOtp: '/api/v1/auth/verify-otp',
  resendOtp: '/api/v1/auth/resend-otp',
  refreshToken: '/api/v1/auth/refresh-token',
  logout: '/api/v1/auth/logout',
};

export const profileRoutes = {
  getProfile: '/api/v1/profile',
  countryList: '/api/v1/profile/country-list',
};
