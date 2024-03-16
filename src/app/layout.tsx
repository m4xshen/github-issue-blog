import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavbarWrapper from '@/components/NavbarWrapper';
import Footer from '@/components/Footer';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: process.env.BLOG_TITLE,
  description: process.env.BLOG_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-background scrollbar-hide`}
      >
        <Providers>
          <NavbarWrapper />
          <div className="px-5 py-10">{children}</div>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
