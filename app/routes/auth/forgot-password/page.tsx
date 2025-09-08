import React from 'react';
import type { Route } from '../forgot-password/+types/page';
import { ForgetPassword } from 'components/auth/ForgotPassword';

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Forgot Password' },
    { name: 'description', content: 'Forgot Password page' },
  ];
}

export default function Page(): React.JSX.Element {
  return (
    <>
      <ForgetPassword />
    </>
  );
}
