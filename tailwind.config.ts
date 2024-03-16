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
        dark: {
          colors: {
            background: '#121212',
            primary: {
              DEFAULT: '#ffffff',
              foreground: '#121212',
            },
            focus: '#ffffff',
          },
        },
      },
    }),
  ],
};
export default config;
