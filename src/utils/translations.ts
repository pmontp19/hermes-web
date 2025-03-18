import { type Locale } from './i18n';

// Define the translation structure with categories
export interface PageTranslations {
  // Meta information
  meta: {
    title: string;
    description: string;
  };
  // Content for main pages
  pages: {
    home: {
      heroTitle: string;
      heroSubtitle: string;
      exploreServices: string;
      getInTouch: string;
    };
    services: {
      pageTitle: string;
      pageSubtitle: string;
      learnMore: string;
    };
    industries: {
      pageTitle: string;
      pageSubtitle: string;
    };
    blog: {
      pageTitle: string;
      pageSubtitle: string;
      featuredArticle: string;
      exploreTopics: string;
      latestArticles: string;
      subscribeNewsletter: string;
      subscribeText: string;
      yourEmail: string;
      subscribe: string;
    };
    legal: {
      pageTitle: string;
      pageSubtitle: string;
      lastUpdated: string;
    };
  };
  // Shared components
  components: {
    features: {
      title: string;
      subtitle: string;
      items: {
        nativeTranslators: {
          title: string;
          description: string;
        };
        qualityAssurance: {
          title: string;
          description: string;
        };
        fastTurnaround: {
          title: string;
          description: string;
        };
        technologyIntegration: {
          title: string;
          description: string;
        };
        privacy: {
          title: string;
          description: string;
        };
        availability: {
          title: string;
          description: string;
        };
      };
    };
    contact: {
      title: string;
      subtitle: string;
      form: {
        name: string;
        email: string;
        subject: string;
        message: string;
        send: string;
      };
    };
    footer: {
      tagline: string;
      quickLinks: string;
      services: string;
      contactInfo: string;
      copyright: string;
      privacyPolicy: string;
      legalMentions: string;
    };
    navigation: {
      services: string;
      industries: string;
      blog: string;
      contact: string;
    };
  };
  // Common buttons and actions
  common: {
    learnMore: string;
    readMore: string;
    viewAll: string;
    backToTop: string;
    loading: string;
    explore: string;
    contact: string;
  };
}

