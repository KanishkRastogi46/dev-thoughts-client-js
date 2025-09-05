import React from 'react';
import type { Route } from '../register/+types/page';
import { Register } from 'components/auth/Register';

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Register' },
    { name: 'description', content: 'Register page' },
  ];
}

export default function Page(): React.JSX.Element {
  return (
    <>
      <Register />
    </>
  );
}
