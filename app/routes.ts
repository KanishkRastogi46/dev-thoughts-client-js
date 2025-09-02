import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),

  route('auth', 'routes/auth/layout.tsx', [
    route('login', 'routes/auth/login/page.tsx'),
    route('register', 'routes/auth/register/page.tsx'),
    route('otp', 'routes/auth/otp/page.tsx'),
    route('forgot-password', 'routes/auth/forgot-password/page.tsx'),
  ]),
] satisfies RouteConfig;
