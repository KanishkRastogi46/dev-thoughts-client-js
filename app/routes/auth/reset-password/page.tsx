import React from 'react';
import type { Route } from '../reset-password/+types/page';
import { ResetPassword } from 'components/auth/ResetPassword';

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Reset Password' },
    { name: 'description', content: 'Reset Password page' },
  ];
}

export default function Page(): React.JSX.Element {
  return (
    <>
      <ResetPassword />
    </>
  );
}
