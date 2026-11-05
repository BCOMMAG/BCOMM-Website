import { Dictionary } from "./types";

export const en: Dictionary = {
  locale: "en",
  nav: {
    services: "Services",
    allServices: "All Services",
    websites: "Websites & Landing Pages",
    ecommerce: "E-commerce",
    automation: "AI Automation",
    linkBio: "Instagram Bio Link",
    centralLinks: "Link Hub (Bio)",
    prices: "Solutions & Plans",
    about: "About",
    aboutUs: "About BCOMM",
    howWeWork: "How We Work",
    cases: "Cases",
    contact: "Contact",
    requestProposal: "Get a Quote",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  hero: {
    titlePrefix: "Technology that ",
    typingWords: [
      "multiplies your sales",
      "scales your operations",
      "automates your business",
    ],
    description:
      "We engineer instant-loading websites and 24/7 AI-driven assistants on WhatsApp and web to acquire clients, close deals, and cut operational costs for your business worldwide.",
    ctaPrimary: "Request a Proposal",
    ctaSecondary: "Explore Solutions",
    badges: [
      "INSTANT MOBILE LOAD TIME",
      "ACTIVE 24/7 CUSTOMER CARE",
      "FOCUS ON FINANCIAL ROI",
    ],
  },
  solutions: {
    tag: "Digital Solutions",
    title: "What BCOMM builds for your business",
    subtitle:
      "We build complete ecosystems to elevate your company with unmatched authority, speed, and conversion power.",
    centerTitle: "High-Performance Infrastructure",
    centerSubtitle: "Websites, E-commerce & Autonomous AI Agents",
    items: [
      {
        title: "Websites & Landing Pages",
        description:
          "Modern, ultra-fast sites designed to turn visitors into paying clients. Bespoke design, top-tier performance, and technical SEO.",
        cta: "See how it works",
        ctaHref: "/servicos/websites",
      },
      {
        title: "High-Converting Landing Pages",
        description:
          "Result-oriented sales pages: lead capture, product launches, and ad campaigns. Copywriting, design, and data working in unison.",
        cta: "See examples",
        ctaHref: "/servicos/websites",
      },
      {
        title: "Custom E-commerce",
        description:
          "Online stores built to scale. Catalog, checkout, multi-currency payments, and order tracking integrated into a tailor-made platform.",
        cta: "Explore e-commerce",
        ctaHref: "/servicos/ecommerce",
      },
      {
        title: "AI Automation",
        description:
          "Intelligent AI agents that automate repetitive workflows, reduce human errors, and free your team to focus on strategic growth.",
        cta: "Explore automation",
        ctaHref: "/servicos/automacao",
      },
    ],
  },
  about: {
    tag: "Who We Are & Why BCOMM",
    title: "Software engineering focused directly on your bottom line",
    subtitle:
      "We don't build generic, static pages. We create revenue-generating digital tools that drive measurable profit.",
    ctaButton: "Start your project",
    cards: [
      {
        id: "speed",
        tag: "Real Speed",
        title: "Instant loading that never loses a customer",
        hook: "If your website takes more than 3 seconds to open, you are throwing ad spend away.",
        benefit:
          "Engineered with Next.js and Global Edge CDN. When someone clicks your link or ad, the page opens instantly.",
        metricNumber: "< 0.8s",
        metricLabel: "Average load time globally",
      },
      {
        id: "design",
        tag: "Visual Authority",
        title: "Bespoke design that communicates premium value",
        hook: "Amateur brands look amateur before the client even finishes reading the headline.",
        benefit:
          "Exclusive UI/UX tailored specifically for your brand. No bloated templates that freeze your customer's phone.",
        metricNumber: "100%",
        metricLabel: "Proprietary custom design",
      },
      {
        id: "automation",
        tag: "24/7 Active AI",
        title: "Instant WhatsApp & Web response with zero queues",
        hook: "While your competitors take hours to reply, your company qualifies and closes the lead on the spot.",
        benefit:
          "AI agents trained on your specific products and services to qualify leads, answer inquiries, and schedule calls around the clock.",
        metricNumber: "24/7",
        metricLabel: "Real-time automated availability",
      },
      {
        id: "linkbio",
        tag: "Proprietary Bio Link",
        title: "Social media links without third-party branding",
        hook: "Stop paying monthly fees for slow bio-link tools that slap their own logos on your profile.",
        benefit:
          "A sleek, blazing-fast bio link page hosted on your custom domain, free of external fees and without artificial limits.",
        metricNumber: "0 Fees",
        metricLabel: "No intermediaries or third-party ads",
      },
      {
        id: "conversion",
        tag: "ROI Driven",
        title: "Architecture crafted to generate profit",
        hook: "A website that doesn't sell is just an expense. We build active client acquisition engines.",
        benefit:
          "Persuasive copywriting, strategically placed CTAs, and zero-friction forms designed to maximize conversions.",
        metricNumber: "+180%",
        metricLabel: "Average conversion lift",
      },
    ],
  },
  process: {
    tag: "Agile Methodology",
    title: "How we transform your digital presence",
    subtitle:
      "A clear, predictable, and transparent process from strategic diagnosis to ongoing operational support.",
    steps: [
      {
        number: "01",
        title: "Strategic Diagnosis",
        description:
          "We map your business goals, competitors, and commercial bottlenecks to define the exact technical architecture.",
        detail: "Scope alignment",
      },
      {
        number: "02",
        title: "Design & Engineering",
        description:
          "We create custom UI designs and high-performance code, avoiding generic templates or slow builders.",
        detail: "Next.js + Tailwind",
      },
      {
        number: "03",
        title: "Integration & Automation",
        description:
          "We connect WhatsApp, payment gateways, CRM/ERP platforms, and intelligent AI agents.",
        detail: "Smart workflows",
      },
      {
        number: "04",
        title: "Global Deploy & Support",
        description:
          "Worldwide launch on ultra-fast Edge CDN with 24/7 monitoring and continuous technical evolution.",
        detail: "Edge CDN & SSL",
      },
    ],
  },
  aiArchitecture: {
    tag: "Artificial Intelligence",
    title: "How AI works for your business",
    subtitle:
      "Far beyond rigid, robotic chatbots: a truly intelligent assistant integrated into your everyday workflow that solves issues and drives actual sales.",
    pillars: [
      {
        tag: "24/7 CUSTOMER CARE",
        title: "Active Support & Lead Qualification",
        description:
          "Answers complex questions, qualifies leads based on your ICP, and schedules meetings autonomously.",
        detail: "WhatsApp & Web",
      },
      {
        tag: "INTERNAL AUTOMATION",
        title: "Data Processing & Workflows",
        description:
          "Eliminates repetitive manual entry, syncs spreadsheets with CRMs, and delivers automated executive reports.",
        detail: "Hours saved daily",
      },
      {
        tag: "SCALABILITY",
        title: "Unlimited Concurrent Capacity",
        description:
          "Handle 10 or 10,000 inquiries at the same time with uniform speed and precision, without inflating payroll.",
        detail: "Zero bottlenecks",
      },
    ],
  },
  cases: {
    tag: "Real Results",
    title: "Proven metrics that validate our impact",
    subtitle:
      "Businesses that partnered with BCOMM to revolutionize their digital presence with software and AI.",
    items: [
      {
        metric: "+240%",
        service: "Website + Bio Link",
        label: "Increase in qualified inbound leads",
        description:
          "Complete redesign of digital infrastructure with instant mobile opening and direct WhatsApp CTAs.",
        client: "Integrated Medical Clinic / São Paulo",
      },
      {
        metric: "-65%",
        service: "AI Automation",
        label: "Reduction in client response times",
        description:
          "Deployment of a customized intelligent assistant on WhatsApp to handle inquiries and bookings 24/7.",
        client: "B2B Management Consulting / Curitiba",
      },
      {
        metric: "3.2x",
        service: "Custom E-commerce",
        label: "Growth in online direct revenue",
        description:
          "Migration from a sluggish shared platform to a bespoke Next.js store with frictionless checkout.",
        client: "Fashion & Retail Brand / Rio de Janeiro",
      },
    ],
  },
  faq: {
    tag: "Frequently Asked Questions",
    title: "Frequently Asked Questions",
    items: [
      {
        question: "How long does it take to develop and launch a project?",
        answer:
          "High-converting landing pages are typically delivered within 5 to 10 business days. Full institutional websites take 2 to 4 weeks on average. Custom e-commerce platforms and AI automation projects follow an agile schedule defined after the initial discovery phase.",
      },
      {
        question: "How does support work for international clients outside Brazil?",
        answer:
          "We serve clients globally via 100% digital, frictionless communication. Our team offers dedicated support via WhatsApp and official corporate email, with multi-currency payment options available for your convenience.",
      },
      {
        question: "How does AI automation work for companies?",
        answer:
          "We engineer autonomous AI agents and intelligent chatbots integrated directly into your existing channels (WhatsApp, CRM, ERP, and email). They qualify leads, answer customer questions 24/7 with human-like accuracy, and automate repetitive tasks, saving up to 73% in response time.",
      },
      {
        question: "Is the website pre-optimized for Google (SEO and AI Search)?",
        answer:
          "Yes! Every BCOMM project is built with Next.js, ultra-fast server rendering, structured data (Schema.org / JSON-LD), social OpenGraph tags, and AI search indexing standards (llms.txt), guaranteeing maximum visibility on Google, ChatGPT, Perplexity, and Gemini.",
      },
    ],
  },
  contact: {
    tag: "Direct Contact",
    statusOnline: "SYSTEM ONLINE • 24/7 IMMEDIATE RESPONSE",
    title: "Request a Proposal",
    subtitle:
      "No waiting days for a sales response. Our smart channels process your request immediately and direct your project with clear scope and milestones.",
    whatsappLabel: "Direct WhatsApp",
    emailLabel: "Official E-mail",
    socialLabel: "Social Networks",
    form: {
      step1: "1. Select the desired solution",
      step2: "2. Your name or company",
      step3: "3. Project details",
      services: [
        "Website + Instagram Bio Link",
        "Custom E-commerce + Bio Link",
        "Custom Systems & AI Automation",
        "Other Custom Project",
      ],
      namePlaceholder: "Full name or company name",
      msgPlaceholder: "Describe your goals, requirements, or questions regarding the project.",
      submitButton: "Start Inquiry on WhatsApp",
      emailButton: "Or send request via E-mail",
      errorName: "Name is required (max 100 characters)",
      errorMsg: "Message is required (max 500 characters)",
    },
  },
  pricingPage: {
    badge: "BCOMM Deliverables & Scopes",
    title: "Tailor-made solutions to establish and scale your business",
    subtitle:
      "Explore our delivery models: Website + Bio Link for brand authority, Custom E-commerce for direct selling, or Custom AI Systems for maximum operational efficiency.",
    loading: "Loading solutions and deliverables...",
    cardBadgePopular: "MOST POPULAR",
    commercialModel: "Commercial Model",
    immediateService: "Immediate Response",
    customQuote: "Custom Quote",
    customQuoteDesc: "Scope and pricing tailored to the exact requirements, integrations, and currency of your business.",
    includedTitle: "What is included:",
    deliverablesTitle: "Core Deliverables",
    ctaWhatsapp: "Request on WhatsApp",
    ctaEmail: "Or request via E-mail",
    tableTag: "Scope Transparency",
    tableTitle: "Feature & Deliverables Comparison",
    tableSubtitle: "Review exactly what each technical structure delivers for your operations.",
    tableCol1: "Capability / Feature",
    tableCol2: "Website + Bio Link",
    tableCol3: "E-commerce + Bio Link",
    tableCol4: "Custom Systems & AI",
    faqTag: "Frequently Asked Questions",
    faqTitle: "Questions about Scopes & Inquiries",
    bannerTitle: "Need technical guidance before deciding?",
    bannerDesc:
      "Our engineering team will analyze your business objectives and recommend the ideal combination between website, e-commerce, or autonomous AI agents.",
    bannerCtaWhatsapp: "Talk to a Specialist on WhatsApp",
    bannerCtaForm: "Fill Out Contact Form",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} BCOMM Comunicação Inteligente. All rights reserved.`,
    websites: "Websites",
    ecommerce: "E-commerce",
    automation: "AI Automation",
    linkBio: "Bio Link",
    prices: "Solutions & Plans",
    centralLinks: "Link Hub",
    contact: "Contact",
  },
};
