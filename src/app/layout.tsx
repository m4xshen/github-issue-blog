import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavbarWrapper from '@/components/NavbarWrapper';
import Footer from '@/components/Footer';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GitHub Issue Blog',
  description: 'Use GitHub issue as blog.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-background`}
      >
        <Providers>
          <NavbarWrapper />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
