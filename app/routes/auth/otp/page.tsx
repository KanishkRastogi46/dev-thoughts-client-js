import React from 'react';
import type { Route } from '../otp/+types/page';
import { Otp } from 'components/auth/Otp';

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'OTP Verification' },
    { name: 'description', content: 'OTP Verification page' },
  ];
}

export default function Page(): React.JSX.Element {
  return (
    <>
      <Otp />
    </>
  );
}
