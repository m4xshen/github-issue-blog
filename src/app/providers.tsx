'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SWRConfig, SWRConfiguration } from 'swr';

// eslint-disable-next-line import/prefer-default-export
export function Providers({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export function SWRProvider({
  children,
  value,
}: {
  children: React.ReactNode;
  value: SWRConfiguration;
}) {
  return <SWRConfig value={value}>{children}</SWRConfig>;
}
