'use client';

import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Toaster, toast } from 'sonner';

export default function ToasterWrapper() {
  const { theme } = useTheme();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const error = searchParams.get('error');
    const success = searchParams.get('success');

    if (error) {
      toast.error(error);
      router.replace(pathname);
    } else if (success) {
      toast.success(success);
      router.replace(pathname);
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
