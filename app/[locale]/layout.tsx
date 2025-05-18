import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import VortexEffect from '@/components/shared/VortexEffect';
import FitnessIconSystem from '@/components/shared/FitnessIconSystem';
import InstagramIcon from '@/components/ui/InstagramIcon';
import { NextIntlClientProvider } from 'next-intl';
import { getTranslations } from '@/lib/utils';
import { locales } from '@/lib/i18n-config';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const translations = await getTranslations(params.locale);
  
  return {
    title: {
      default: translations.meta?.title || 'SMfit - Antrenamente Personalizate & Nutriție',
      template: translations.meta?.titleTemplate || '%s | SMfit',
    },
    description: translations.meta?.description || 'Transformă-ți corpul cu SMfit: antrenamente personalizate online sau live și planuri nutriționale adaptate nevoilor tale.',
    metadataBase: new URL('https://smfit.ro'),
    alternates: {
      canonical: '/',
      languages: {
        'ro': `https://smfit.ro/ro`,
        'en': `https://smfit.ro/en`,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: 'website',
      locale: params.locale === 'en' ? 'en_US' : 'ro_RO',
      url: 'https://smfit.ro',
      title: translations.meta?.title || 'SMfit - Antrenamente Personalizate & Nutriție',
      description: translations.meta?.description || 'Transformă-ți corpul cu SMfit: antrenamente personalizate online sau live și planuri nutriționale adaptate nevoilor tale.',
      siteName: 'SMfit',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getTranslations(params.locale);

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Header />
            <main className="flex-grow relative">
              {children}
            </main>
            <Footer />
            <Toaster />
            <Analytics />
            <VortexEffect excludeHomepageHero={true} />
            <FitnessIconSystem />
            <InstagramIcon />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}