// Create translations for each supported locale
export const translations: Record<Locale, PageTranslations> = {
  // English translations
  en: {
    meta: {
      title: "Context - Professional Translation Services",
      description: "Professional translation and localization services for businesses worldwide. Quality, speed, and privacy guaranteed across 100+ languages.",
    },
    pages: {
      home: {
        heroTitle: "Professional Translation Services for Global Business",
        heroSubtitle: "Connect with your international audience through precise, culturally nuanced translations in over 100 languages.",
        exploreServices: "Explore Services",
        getInTouch: "Get in Touch"
      },
      services: {
        pageTitle: "Our Translation Services",
        pageSubtitle: "Comprehensive translation solutions tailored to your specific needs. Choose from our range of specialized services.",
        learnMore: "Learn more"
      },
      industries: {
        pageTitle: "Industries We Serve",
        pageSubtitle: "Industry-specific translation solutions tailored to your sector's unique requirements and terminology."
      },
      blog: {
        pageTitle: "Context Blog",
        pageSubtitle: "Expert insights, industry trends, and practical advice on translation, localization, and global communication.",
        featuredArticle: "Featured Article",
        exploreTopics: "Explore Topics",
        latestArticles: "Latest Articles",
        subscribeNewsletter: "Subscribe to Our Newsletter",
        subscribeText: "Get the latest insights on translation and localization delivered to your inbox.",
        yourEmail: "Your email address",
        subscribe: "Subscribe"
      },
      legal: {
        pageTitle: "Legal Information",
        pageSubtitle: "Important legal details, policies, and documents related to our services.",
        lastUpdated: "Last updated:"
      }
    },
    components: {
      features: {
        title: "Premium Translation Features",
        subtitle: "Our professional translation services combine human expertise and cutting-edge technology to deliver exceptional results.",
        items: {
          nativeTranslators: {
            title: "Native Translators",
            description: "All translations are handled by professionals who are native speakers with subject matter expertise in your industry."
          },
          qualityAssurance: {
            title: "Quality Assurance",
            description: "Rigorous quality control with multiple review stages ensures accuracy and consistency in every project."
          },
          fastTurnaround: {
            title: "Fast Turnaround",
            description: "Efficient processes and dedicated project managers ensure on-time delivery even for urgent translation needs."
          },
          technologyIntegration: {
            title: "Technology Integration",
            description: "Advanced translation tools and AI capabilities enhance consistency and efficiency while reducing costs."
          },
          privacy: {
            title: "Privacy",
            description: "Your documents are in safe hands. We adhere to strict confidentiality agreements and employ the latest in security technology."
          },
          availability: {
            title: "24/7 Availability",
            description: "Round-the-clock support and project management to accommodate different time zones and urgent requests."
          }
        }
      },
      contact: {
        title: "Contact Us",
        subtitle: "Have questions or ready to start your translation project? Get in touch with our team.",
        form: {
          name: "Name",
          email: "Email",
          subject: "Subject",
          message: "Message",
          send: "Send Message"
        }
      },
      footer: {
        tagline: "Breaking language barriers and connecting worlds with professional translation services.",
        quickLinks: "Quick Links",
        services: "Our Services",
        contactInfo: "Contact Info",
        copyright: "All rights reserved.",
        privacyPolicy: "Privacy Policy",
        legalMentions: "Legal Mentions"
      },
      navigation: {
        services: "Services",
        industries: "Industries",
        blog: "Blog",
        contact: "Contact Us"
      }
    },
    common: {
      learnMore: "Learn More",
      readMore: "Read More",
      viewAll: "View All",
      backToTop: "Back to Top",
      loading: "Loading...",
      explore: "Explore",
      contact: "Contact"
    }
  },

  // Spanish translations
  es: {
    meta: {
      title: "Context - Servicios Profesionales de Traducción",
      description: "Servicios profesionales de traducción y localización para empresas en todo el mundo. Calidad, rapidez y privacidad garantizadas en más de 100 idiomas.",
    },
    pages: {
      home: {
        heroTitle: "Servicios Profesionales de Traducción para Negocios Globales",
        heroSubtitle: "Conecte con su audiencia internacional a través de traducciones precisas y culturalmente adecuadas en más de 100 idiomas.",
        exploreServices: "Explorar Servicios",
        getInTouch: "Contactar"
      },
      services: {
        pageTitle: "Nuestros Servicios de Traducción",
        pageSubtitle: "Soluciones integrales de traducción adaptadas a sus necesidades específicas. Elija entre nuestra gama de servicios especializados.",
        learnMore: "Más información"
      },
      industries: {
        pageTitle: "Industrias que Servimos",
        pageSubtitle: "Soluciones de traducción específicas para cada industria, adaptadas a los requisitos y la terminología únicos de su sector."
      },
      blog: {
        pageTitle: "Blog de Context",
        pageSubtitle: "Conocimientos expertos, tendencias de la industria y consejos prácticos sobre traducción, localización y comunicación global.",
        featuredArticle: "Artículo Destacado",
        exploreTopics: "Explorar Temas",
        latestArticles: "Últimos Artículos",
        subscribeNewsletter: "Suscríbase a Nuestro Boletín",
        subscribeText: "Reciba los últimos conocimientos sobre traducción y localización en su bandeja de entrada.",
        yourEmail: "Su dirección de correo electrónico",
        subscribe: "Suscribirse"
      },
      legal: {
        pageTitle: "Información Legal",
        pageSubtitle: "Detalles legales importantes, políticas y documentos relacionados con nuestros servicios.",
        lastUpdated: "Última actualización:"
      }
    },
    components: {
      features: {
        title: "Características Premium de Traducción",
        subtitle: "Nuestros servicios profesionales de traducción combinan experiencia humana y tecnología de vanguardia para ofrecer resultados excepcionales.",
        items: {
          nativeTranslators: {
            title: "Traductores Nativos",
            description: "Todas las traducciones son realizadas por profesionales nativos con experiencia específica en su industria."
          },
          qualityAssurance: {
            title: "Garantía de Calidad",
            description: "Control de calidad riguroso con múltiples etapas de revisión para asegurar precisión y consistencia en cada proyecto."
          },
          fastTurnaround: {
            title: "Entrega Rápida",
            description: "Procesos eficientes y gestores de proyectos dedicados garantizan entregas a tiempo incluso para necesidades urgentes."
          },
          technologyIntegration: {
            title: "Integración Tecnológica",
            description: "Herramientas avanzadas de traducción y capacidades de IA mejoran la consistencia y eficiencia reduciendo costos."
          },
          privacy: {
            title: "Privacidad",
            description: "Sus documentos están en buenas manos. Seguimos acuerdos de confidencialidad estrictos con la última tecnología en seguridad."
          },
          availability: {
            title: "Disponibilidad 24/7",
            description: "Soporte y gestión de proyectos las 24 horas para adaptarse a diferentes zonas horarias y solicitudes urgentes."
          }
        }
      },
      contact: {
        title: "Contáctenos",
        subtitle: "¿Tiene preguntas o está listo para comenzar su proyecto de traducción? Póngase en contacto con nuestro equipo.",
        form: {
          name: "Nombre",
          email: "Correo Electrónico",
          subject: "Asunto",
          message: "Mensaje",
          send: "Enviar Mensaje"
        }
      },
      footer: {
        tagline: "Rompiendo barreras lingüísticas y conectando mundos con servicios profesionales de traducción.",
        quickLinks: "Enlaces Rápidos",
        services: "Nuestros Servicios",
        contactInfo: "Información de Contacto",
        copyright: "Todos los derechos reservados.",
        privacyPolicy: "Política de Privacidad",
        legalMentions: "Menciones Legales"
      },
      navigation: {
        services: "Servicios",
        industries: "Industrias",
        blog: "Blog",
        contact: "Contáctenos"
      }
    },
    common: {
      learnMore: "Más Información",
      readMore: "Leer Más",
      viewAll: "Ver Todo",
      backToTop: "Volver Arriba",
      loading: "Cargando...",
      explore: "Explorar",
      contact: "Contacto"
    }
  },

  // Catalan translations
  ca: {
    meta: {
      title: "Context - Serveis Professionals de Traducció",
      description: "Serveis professionals de traducció i localització per a empreses d'arreu del món. Qualitat, rapidesa i privacitat garantides en més de 100 idiomes.",
    },
    pages: {
      home: {
        heroTitle: "Serveis Professionals de Traducció per a Negocis Globals",
        heroSubtitle: "Connecteu amb la vostra audiència internacional mitjançant traduccions precises i culturalment adequades en més de 100 idiomes.",
        exploreServices: "Explorar Serveis",
        getInTouch: "Contactar"
      },
      services: {
        pageTitle: "Els Nostres Serveis de Traducció",
        pageSubtitle: "Solucions de traducció integrals adaptades a les vostres necessitats específiques. Trieu entre la nostra gamma de serveis especialitzats.",
        learnMore: "Més informació"
      },
      industries: {
        pageTitle: "Indústries que Servim",
        pageSubtitle: "Solucions de traducció específiques per a cada indústria, adaptades als requisits i la terminologia únics del vostre sector."
      },
      blog: {
        pageTitle: "Blog de Context",
        pageSubtitle: "Coneixements experts, tendències de la indústria i consells pràctics sobre traducció, localització i comunicació global.",
        featuredArticle: "Article Destacat",
        exploreTopics: "Explorar Temes",
        latestArticles: "Últims Articles",
        subscribeNewsletter: "Subscriviu-vos al Nostre Butlletí",
        subscribeText: "Rebeu els darrers coneixements sobre traducció i localització a la vostra safata d'entrada.",
        yourEmail: "La vostra adreça de correu electrònic",
        subscribe: "Subscriure's"
      },
      legal: {
        pageTitle: "Informació Legal",
        pageSubtitle: "Detalls legals importants, polítiques i documents relacionats amb els nostres serveis.",
        lastUpdated: "Última actualització:"
      }
    },
    components: {
      features: {
        title: "Característiques Premium de Traducció",
        subtitle: "Els nostres serveis professionals de traducció combinen experiència humana i tecnologia d'avantguarda per oferir resultats excepcionals.",
        items: {
          nativeTranslators: {
            title: "Traductors Nadius",
            description: "Totes les traduccions són realitzades per professionals nadius amb experiència específica en la seva indústria."
          },
          qualityAssurance: {
            title: "Garantia de Qualitat",
            description: "Control de qualitat rigorós amb múltiples etapes de revisió per assegurar precisió i consistència en cada projecte."
          },
          fastTurnaround: {
            title: "Lliurament Ràpid",
            description: "Processos eficients i gestors de projectes dedicats garanteixen lliuraments a temps fins i tot per a necessitats urgents."
          },
          technologyIntegration: {
            title: "Integració Tecnològica",
            description: "Eines avançades de traducció i capacitats d'IA milloren la consistència i eficiència reduint costos."
          },
          privacy: {
            title: "Privacitat",
            description: "Els seus documents estan en bones mans. Seguim acords de confidencialitat estrictes amb la darrera tecnologia en seguretat."
          },
          availability: {
            title: "Disponibilitat 24/7",
            description: "Suport i gestió de projectes les 24 hores per adaptar-se a diferents zones horàries i sol·licituds urgents."
          }
        }
      },
      contact: {
        title: "Contacteu-nos",
        subtitle: "Teniu preguntes o esteu preparat per començar el vostre projecte de traducció? Poseu-vos en contacte amb el nostre equip.",
        form: {
          name: "Nom",
          email: "Correu Electrònic",
          subject: "Assumpte",
          message: "Missatge",
          send: "Enviar Missatge"
        }
      },
      footer: {
        tagline: "Trencant barreres lingüístiques i connectant mons amb serveis professionals de traducció.",
        quickLinks: "Enllaços Ràpids",
        services: "Els Nostres Serveis",
        contactInfo: "Informació de Contacte",
        copyright: "Tots els drets reservats.",
        privacyPolicy: "Política de Privacitat",
        legalMentions: "Mencions Legals"
      },
      navigation: {
        services: "Serveis",
        industries: "Indústries",
        blog: "Blog",
        contact: "Contacteu-nos"
      }
    },
    common: {
      learnMore: "Més Informació",
      readMore: "Llegir Més",
      viewAll: "Veure Tot",
      backToTop: "Tornar Amunt",
      loading: "Carregant...",
      explore: "Explorar",
      contact: "Contacte"
    }
  },

  // French translations
  fr: {
    meta: {
      title: "Context - Services Professionnels de Traduction",
      description: "Services professionnels de traduction et de localisation pour les entreprises du monde entier. Qualité, rapidité et confidentialité garanties dans plus de 100 langues.",
    },
    pages: {
      home: {
        heroTitle: "Services Professionnels de Traduction pour les Entreprises Mondiales",
        heroSubtitle: "Connectez-vous avec votre public international grâce à des traductions précises et culturellement nuancées dans plus de 100 langues.",
        exploreServices: "Explorer les Services",
        getInTouch: "Nous contacter"
      },
      services: {
        pageTitle: "Nos Services de Traduction",
        pageSubtitle: "Des solutions de traduction complètes adaptées à vos besoins spécifiques. Choisissez parmi notre gamme de services spécialisés.",
        learnMore: "En savoir plus"
      },
      industries: {
        pageTitle: "Industries que Nous Servons",
        pageSubtitle: "Solutions de traduction spécifiques à chaque industrie, adaptées aux exigences uniques et à la terminologie de votre secteur."
      },
      blog: {
        pageTitle: "Blog Context",
        pageSubtitle: "Expertise, tendances de l'industrie et conseils pratiques sur la traduction, la localisation et la communication mondiale.",
        featuredArticle: "Article en Vedette",
        exploreTopics: "Explorer les Sujets",
        latestArticles: "Derniers Articles",
        subscribeNewsletter: "Abonnez-vous à Notre Newsletter",
        subscribeText: "Recevez les dernières informations sur la traduction et la localisation directement dans votre boîte de réception.",
        yourEmail: "Votre adresse e-mail",
        subscribe: "S'abonner"
      },
      legal: {
        pageTitle: "Information Juridique",
        pageSubtitle: "Détails juridiques importants, politiques et documents liés à nos services.",
        lastUpdated: "Dernière mise à jour:"
      }
    },
    components: {
      features: {
        title: "Fonctionnalités de Traduction Premium",
        subtitle: "Nos services de traduction professionnelle combinent l'expertise humaine et une technologie de pointe pour offrir des résultats exceptionnels.",
        items: {
          nativeTranslators: {
            title: "Traducteurs Natifs",
            description: "Toutes les traductions sont effectuées par des professionnels de langue maternelle avec une expertise dans votre secteur."
          },
          qualityAssurance: {
            title: "Assurance Qualité",
            description: "Un contrôle de qualité rigoureux avec plusieurs étapes de révision assure précision et cohérence dans chaque projet."
          },
          fastTurnaround: {
            title: "Délais Rapides",
            description: "Des processus efficaces et des chefs de projet dédiés garantissent une livraison à temps, même pour les besoins urgents."
          },
          technologyIntegration: {
            title: "Intégration Technologique",
            description: "Des outils de traduction avancés et des capacités d'IA améliorent la cohérence et l'efficacité tout en réduisant les coûts."
          },
          privacy: {
            title: "Confidentialité",
            description: "Vos documents sont entre de bonnes mains. Nous respectons des accords de confidentialité stricts avec la dernière technologie de sécurité."
          },
          availability: {
            title: "Disponibilité 24/7",
            description: "Support et gestion de projet 24h/24 pour s'adapter aux différents fuseaux horaires et aux demandes urgentes."
          }
        }
      },
      contact: {
        title: "Contactez-nous",
        subtitle: "Des questions ou prêt à démarrer votre projet de traduction ? Contactez notre équipe.",
        form: {
          name: "Nom",
          email: "Email",
          subject: "Sujet",
          message: "Message",
          send: "Envoyer le Message"
        }
      },
      footer: {
        tagline: "Briser les barrières linguistiques et connecter les mondes avec des services de traduction professionnels.",
        quickLinks: "Liens Rapides",
        services: "Nos Services",
        contactInfo: "Coordonnées",
        copyright: "Tous droits réservés.",
        privacyPolicy: "Politique de Confidentialité",
        legalMentions: "Mentions Légales"
      },
      navigation: {
        services: "Services",
        industries: "Industries",
        blog: "Blog",
        contact: "Contactez-nous"
      }
    },
    common: {
      learnMore: "En Savoir Plus",
      readMore: "Lire Plus",
      viewAll: "Voir Tout",
      backToTop: "Retour en Haut",
      loading: "Chargement...",
      explore: "Explorer",
      contact: "Contact"
    }
  },

  // German translations
  de: {
    meta: {
      title: "Context - Professionelle Übersetzungsdienstleistungen",
      description: "Professionelle Übersetzungs- und Lokalisierungsdienste für Unternehmen weltweit. Qualität, Geschwindigkeit und Datenschutz in über 100 Sprachen garantiert.",
    },
    pages: {
      home: {
        heroTitle: "Professionelle Übersetzungsdienstleistungen für globale Unternehmen",
        heroSubtitle: "Erreichen Sie Ihr internationales Publikum durch präzise, kulturell nuancierte Übersetzungen in über 100 Sprachen.",
        exploreServices: "Dienste erkunden",
        getInTouch: "Kontakt"
      },
      services: {
        pageTitle: "Unsere Übersetzungsdienste",
        pageSubtitle: "Umfassende Übersetzungslösungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind. Wählen Sie aus unserer Palette spezialisierter Dienstleistungen.",
        learnMore: "Mehr erfahren"
      },
      industries: {
        pageTitle: "Branchen, die wir bedienen",
        pageSubtitle: "Branchenspezifische Übersetzungslösungen, die auf die einzigartigen Anforderungen und die Terminologie Ihres Sektors zugeschnitten sind."
      },
      blog: {
        pageTitle: "Context Blog",
        pageSubtitle: "Expertenwissen, Branchentrends und praktische Ratschläge zu Übersetzung, Lokalisierung und globaler Kommunikation.",
        featuredArticle: "Empfohlener Artikel",
        exploreTopics: "Themen erkunden",
        latestArticles: "Neueste Artikel",
        subscribeNewsletter: "Abonnieren Sie unseren Newsletter",
        subscribeText: "Erhalten Sie die neuesten Einblicke in Übersetzung und Lokalisierung direkt in Ihren Posteingang.",
        yourEmail: "Ihre E-Mail-Adresse",
        subscribe: "Abonnieren"
      },
      legal: {
        pageTitle: "Rechtliche Informationen",
        pageSubtitle: "Wichtige rechtliche Details, Richtlinien und Dokumente zu unseren Dienstleistungen.",
        lastUpdated: "Zuletzt aktualisiert:"
      }
    },
    components: {
      features: {
        title: "Premium-Übersetzungsfunktionen",
        subtitle: "Unsere professionellen Übersetzungsdienste kombinieren menschliches Fachwissen und modernste Technologie, um außergewöhnliche Ergebnisse zu liefern.",
        items: {
          nativeTranslators: {
            title: "Muttersprachliche Übersetzer",
            description: "Alle Übersetzungen werden von Fachleuten durchgeführt, die Muttersprachler mit Fachwissen in Ihrer Branche sind."
          },
          qualityAssurance: {
            title: "Qualitätssicherung",
            description: "Rigorose Qualitätskontrolle mit mehreren Überprüfungsstufen gewährleistet Genauigkeit und Konsistenz bei jedem Projekt."
          },
          fastTurnaround: {
            title: "Schnelle Bearbeitung",
            description: "Effiziente Prozesse und dedizierte Projektmanager sorgen für pünktliche Lieferung, auch bei dringenden Übersetzungsbedürfnissen."
          },
          technologyIntegration: {
            title: "Technologische Integration",
            description: "Fortschrittliche Übersetzungstools und KI-Fähigkeiten verbessern die Konsistenz und Effizienz bei gleichzeitiger Kostenreduzierung."
          },
          privacy: {
            title: "Datenschutz",
            description: "Ihre Dokumente sind in guten Händen. Wir halten uns an strenge Vertraulichkeitsvereinbarungen und setzen die neueste Sicherheitstechnologie ein."
          },
          availability: {
            title: "24/7 Verfügbarkeit",
            description: "Rund-um-die-Uhr-Support und Projektmanagement, um sich an verschiedene Zeitzonen und dringende Anfragen anzupassen."
          }
        }
      },
      contact: {
        title: "Kontaktieren Sie uns",
        subtitle: "Haben Sie Fragen oder sind Sie bereit, Ihr Übersetzungsprojekt zu starten? Nehmen Sie Kontakt mit unserem Team auf.",
        form: {
          name: "Name",
          email: "E-Mail",
          subject: "Betreff",
          message: "Nachricht",
          send: "Nachricht senden"
        }
      },
      footer: {
        tagline: "Sprachbarrieren überwinden und Welten verbinden mit professionellen Übersetzungsdienstleistungen.",
        quickLinks: "Schnelllinks",
        services: "Unsere Dienstleistungen",
        contactInfo: "Kontaktinformationen",
        copyright: "Alle Rechte vorbehalten.",
        privacyPolicy: "Datenschutzrichtlinie",
        legalMentions: "Rechtliche Hinweise"
      },
      navigation: {
        services: "Dienstleistungen",
        industries: "Branchen",
        blog: "Blog",
        contact: "Kontakt"
      }
    },
    common: {
      learnMore: "Mehr erfahren",
      readMore: "Weiterlesen",
      viewAll: "Alle anzeigen",
      backToTop: "Nach oben",
      loading: "Wird geladen...",
      explore: "Entdecken",
      contact: "Kontakt"
    }
  }
};

// Helper functions to easily access translations
export function getPageTranslation<
  K1 extends keyof PageTranslations,
  K2 extends keyof PageTranslations[K1]
>(section: K1, key: K2, locale: Locale): PageTranslations[K1][K2] {
  return translations[locale][section][key];
}

// Get nested translations with type safety
export function getNestedTranslation<
  K1 extends keyof PageTranslations,
  K2 extends keyof PageTranslations[K1],
  K3 extends keyof PageTranslations[K1][K2]
>(section: K1, subsection: K2, key: K3, locale: Locale): any {
  return translations[locale][section][subsection][key];
}

// Further nested translations (for deeply nested structures)
export function getDeepTranslation<
  K1 extends keyof PageTranslations,
  K2 extends keyof PageTranslations[K1],
  K3 extends keyof PageTranslations[K1][K2],
  K4 extends keyof PageTranslations[K1][K2][K3]
>(section: K1, subsection: K2, category: K3, key: K4, locale: Locale): any {
  return translations[locale][section][subsection][category][key];
}