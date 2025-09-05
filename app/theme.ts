import { createTheme } from '@mantine/core';
import '@mantine/core/styles.css';

export const theme = createTheme({
  focusRing: 'auto',

  colors: {
    orange: [
      '#fff0e4',
      '#ffe0cf',
      '#fac0a1',
      '#f69e6e',
      '#f28043',
      '#f06e27',
      '#f06418',
      '#d6530c',
      '#bf4906',
      '#a73c00',
    ],
    blue: [
      '#eceefd',
      '#d4d8f6',
      '#a6aef0',
      '#7581eb',
      '#4d5be7',
      '#3643e5',
      '#2a37e5',
      '#202acb',
      '#1925b6',
      '#030724',
    ],
  },
  primaryColor: 'orange',
  primaryShade: { light: 5, dark: 7 },

  fontFamily: 'Electrolize, sans-serif',
  headings: { fontFamily: 'Electrolize, sans-serif' },

  defaultGradient: {
    from: 'orange',
    to: 'red',
    deg: 45,
  },

  cursorType: 'pointer',

  defaultRadius: 'md',

  shadows: {
    xs: '0 1px 3px rgba(0, 0, 0, 0.1)',
    sm: '0 1px 5px rgba(0, 0, 0, 0.1)',
    md: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },

  breakpoints: {
    xs: '25em',
    sm: '36em',
    md: '48em',
    lg: '62em',
    xl: '75em',
    xxl: '90em',
  },
});
