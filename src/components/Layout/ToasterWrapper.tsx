'use client';

import { useTheme } from 'next-themes';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Toaster, toast } from 'sonner';

export default function ToasterWrapper() {
  const { theme } = useTheme();
  const searchParams = useSearchParams();

  useEffect(() => {
    const error = searchParams.get('error');
    const success = searchParams.get('success');

    if (error) {
      toast.error(error);
    } else if (success) {
      toast.success(success);
    }
  }, [searchParams]);

  return (
    <Toaster
      position="bottom-left"
      toastOptions={{
        style: {
          background: theme === 'dark' ? '#171717' : '#ffffff',
          borderColor: theme === 'dark' ? '#ffffff30' : '#17171730',
          color: theme === 'dark' ? '#ffffff' : '#171717',
        },
      }}
    />
  );
}
