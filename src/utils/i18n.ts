// Dictionary of translations for the website
export type Locale = 'en' | 'es' | 'ca' | 'fr' | 'de';

export const defaultLocale: Locale = 'en';
export const supportedLocales: Locale[] = ['en', 'es', 'ca', 'fr', 'de'];

// Define the translation dictionaries
export const translations = {
  // Navigation
  'nav.services': {
    en: 'Services',
    es: 'Servicios',
    ca: 'Serveis',
    fr: 'Services',
    de: 'Dienstleistungen',
  },
  'nav.industries': {
    en: 'Industries',
    es: 'Industrias',
    ca: 'Indústries',
    fr: 'Industries',
    de: 'Branchen',
  },
  'nav.blog': {
    en: 'Blog',
    es: 'Blog',
    ca: 'Blog',
    fr: 'Blog',
    de: 'Blog',
  },
  'nav.contact': {
    en: 'Contact Us',
    es: 'Contáctenos',
    ca: 'Contacteu-nos',
    fr: 'Contactez-nous',
    de: 'Kontakt',
  },
  
  // Hero section
  'hero.title': {
    en: 'Professional Translation Services for Global Business',
    es: 'Servicios Profesionales de Traducción para Negocios Globales',
    ca: 'Serveis Professionals de Traducció per a Negocis Globals',
    fr: 'Services Professionnels de Traduction pour les Entreprises Mondiales',
    de: 'Professionelle Übersetzungsdienstleistungen für globale Unternehmen',
  },
  'hero.subtitle': {
    en: 'Connect with your international audience through precise, culturally nuanced translations in over 100 languages.',
    es: 'Conecte con su audiencia internacional a través de traducciones precisas y culturalmente adecuadas en más de 100 idiomas.',
    ca: 'Connecteu amb la vostra audiència internacional mitjançant traduccions precises i culturalment adequades en més de 100 idiomes.',
    fr: 'Connectez-vous avec votre public international grâce à des traductions précises et culturellement nuancées dans plus de 100 langues.',
    de: 'Erreichen Sie Ihr internationales Publikum durch präzise, kulturell nuancierte Übersetzungen in über 100 Sprachen.',
  },
  
  // Common buttons
  'button.explore': {
    en: 'Explore Services',
    es: 'Explorar Servicios',
    ca: 'Explorar Serveis',
    fr: 'Explorer les Services',
    de: 'Dienste erkunden',
  },
  'button.contact': {
    en: 'Get in Touch',
    es: 'Contactar',
    ca: 'Contactar',
    fr: 'Nous contacter',
    de: 'Kontakt',
  },
  'button.learnMore': {
    en: 'Learn More',
    es: 'Más Información',
    ca: 'Més Informació',
    fr: 'En Savoir Plus',
    de: 'Mehr erfahren',
  },
  
  // Features section
  'features.title': {
    en: 'Premium Translation Features',
    es: 'Características Premium de Traducción',
    ca: 'Característiques Premium de Traducció',
    fr: 'Fonctionnalités de Traduction Premium',
    de: 'Premium-Übersetzungsfunktionen',
  },
  'features.subtitle': {
    en: 'Our professional translation services combine human expertise and cutting-edge technology to deliver exceptional results.',
    es: 'Nuestros servicios profesionales de traducción combinan experiencia humana y tecnología de vanguardia para ofrecer resultados excepcionales.',
    ca: 'Els nostres serveis professionals de traducció combinen experiència humana i tecnologia d\'avantguarda per oferir resultats excepcionals.',
    fr: 'Nos services de traduction professionnelle combinent l\'expertise humaine et une technologie de pointe pour offrir des résultats exceptionnels.',
    de: 'Unsere professionellen Übersetzungsdienste kombinieren menschliches Fachwissen und modernste Technologie, um außergewöhnliche Ergebnisse zu liefern.',
  },
};

// Helper function to get a translation
export function getTranslation(key: keyof typeof translations, locale: Locale): string {
  if (!translations[key]) {
    console.warn(`Translation key not found: ${key}`);
    return key;
  }
  
  return translations[key][locale] || translations[key][defaultLocale];
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