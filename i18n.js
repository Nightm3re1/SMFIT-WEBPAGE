import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './lib/i18n-config';

export default getRequestConfig(async ({ locale }) => {
  // Load messages for the requested locale
  const messages = (await import(`./messages/${locale}.json`)).default;

  return {
    messages,
    locale,
    defaultLocale,
    timeZone: 'Europe/Bucharest',
    now: new Date(),
  };
});