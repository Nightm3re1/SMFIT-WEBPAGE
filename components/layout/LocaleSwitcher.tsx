"use client";

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next-navigation';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { setLanguageCookie } from '@/lib/utils';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();

  // Function to handle language switching
  const switchLocale = () => {
    const nextLocale = locale === 'ro' ? 'en' : 'ro';
    
    // Save preference in cookie
    setLanguageCookie(nextLocale);
    
    // Get the new path by replacing the current locale if present
    const segments = pathname.split('/');
    const isLocalized = segments[1] === 'ro' || segments[1] === 'en';
    
    let newPath;
    if (isLocalized) {
      segments[1] = nextLocale;
      newPath = segments.join('/');
    } else {
      newPath = `/${nextLocale}${pathname}`;
    }
    
    router.push(newPath);
  };

  return (
    <Button
      onClick={switchLocale}
      variant="ghost"
      size="icon"
      className="rounded-full p-2 text-primary-500 hover:text-primary-600 hover:bg-primary-100/50"
      aria-label={t('navigation.switchLanguage')}
    >
      <Globe className="h-5 w-5" />
      <span className="sr-only">{t('navigation.switchLanguage')}</span>
    </Button>
  );
}