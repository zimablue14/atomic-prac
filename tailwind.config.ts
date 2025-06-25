import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#c2e2fb',
          200: '#71bcf7',
          300: '#2196f3',
          400: '#1976d2',
        },
        secondary: {
          100: '#f8bbd0',
          200: '#f06292',
          300: '#e91e63',
          400: '#c2185b',
        },
        danger: {
          100: '#ffcdd2',
          200: '#f8877f',
          300: '#f44336',
          400: '#d32f2f',
        },
        alert: {
          100: '#ffecb3',
          200: '#ffd761',
          300: '#ffc107',
          400: '#ffa000',
        },
        success: {
          100: '#c8e6c9',
          200: '#7cc47f',
          300: '#4caf50',
          400: '#388e3c',
        },
        grayscale: {
          100: '#ffffff',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#616161',
          700: '#414141',
          800: '#212121',
        },
        main: '#070f26',
        sub: '#050a18',
        card: {
          light: '#f5faff',
          dark: '#1e2330',
        },
        header: {
          light: '#f5f7f8',
          dark: 'rgb(15, 25, 50)',
        },
      },
      fontFamily: {
        primary: ['Helvetica Neue', 'Helvetica', 'Roboto', 'sans-serif'],
        pre: ['Consolas', 'Liberation Mono', 'Menlo', 'Courier', 'monospace'],
        quote: ['Georgia', 'serif'],
        display: ['Pretendard', 'sans-serif'],
      },
      spacing: {
        section: '5rem',
      },
      maxWidth: {
        container: '1100px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
