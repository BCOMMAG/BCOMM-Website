export interface SolutionProduct {
  id: string;
  name: string;
  tagline: string;
  badge?: string | null;
  highlight?: boolean;
  description: string;
  scopeSummary: string;
  features: string[];
  deliverables: string[];
  cta: string;
  whatsappMessage: string;
}

export interface ScopeComparisonRow {
  feature: string;
  website: string | boolean;
  ecommerce: string | boolean;
  customAi: string | boolean;
}

export interface PricingFaqItem {
  q: string;
  a: string;
}

export const solutionProducts: SolutionProduct[] = [
  {
    id: "website-linkbio",
    name: "Website Institucional + Link Bio",
    tagline: "Presença Digital & Conversão Máxima",
    badge: "MAIS PROCURADO",
    highlight: true,
    description:
      "Website moderno e de carregamento ultrarrápido integrado à sua página exclusiva de Link Bio para redes sociais. Autoridade imediata, alta conversão e presença global.",
    scopeSummary: "Estrutura completa para posicionar sua empresa e atrair clientes no Google e Instagram.",
    features: [
      "Website profissional exclusivo (Next.js com carregamento sub-segundo)",
      "Página exclusiva de Link Bio para Instagram e redes sociais (sem marcas de terceiros)",
      "Design 100% responsivo para celular, tablet e computadores",
      "SEO técnico estruturado para indexação no Google e em buscadores de IA",
      "Canais diretos de contato com WhatsApp e formulário de conversão",
      "Infraestrutura de alta velocidade em nuvem global (Edge CDN) com SSL incluso",
      "Acompanhamento técnico, suporte dedicado e pequenas atualizações",
    ],
    deliverables: [
      "Website Institucional completo",
      "Página exclusiva de Link Bio",
      "Configuração de domínio próprio",
      "Indexação no Google Search Console",
      "Suporte técnico contínuo",
    ],
    cta: "Solicitar Orçamento",
    whatsappMessage: "Olá! Gostaria de solicitar uma proposta comercial para o pacote Website Institucional + Link Bio.",
  },
  {
    id: "ecommerce-linkbio",
    name: "E-commerce Sob Medida + Link Bio",
    tagline: "Loja Virtual Própria & Escala Comercial",
    badge: "OPERAÇÃO COMPLETA",
    highlight: false,
    description:
      "Plataforma de e-commerce própria, rápida e sem limitações ou taxas abusivas de ferramentas compartilhadas. Catálogo completo, checkout otimizado e canal integrado com redes sociais.",
    scopeSummary: "Estrutura robusta para vender seus produtos com controle total da operação.",
    features: [
      "Loja virtual desenvolvida sob medida para a sua marca",
      "Página de Link Bio integrada com vitrine dos principais produtos e ofertas",
      "Catálogo de produtos com fotos em alta resolução, busca e categorias",
      "Variações completas por produto (tamanhos, cores, grades e estoque)",
      "Checkout fluido e otimizado para elevar a taxa de conversão",
      "Integrações flexíveis com meios de pagamento (Stripe, Mercado Pago e outros)",
      "Painel administrativo intuitivo para gestão de produtos, pedidos e clientes",
      "Servidor VPS dedicado, banco de dados seguro, SSL e backups automáticos",
    ],
    deliverables: [
      "Loja Virtual Sob Medida",
      "Página de Link Bio integrada",
      "Painel administrativo de controle",
      "Configuração de meios de pagamento",
      "Servidor VPS e backups gerenciados",
    ],
    cta: "Solicitar Orçamento",
    whatsappMessage: "Olá! Gostaria de solicitar uma proposta comercial para o pacote E-commerce Sob Medida + Link Bio.",
  },
  {
    id: "custom-ai",
    name: "Sistemas Customizados & Automação com IA",
    tagline: "Engenharia de Software & Inteligência Operacional",
    badge: "ALTA EFICIÊNCIA",
    highlight: false,
    description:
      "Desenvolvimento de software sob medida, automações operacionais e agentes inteligentes que reduzem custos, eliminam tarefas manuais e escalam processos de negócio.",
    scopeSummary: "Projetos de engenharia sob medida desenhados exatamente para os gargalos da sua operação.",
    features: [
      "Agentes de IA autônomos para qualificação e atendimento 24 horas por dia",
      "Integrações entre ERP, CRM, canais de comunicação e ferramentas internas",
      "Pipelines e fluxos de automação de processos repetitivos (RPA + IA)",
      "Redução comprovada de erros manuais e tempo de processamento de dados",
      "Dashboards gerenciais em tempo real com métricas estratégicas",
      "Arquitetura escalável com APIs customizadas e documentação técnica",
      "Consultoria de tecnologia e acompanhamento contínuo da solução",
    ],
    deliverables: [
      "Diagnóstico e mapeamento de processos",
      "Desenvolvimento e implementação sob medida",
      "Integração com sistemas existentes",
      "Treinamento e documentação técnica",
      "Evolução e suporte contínuo",
    ],
    cta: "Solicitar Orçamento",
    whatsappMessage: "Olá! Gostaria de solicitar uma proposta comercial para Sistemas Customizados e Automação com IA.",
  },
];

