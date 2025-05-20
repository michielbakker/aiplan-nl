
import nlTranslations from '@/translations/nl.json';
import enTranslations from '@/translations/en.json';

export type TranslationKey = keyof typeof nlTranslations;

export const getTranslation = (language: 'nl' | 'en', key: string) => {
  const translations = language === 'nl' ? nlTranslations : enTranslations;
  
  // Handle nested keys
  const keys = key.split('.');
  let result: any = translations;
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      return key; // Fallback to the key if translation not found
    }
  }
  
  return result;
};
