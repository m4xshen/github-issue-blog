import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  plugins: [
    require('@tailwindcss/typography'),
    nextui({
      themes: {
        light: {
          colors: {
            background: '#ffffff',
            primary: {
              DEFAULT: '#171717',
              500: '#171717a0',
              foreground: '#ffffff',
            },
            secondary: {
              DEFAULT: '#17171730',
            },
            focus: '#171717',
          },
        },
        dark: {
          colors: {
            background: '#171717',
            primary: {
              DEFAULT: '#ffffff',
              500: '#ffffffa0',
              foreground: '#171717',
            },
            secondary: {
              DEFAULT: '#ffffff30',
            },
            focus: '#ffffff',
          },
        },
      },
    }),
  ],
};
export default config;
