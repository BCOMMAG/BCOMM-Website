export type Locale = "pt" | "en" | "es" | "fr";

export const locales: Locale[] = ["pt", "en", "es", "fr"];
export const defaultLocale: Locale = "pt";

export interface NavItemDict {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface Dictionary {
  locale: Locale;
  nav: {
    services: string;
    allServices: string;
    websites: string;
    ecommerce: string;
    automation: string;
    linkBio: string;
    centralLinks: string;
    prices: string;
    about: string;
    aboutUs: string;
    howWeWork: string;
    cases: string;
    contact: string;
    requestProposal: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    titlePrefix: string;
    typingWords: [string, string, string];
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badges: [string, string, string];
  };
  solutions: {
    tag: string;
    title: string;
    subtitle: string;
    centerTitle: string;
    centerSubtitle: string;
    items: Array<{
      title: string;
      description: string;
      cta: string;
      ctaHref: string;
    }>;
  };
  about: {
    tag: string;
    title: string;
    subtitle: string;
    ctaButton: string;
    cards: Array<{
      id: string;
      tag: string;
      title: string;
      hook: string;
      benefit: string;
      metricNumber: string;
      metricLabel: string;
    }>;
  };
  process: {
    tag: string;
    title: string;
    subtitle: string;
    steps: Array<{
      number: string;
      title: string;
      description: string;
      detail: string;
    }>;
  };
  aiArchitecture: {
    tag: string;
    title: string;
    subtitle: string;
    pillars: Array<{
      tag: string;
      title: string;
      description: string;
      detail: string;
    }>;
  };
  cases: {
    tag: string;
    title: string;
    subtitle: string;
    items: Array<{
      metric: string;
      service: string;
      label: string;
      description: string;
      client: string;
    }>;
  };
  faq: {
    tag: string;
    title: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contact: {
    tag: string;
    statusOnline: string;
    title: string;
    subtitle: string;
    whatsappLabel: string;
    emailLabel: string;
    socialLabel: string;
    form: {
      step1: string;
      step2: string;
      step3: string;
      services: string[];
      namePlaceholder: string;
      msgPlaceholder: string;
      submitButton: string;
      emailButton: string;
      errorName: string;
      errorMsg: string;
    };
  };
  pricingPage: {
    badge: string;
    title: string;
    subtitle: string;
    loading: string;
    cardBadgePopular: string;
    commercialModel: string;
    immediateService: string;
    customQuote: string;
    customQuoteDesc: string;
    includedTitle: string;
    deliverablesTitle: string;
    ctaWhatsapp: string;
    ctaEmail: string;
    tableTag: string;
    tableTitle: string;
    tableSubtitle: string;
    tableCol1: string;
    tableCol2: string;
    tableCol3: string;
    tableCol4: string;
    faqTag: string;
    faqTitle: string;
    bannerTitle: string;
    bannerDesc: string;
    bannerCtaWhatsapp: string;
    bannerCtaForm: string;
  };
  footer: {
    copyright: string;
    websites: string;
    ecommerce: string;
    automation: string;
    linkBio: string;
    prices: string;
    centralLinks: string;
    contact: string;
  };
}