export const scopeComparisonRows: ScopeComparisonRow[] = [
  { feature: "Design 100% Exclusivo Sob Medida", website: true, ecommerce: true, customAi: true },
  { feature: "Carregamento Ultrarrápido (Core Web Vitals)", website: true, ecommerce: true, customAi: true },
  { feature: "Página Exclusiva de Link Bio", website: true, ecommerce: true, customAi: "Opcional" },
  { feature: "SEO Técnico & Indexação Global Google", website: true, ecommerce: true, customAi: true },
  { feature: "Integração Direta WhatsApp & E-mail", website: true, ecommerce: true, customAi: true },
  { feature: "Catálogo de Produtos & Carrinho de Compras", website: false, ecommerce: true, customAi: "Sob Medida" },
  { feature: "Checkout Otimizado de Alta Conversão", website: false, ecommerce: true, customAi: "Sob Medida" },
  { feature: "Painel Administrativo para Gestão", website: "CMS Básico", ecommerce: "Admin Completo", customAi: "Dashboard Avançado" },
  { feature: "Integração com Meios de Pagamento Globais", website: false, ecommerce: true, customAi: "Sob Medida" },
  { feature: "Agentes Autônomos de IA & Chatbots 24/7", website: "Sob Consulta", ecommerce: "Sob Consulta", customAi: true },
  { feature: "Integrações Customizadas (ERP, CRM, APIs)", website: "Sob Consulta", ecommerce: "Sob Consulta", customAi: true },
  { feature: "Hospedagem em Nuvem Global & Suporte Técnico", website: true, ecommerce: true, customAi: true },
];

export const scopeFaq: PricingFaqItem[] = [
  {
    q: "Como funciona a precificação dos projetos sem valores fixos no site?",
    a: "Como atendemos clientes em diversos países e com operações de portes variados, cada projeto possui escopo, moedas de pagamento e integrações específicas. Elaboramos uma proposta comercial personalizada e transparente em poucas horas após você nos enviar suas necessidades via WhatsApp ou e-mail.",
  },
  {
    q: "O que está incluído no pacote Website Institucional + Link Bio?",
    a: "Você recebe um website moderno, veloz e sob medida em Next.js com páginas estratégicas, otimizado para o Google e para IAs, além de uma página de Link Bio exclusiva para o Instagram, sem taxas recorrentes de ferramentas terceiras e com a identidade visual da sua empresa.",
  },
  {
    q: "Qual a diferença do E-commerce Sob Medida para plataformas genéricas?",
    a: "Diferente de plataformas prontas que cobram comissões por venda e sofrem com lentidão, criamos uma loja virtual rápida, de código próprio, com catálogo, variações de produto, painel administrativo e checkout sem atrito, além de integração com redes sociais.",
  },
  {
    q: "Como contratar se minha empresa está fora do Brasil?",
    a: "Atendemos clientes internacionais globalmente. Nossos canais de atendimento estão prontos para suporte em múltiplos idiomas e trabalhamos com métodos de pagamento internacionais para sua comodidade. Entre em contato pelo WhatsApp ou envie um e-mail para contato@agent-bcomm.space.",
  },
  {
    q: "Como funcionam a hospedagem e a manutenção contínua?",
    a: "Oferecemos acompanhamento técnico contínuo que cobre infraestrutura de alta velocidade (Cloud Edge e servidores dedicados), certificados de segurança SSL, backups diários, monitoramento e pequenas atualizações para garantir que sua presença online permaneça impecável.",
  },
];
