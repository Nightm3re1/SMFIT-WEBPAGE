import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './lib/i18n-config';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // The default locale to be used when visiting a non-localized route
  defaultLocale,
  // To enable automatic locale detection based on browser preferences
  localeDetection: true,
});

export const config = {
  // Skip all paths that should not be internationalized. This includes
  // folders like `/public` or `/src`, API routes, and files like
  // `favicon.ico` or `robots.txt`
  matcher: ['/((?!api|_next|.*\\..*).*)']
};