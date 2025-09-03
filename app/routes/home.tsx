import React from 'react';
import type { Route } from './+types/home';
import { Text } from '@mantine/core';

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export default function Home() {
  return (
    <>
      <Text fw={'bold'} size="40px">
        Hello World
      </Text>
    </>
  );
}
