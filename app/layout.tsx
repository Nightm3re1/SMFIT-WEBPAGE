import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/toaster';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from '@/lib/utils';

// Load Inter with fallback and retry mechanism
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  // Add fallback to ensure fonts fail gracefully
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  // Adjust display behavior to reduce flickers
  display: 'swap',
  // Enable preloading of font files during build
  preload: true,
  // Adjust loading strategy
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: 'SMfit - Antrenamente Personalizate & Nutriție',
  description: 'Transformă-ți corpul cu SMfit: antrenamente personalizate online sau live și planuri nutriționale adaptate nevoilor tale.',
  metadataBase: new URL('https://smfit.ro'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://smfit.ro',
    title: 'SMfit - Antrenamente Personalizate & Nutriție',
    description: 'Transformă-ți corpul cu SMfit: antrenamente personalizate online sau live și planuri nutriționale adaptate nevoilor tale.',
    siteName: 'SMfit',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get default locale translations for the root layout
  const messages = await getTranslations('ro');

  return (
    <html lang="ro" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Fallback stylesheet link in case dynamic loading fails */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          media="print"
          onLoad="this.media='all'"
        />
      </head>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <NextIntlClientProvider locale="ro" messages={messages}>
          {children}
          <Toaster />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}