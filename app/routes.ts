import { type RouteConfig, index, route } from '@react-router/dev/routes';
import * as routes from '../common/constants/routes-def';

export default [
  // home route
  index('routes/home.tsx'),

  // auth routes
  route(routes.auth, 'routes/auth/layout.tsx', [
    route(routes.login, 'routes/auth/login/page.tsx'),
    route(routes.register, 'routes/auth/register/page.tsx'),
    route(routes.otp, 'routes/auth/otp/page.tsx'),
    route(routes.forgotPassword, 'routes/auth/forgot-password/page.tsx'),
  ]),
] satisfies RouteConfig;
