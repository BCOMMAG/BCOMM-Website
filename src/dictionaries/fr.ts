import { Dictionary } from "./types";

export const fr: Dictionary = {
  locale: "fr",
  nav: {
    services: "Services",
    allServices: "Tous les Services",
    websites: "Sites Web & Landing Pages",
    ecommerce: "E-commerce",
    automation: "Automatisation IA",
    linkBio: "Lien Bio Instagram",
    centralLinks: "Hub de Liens (Bio)",
    prices: "Solutions & Offres",
    about: "À propos",
    aboutUs: "À propos de BCOMM",
    howWeWork: "Notre Méthode",
    cases: "Cas Clients",
    contact: "Contact",
    requestProposal: "Demander un Devis",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
  },
  hero: {
    titlePrefix: "Une technologie qui ",
    typingWords: [
      "multiplie vos ventes",
      "développe votre activité",
      "automatise vos opérations",
    ],
    description:
      "Nous concevons des sites web à chargement instantané et des assistants d'intelligence artificielle disponibles 24h/24 sur WhatsApp et le web pour convertir vos prospects et réduire vos coûts opérationnels.",
    ctaPrimary: "Demander un Devis",
    ctaSecondary: "Découvrir nos solutions",
    badges: [
      "CHARGEMENT MOBILE INSTANTANÉ",
      "SUPPORT ACTIF 24H/24 ET 7J/7",
      "PRIORITÉ AU RETOUR SUR INVESTISSEMENT",
    ],
  },
  solutions: {
    tag: "Solutions Digitales",
    title: "Ce que BCOMM construit pour votre entreprise",
    subtitle:
      "Nous développons des écosystèmes complets pour offrir à votre entreprise une autorité et des taux de conversion supérieurs.",
    centerTitle: "Infrastructures Haute Performance",
    centerSubtitle: "Sites Web, E-commerce et Agents d'IA Autonomes",
    items: [
      {
        title: "Sites Web & Landing Pages",
        description:
          "Des sites modernes, ultrarapides et conçus pour transformer vos visiteurs en clients fidèles. Design sur mesure et SEO technique.",
        cta: "Voir le fonctionnement",
        ctaHref: "/servicos/websites",
      },
      {
        title: "Landing Pages Haute Conversion",
        description:
          "Des pages orientées résultats : acquisition de leads, lancements et campagnes publicitaires. Copywriting et données intégrés.",
        cta: "Voir des exemples",
        ctaHref: "/servicos/websites",
      },
      {
        title: "E-commerce Personnalisé",
        description:
          "Des boutiques en ligne conçues pour grandir avec votre entreprise. Catalogue, tunnel d'achat optimisé et gestion intégrée.",
        cta: "Découvrir l'e-commerce",
        ctaHref: "/servicos/ecommerce",
      },
      {
        title: "Automatisation avec l'IA",
        description:
          "Des agents intelligents qui prennent en charge les tâches répétitives, éliminent les erreurs et libèrent votre équipe.",
        cta: "Voir l'automatisation",
        ctaHref: "/servicos/automacao",
      },
    ],
  },
  about: {
    tag: "Qui Sommes-Nous & Nos Atouts",
    title: "L'ingénierie logicielle au service direct de votre rentabilité",
    subtitle:
      "Nous ne concevons pas de simples vitrines passives. Nous créons des outils stratégiques qui génèrent du chiffre d'affaires mesurable.",
    ctaButton: "Lancer mon projet",
    cards: [
      {
        id: "speed",
        tag: "Vitesse Réelle",
        title: "Ouverture instantanée qui ne perd aucun client",
        hook: "Si votre site met plus de 3 secondes à charger, vous gaspillez votre budget publicitaire.",
        benefit:
          "Développé avec Next.js et un CDN mondial. Dès que l'utilisateur clique sur votre lien, la page s'affiche sans délai.",
        metricNumber: "< 0.8s",
        metricLabel: "Temps de chargement moyen",
      },
      {
        id: "design",
        tag: "Autorité Visuelle",
        title: "Un design sur mesure reflétant votre standing",
        hook: "Les entreprises sans identité claire perdent la confiance des clients dès le premier coup d'œil.",
        benefit:
          "Création graphique 100% exclusive adaptée à votre image de marque. Zéro template lourd ou générique.",
        metricNumber: "100%",
        metricLabel: "Design propriétaire et exclusif",
      },
      {
        id: "automation",
        tag: "IA Active 24h/24",
        title: "Réponse immédiate sur WhatsApp sans attente",
        hook: "Pendant que vos concurrents mettent des heures à répondre, votre entreprise convertit le prospect immédiatement.",
        benefit:
          "Agents d'IA entraînés sur vos offres pour qualifier les demandes, répondre aux questions et planifier des rendez-vous en continu.",
        metricNumber: "24/7",
        metricLabel: "Disponibilité en temps réel",
      },
      {
        id: "linkbio",
        tag: "Lien Bio Propriétaire",
        title: "Votre bio Instagram sans dépendance tierce",
        hook: "Cessez de payer des abonnements mensuels pour des outils tiers qui affichent leur logo sur votre profil.",
        benefit:
          "Une page de liens élégante, ultra-rapide et hébergée sur votre propre domaine, sans frais récurrents ni limites.",
        metricNumber: "0 Frais",
        metricLabel: "Sans intermédiaires ni logos tiers",
      },
      {
        id: "conversion",
        tag: "Orienté ROI",
        title: "Une structure pensée pour générer du profit",
        hook: "Un site web qui ne convertit pas est un centre de coût. Nous construisons des moteurs d'acquisition actifs.",
        benefit:
          "Copywriting persuasif, boutons d'action stratégiques et formulaires fluides pour maximiser chaque interaction.",
        metricNumber: "+180%",
        metricLabel: "Augmentation moyenne des conversions",
      },
    ],
  },
  process: {
    tag: "Méthodologie Agile",
    title: "Comment nous transformons votre présence digitale",
    subtitle:
      "Un processus transparent, prévisible et efficace, du diagnostic initial au suivi technique continu.",
    steps: [
      {
        number: "01",
        title: "Diagnostic Stratégique",
        description:
          "Nous analysons vos objectifs, vos concurrents et vos goulots d'étranglement pour définir l'architecture idéale.",
        detail: "Alignement du périmètre",
      },
      {
        number: "02",
        title: "Design & Ingénierie",
        description:
          "Nous développons des interfaces uniques et un code performant, sans recourir à des solutions lentes.",
        detail: "Next.js + Tailwind",
      },
      {
        number: "03",
        title: "Intégration & Automatisation",
        description:
          "Nous connectons WhatsApp, vos passerelles de paiement, vos CRM/ERP et nos agents d'intelligence artificielle.",
        detail: "Flux intelligents",
      },
      {
        number: "04",
        title: "Déploiement Global & Support",
        description:
          "Mise en production sur un réseau Edge CDN à haute vitesse avec monitoring permanent et évolutions continues.",
        detail: "Edge CDN & SSL",
      },
    ],
  },
  aiArchitecture: {
    tag: "Intelligence Artificielle",
    title: "Comment l'IA s'intègre dans votre entreprise",
    subtitle:
      "Bien au-delà d'un simple chatbot scripté : un véritable assistant intelligent intégré aux opérations de votre entreprise qui résout les problèmes et génère des ventes concrètes.",
    pillars: [
      {
        tag: "SERVICE CLIENT 24/7",
        title: "Assistance & Qualification Active",
        description:
          "Répond aux interrogations fréquentes, qualifie les prospects selon vos critères et planifie des réunions automatiquement.",
        detail: "WhatsApp & Web",
      },
      {
        tag: "AUTOMATISATION INTERNE",
        title: "Traitement de Données & Tâches",
        description:
          "Supprime les tâches manuelles répétitives, synchronise vos données avec vos CRM et produit des rapports réguliers.",
        detail: "Gain de temps précieux",
      },
      {
        tag: "ÉVOLUTIVITÉ",
        title: "Capacité de Traitement Illimitée",
        description:
          "Traitez 10 ou 10 000 demandes simultanément avec la même précision et rapidité, sans alourdir votre masse salariale.",
        detail: "Zéro goulot d'étranglement",
      },
    ],
  },
  cases: {
    tag: "Résultats Éprouvés",
    title: "Des métriques concrètes qui attestent de notre impact",
    subtitle:
      "Des entreprises qui ont fait confiance à BCOMM pour moderniser leur infrastructure avec le logiciel et l'IA.",
    items: [
      {
        metric: "+240%",
        service: "Site Web + Lien Bio",
        label: "Hausse des prospects entrants qualifiés",
        description:
          "Refonte globale de la présence en ligne axée sur un affichage mobile immédiat et un appel direct sur WhatsApp.",
        client: "Clinique Médicale / São Paulo",
      },
      {
        metric: "-65%",
        service: "Automatisation IA",
        label: "Diminution du temps de réponse client",
        description:
          "Déploiement d'un assistant intelligent sur WhatsApp assurant l'assistance et les réservations jour et nuit.",
        client: "Cabinet de Conseil B2B / Curitiba",
      },
      {
        metric: "3.2x",
        service: "E-commerce Sur Mesure",
        label: "Croissance du chiffre d'affaires en ligne",
        description:
          "Migration d'une solution partagée vers une boutique Next.js sur mesure avec catalogue instantané et commande simplifiée.",
        client: "Marque de Prêt-à-Porter / Rio de Janeiro",
      },
    ],
  },
  faq: {
    tag: "Foire Aux Questions",
    title: "Questions Fréquentes",
    items: [
      {
        question: "Combien de temps faut-il pour concevoir et déployer le projet ?",
        answer:
          "Les landing pages haute conversion sont généralement livrées en 5 à 10 jours ouvrés. Les sites institutionnels complets nécessitent entre 2 et 4 semaines. Les e-commerces et projets d'automatisation IA avancés font l'objet d'un planning agile établi après la phase de cadrage.",
      },
      {
        question: "Comment se déroule la collaboration pour les clients à l'international ?",
        answer:
          "Nous accompagnons nos clients à l'international grâce à des échanges 100% digitaux, rapides et sécurisés. Notre équipe assure un suivi direct sur WhatsApp et par e-mail professionnel, avec prise en charge des règlements en devises internationales.",
      },
      {
        question: "Comment fonctionne l'automatisation avec l'IA pour les entreprises ?",
        answer:
          "Nous développons des agents autonomes et des chatbots intégrés à vos outils quotidiens (WhatsApp, CRM, ERP, e-mail). Ils qualifient vos prospects, répondent avec pertinence 24h/24 et automatisent vos procédures internes, réduisant jusqu'à 73% le temps de gestion.",
      },
      {
        question: "Le site est-il optimisé pour Google et les moteurs de recherche IA ?",
        answer:
          "Oui ! Chaque projet BCOMM repose sur Next.js, un rendu serveur ultra-rapide, des données structurées (Schema.org / JSON-LD), des balises OpenGraph et les protocoles d'indexation pour IA (llms.txt), assurant une visibilité optimale sur Google, ChatGPT, Perplexity et Gemini.",
      },
    ],
  },
  contact: {
    tag: "Contact Direct",
    statusOnline: "SYSTÈME EN LIGNE • ASSISTANCE IMMÉDIATE 24/7",
    title: "Demander un Devis",
    subtitle:
      "N'attendez plus des jours pour obtenir un devis commercial. Notre système traite votre demande rapidement et structure votre projet avec clarté.",
    whatsappLabel: "WhatsApp Direct",
    emailLabel: "E-mail Officiel",
    socialLabel: "Réseaux Sociaux",
    form: {
      step1: "1. Sélectionnez la solution souhaitée",
      step2: "2. Votre nom ou société",
      step3: "3. Détails de votre projet",
      services: [
        "Site Web Institutionnel + Lien Bio",
        "E-commerce Sur Mesure + Lien Bio",
        "Systèmes Personnalisés & Automatisation IA",
        "Autre Projet Sur Mesure",
      ],
      namePlaceholder: "Nom complet ou raison sociale",
      msgPlaceholder: "Décrivez vos objectifs, vos besoins ou vos questions sur le projet.",
      submitButton: "Démarrer l'échange sur WhatsApp",
      emailButton: "Ou envoyer la demande par E-mail",
      errorName: "Le nom est obligatoire (max 100 caractères)",
      errorMsg: "Le message est obligatoire (max 500 caractères)",
    },
  },
  pricingPage: {
    badge: "Périmètres de Livraison BCOMM",
    title: "Des solutions sur mesure pour établir et développer votre activité",
    subtitle:
      "Découvrez nos modèles d'intervention : Site Web avec Lien Bio pour votre autorité de marque, E-commerce Sur Mesure pour vos ventes directes, ou Systèmes IA pour maximiser votre efficacité opérationnelle.",
    loading: "Chargement des solutions et périmètres...",
    cardBadgePopular: "LE PLUS DEMANDÉ",
    commercialModel: "Modèle Commercial",
    immediateService: "Assistance Immédiate",
    customQuote: "Devis Personnalisé",
    customQuoteDesc: "Périmètre et proposition tarifaire établis selon les fonctionnalités requises et la devise de votre pays.",
    includedTitle: "Ce qui est inclus :",
    deliverablesTitle: "Livrables Principaux",
    ctaWhatsapp: "Demander sur WhatsApp",
    ctaEmail: "Ou demander par E-mail",
    tableTag: "Transparence & Périmètre",
    tableTitle: "Comparatif des Fonctionnalités & Livrables",
    tableSubtitle: "Découvrez précisément ce que chaque formule apporte au quotidien de votre entreprise.",
    tableCol1: "Capacité / Fonctionnalité",
    tableCol2: "Site Web + Lien Bio",
    tableCol3: "E-commerce + Lien Bio",
    tableCol4: "Systèmes & IA",
    faqTag: "Foire Aux Questions",
    faqTitle: "Questions sur les Modalités & Devis",
    bannerTitle: "Besoin d'une orientation technique avant de vous engager ?",
    bannerDesc:
      "Notre équipe d'ingénierie analyse vos objectifs pour vous conseiller l'assemblage technique idéal entre site web, boutique en ligne ou agents d'IA.",
    bannerCtaWhatsapp: "Échanger avec un Spécialiste sur WhatsApp",
    bannerCtaForm: "Remplir le Formulaire de Contact",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} BCOMM Comunicação Inteligente. Tous droits réservés.`,
    websites: "Sites Web",
    ecommerce: "E-commerce",
    automation: "Automatisation IA",
    linkBio: "Lien Bio",
    prices: "Solutions & Offres",
    centralLinks: "Hub de Liens",
    contact: "Contact",
  },
};
