import { Locale } from '@/app/locales';
import { getRequestConfig } from 'next-intl/server';
 
export default getRequestConfig(async () => {
  const locale: Locale = 'pl';
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});