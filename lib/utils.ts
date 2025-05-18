import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';
import { locales, defaultLocale } from './i18n-config';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Save user language preference to a cookie
export function setLanguageCookie(locale: string) {
  Cookies.set('NEXT_LOCALE', locale, { expires: 365, path: '/' });
}

// Get the current language from cookies or default
export function getLanguageCookie() {
  const savedLocale = Cookies.get('NEXT_LOCALE');
  return savedLocale && locales.includes(savedLocale as any) 
    ? savedLocale 
    : defaultLocale;
}

// Get translations
export async function getTranslations(locale: string) {
  try {
    const translations = (await import(`../messages/${locale}.json`)).default;
    return translations;
  } catch (error) {
    console.error(`Could not load translations for locale "${locale}"`, error);
    return {};
  }
}