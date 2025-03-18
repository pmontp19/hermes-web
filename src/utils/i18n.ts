// Dictionary of translations for the website
export type Locale = 'en' | 'es' | 'ca' | 'fr' | 'de';

export const defaultLocale: Locale = 'en';
export const supportedLocales: Locale[] = ['en', 'es', 'ca', 'fr', 'de'];

// Import the centralized translations
import { translations } from './translations';

// Legacy translation helpers for backward compatibility 
// (so existing components won't break while we transition)
export const legacyTranslations = {
  // Navigation
  'nav.services': {
    en: translations.en.components.navigation.services,
    es: translations.es.components.navigation.services,
    ca: translations.ca.components.navigation.services,
    fr: translations.fr.components.navigation.services,
    de: translations.de.components.navigation.services,
  },
  'nav.industries': {
    en: translations.en.components.navigation.industries,
    es: translations.es.components.navigation.industries,
    ca: translations.ca.components.navigation.industries,
    fr: translations.fr.components.navigation.industries,
    de: translations.de.components.navigation.industries,
  },
  'nav.blog': {
    en: translations.en.components.navigation.blog,
    es: translations.es.components.navigation.blog,
    ca: translations.ca.components.navigation.blog,
    fr: translations.fr.components.navigation.blog,
    de: translations.de.components.navigation.blog,
  },
  'nav.contact': {
    en: translations.en.components.navigation.contact,
    es: translations.es.components.navigation.contact,
    ca: translations.ca.components.navigation.contact,
    fr: translations.fr.components.navigation.contact,
    de: translations.de.components.navigation.contact,
  },
  
  // Hero section
  'hero.title': {
    en: translations.en.pages.home.heroTitle,
    es: translations.es.pages.home.heroTitle,
    ca: translations.ca.pages.home.heroTitle,
    fr: translations.fr.pages.home.heroTitle,
    de: translations.de.pages.home.heroTitle,
  },
  'hero.subtitle': {
    en: translations.en.pages.home.heroSubtitle,
    es: translations.es.pages.home.heroSubtitle,
    ca: translations.ca.pages.home.heroSubtitle,
    fr: translations.fr.pages.home.heroSubtitle,
    de: translations.de.pages.home.heroSubtitle,
  },
  
  // Common buttons
  'button.explore': {
    en: translations.en.pages.home.exploreServices,
    es: translations.es.pages.home.exploreServices,
    ca: translations.ca.pages.home.exploreServices,
    fr: translations.fr.pages.home.exploreServices,
    de: translations.de.pages.home.exploreServices,
  },
  'button.contact': {
    en: translations.en.pages.home.getInTouch,
    es: translations.es.pages.home.getInTouch,
    ca: translations.ca.pages.home.getInTouch,
    fr: translations.fr.pages.home.getInTouch,
    de: translations.de.pages.home.getInTouch,
  },
  'button.learnMore': {
    en: translations.en.common.learnMore,
    es: translations.es.common.learnMore,
    ca: translations.ca.common.learnMore,
    fr: translations.fr.common.learnMore,
    de: translations.de.common.learnMore,
  },
  
  // Features section
  'features.title': {
    en: translations.en.components.features.title,
    es: translations.es.components.features.title,
    ca: translations.ca.components.features.title,
    fr: translations.fr.components.features.title,
    de: translations.de.components.features.title,
  },
  'features.subtitle': {
    en: translations.en.components.features.subtitle,
    es: translations.es.components.features.subtitle,
    ca: translations.ca.components.features.subtitle,
    fr: translations.fr.components.features.subtitle,
    de: translations.de.components.features.subtitle,
  },
};

// Helper function to get a translation (legacy)
export function getTranslation(key: keyof typeof legacyTranslations, locale: Locale): string {
  if (!legacyTranslations[key]) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  
  return legacyTranslations[key][locale] || legacyTranslations[key][defaultLocale];
}

// Helper to determine the locale from the URL
export function getLocaleFromURL(pathname: string): Locale {
  const segment = pathname.split('/')[1];
  return supportedLocales.includes(segment as Locale) 
    ? segment as Locale 
    : defaultLocale;
}

// Helper to format URLs correctly based on locale
export function localizeURL(path: string, locale: Locale): string {
  // Remove leading slash if present for consistency
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // For default locale, don't add the locale prefix
  if (locale === defaultLocale) {
    return `/${cleanPath}`;
  }
  
  // For other locales, add the locale prefix
  return `/${locale}/${cleanPath}`;
}

// Re-export the translation functions from the centralized translations file
export { 
  getPageTranslation,
  getNestedTranslation,
  getDeepTranslation 
} from './translations';