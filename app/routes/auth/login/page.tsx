import React from 'react';
import type { Route } from '../login/+types/page';
import { Login } from 'components/auth/Login';

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [{ title: 'Login' }, { name: 'description', content: 'Login page' }];
}

export default function Page(): React.JSX.Element {
  return (
    <>
      <Login />
    </>
  );
}
