import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AnalyticsProvider } from '@/components/analytics-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Idrissa - Software Engineer',
  description: 'Software engineer focused on building products that matter.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <AnalyticsProvider>{children}</AnalyticsProvider>
      </body>
    </html>
  );
}