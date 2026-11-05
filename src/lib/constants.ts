export const colors = {
  voidBlack: "#000000",
  graphite: "#292d30",
  white: "#ffffff",
  bone: "#f0f0f0",
  ash: "#a1a4a5",
  smoke: "#abafb4",
  iron: "#6e727a",
  charcoal: "#464a4d",
  iris: "#9281f7",
  irisGlow: "#baa7ff",
  signal: "#3b9eff",
  sky: "#70b8ff",
  pulse: "#3ad389",
  alarm: "#ff9592",
  crimson: "#ff6465",
  amber: "#ffca16",
  amberGlow: "#ffd60a",
  surfaceLift: "#0b0e14",
} as const;

export const typography = {
  display: {
    size: "text-[48px] sm:text-[64px] md:text-[77px] lg:text-[96px]",
    weight: "font-normal",
    leading: "leading-[1]",
    tracking: "tracking-[-0.01em]",
    font: "font-playfair",
  },
  heading: {
    size: "text-[36px] sm:text-[44px] md:text-[56px]",
    weight: "font-normal",
    leading: "leading-[1.2]",
    tracking: "tracking-[-0.05em]",
  },
  "heading-sm": {
    size: "text-[20px] sm:text-[24px]",
    weight: "font-medium",
    leading: "leading-[1.5]",
  },
  subheading: {
    size: "text-[20px]",
    weight: "font-normal",
    leading: "leading-[1]",
  },
  body: {
    size: "text-[16px]",
    weight: "font-normal",
    leading: "leading-[1.5]",
  },
  "body-sm": {
    size: "text-[14px]",
    weight: "font-normal",
    leading: "leading-[1.43]",
  },
  caption: {
    size: "text-[12px]",
    weight: "font-normal",
    leading: "leading-[1.33]",
  },
} as const;

export const radii = {
  md: "6px",
  lg: "10px",
  "2xl": "16px",
  "3xl": "24px",
  pill: "9999px",
} as const;

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const nav: NavItem[] = [
  {
    label: "Serviços",
    href: "/#servicos",
    children: [
      { label: "Todos os Serviços", href: "/servicos" },
      { label: "Websites & Landing Pages", href: "/servicos/websites" },
      { label: "E-commerce", href: "/servicos/ecommerce" },
      { label: "Automação com IA", href: "/servicos/automacao" },
      { label: "Link Bio Instagram", href: "/servicos/link-bio" },
      { label: "Central de Links (Bio)", href: "/links" },
    ],
  },
  { label: "Preços", href: "/precos" },
  {
    label: "Sobre",
    href: "/#sobre",
    children: [
      { label: "Sobre a BCOMM", href: "/#sobre" },
      { label: "Como Trabalhamos", href: "/#processo" },
    ],
  },
  { label: "Cases", href: "/#cases" },
  { label: "Contato", href: "/#contato" },
];

export const solutions = [
  {
    title: "Websites Institucionais",
    description:
      "Sites modernos, rápidos e feitos para converter visitantes em clientes. Design sob medida, performance e SEO.",
    variant: "automation",
    cta: "Ver como funciona",
    ctaHref: "/servicos/websites",
  },
  {
    title: "Landing Pages de Alta Conversão",
    description:
      "Páginas com foco em resultado: captação de leads, lançamentos e campanhas. Copy, design e dados trabalhando juntos.",
    variant: "integration",
    cta: "Ver exemplos",
    ctaHref: "/servicos/websites",
  },
  {
    title: "E-commerce Personalizado",
    description:
      "Lojas virtuais que crescem com o negócio. Catálogo, checkout, pagamentos e gestão integrados em uma plataforma sob medida.",
    variant: "support",
    cta: "Conhecer e-commerce",
    ctaHref: "/servicos/ecommerce",
  },
  {
    title: "Automação com IA",
    description:
      "Agentes inteligentes que automatizam tarefas repetitivas, reduzem erros e liberam seu time para o que importa.",
    variant: "saas",
    cta: "Ver automação",
    ctaHref: "/servicos/automacao",
  },
] as const;

export const allServices = [
  {
    slug: "websites",
    title: "Websites & Landing Pages",
    shortTitle: "Websites",
    description:
      "Websites institucionais e landing pages que convertem. Design moderno, performance boa e SEO técnico.",
    features: [
      "Design responsivo sob medida",
      "Otimização para mecanismos de busca (SEO)",
      "Performance otimizada (Core Web Vitals)",
      "Formulários de contato integrados",
      "Integração com analytics e pixels de rastreamento",
      "CMS para atualização de conteúdo",
    ],
    cta: "Solicitar orçamento",
    ctaHref: "/#contato",
  },
  {
    slug: "ecommerce",
    title: "E-commerce Personalizado",
    shortTitle: "E-commerce",
    description:
      "Lojas virtuais que crescem com o negócio. Catálogo de produtos, checkout simples, gateway de pagamento e gestão de pedidos, tudo junto.",
    features: [
      "Catálogo de produtos com filtros e busca",
      "Checkout otimizado para alta conversão",
      "Integração com gateways de pagamento (Stripe, PagSeguro, Mercado Pago)",
      "Gestão de estoque e pedidos em tempo real",
      "Painel administrativo completo",
      "Integração com WhatsApp e e-mail marketing",
    ],
    cta: "Criar minha loja",
    ctaHref: "/#contato",
  },
  {
    slug: "automacao",
    title: "Automação com IA",
    shortTitle: "Automação",
    description:
      "Agentes inteligentes que fazem o trabalho repetitivo. Reduzem erros, aceleram processos e liberam o time para tarefas mais estratégicas.",
    features: [
      "Chatbots e assistentes virtuais com IA",
      "Automação de processos internos (RPA + IA)",
      "Integração com CRMs e ERPs existentes",
      "Análise preditiva e tomada de decisão",
      "Redução de custos operacionais mensurável",
      "Monitoramento e otimização contínua",
    ],
    cta: "Ver como funciona",
    ctaHref: "/#contato",
  },
  {
    slug: "integracoes",
    title: "Integrações de Sistemas",
    shortTitle: "Integrações",
    description:
      "Conecta seus sistemas, APIs e ferramentas em um fluxo só. Dados fluindo entre departamentos sem atrito.",
    features: [
      "Integração entre ERP, CRM e ferramentas internas",
      "APIs customizadas para comunicação entre sistemas",
      "Sincronização de dados em tempo real",
      "Pipelines de dados automatizados",
      "Monitoramento de integrações em tempo real",
      "Documentação técnica completa",
    ],
    cta: "Conheça as integrações",
    ctaHref: "/#contato",
  },
  {
    slug: "atendimento",
    title: "Atendimento Inteligente",
    shortTitle: "Atendimento",
    description:
      "Chatbots e canais de suporte que resolvem, aprendem e crescem com o volume, sem perder a qualidade humana.",
    features: [
      "Chatbots multicanal (WhatsApp, web, Telegram)",
      "Resolução automática de dúvidas frequentes",
      "Escalação inteligente para atendentes humanos",
      "Análise de sentimento em tempo real",
      "Base de conhecimento autoaprendiz",
      "Relatórios de performance do atendimento",
    ],
    cta: "Ver demo",
    ctaHref: "/#contato",
  },
  {
    slug: "link-bio",
    title: "Link Bio Instagram",
    shortTitle: "Link Bio",
    description:
      "Página de links personalizada para bio do Instagram e redes sociais. Design exclusivo alinhado com sua marca, links organizados e alta performance.",
    features: [
      "Design exclusivo com identidade visual própria",
      "Links organizados por categoria e prioridade",
      "Integração com WhatsApp, Instagram e e-mail",
      "Analytics de cliques e conversão",
      "Otimizado para abertura instantânea no celular",
      "Sem marcas de terceiros ou limitações de planos",
    ],
    cta: "Saiba mais",
    ctaHref: "/servicos/link-bio",
  },
] as const;

export const differentials = [
  {
    number: "01",
    title: "Código Proprietário & Velocidade",
    description:
      "Sem templates lentos de WordPress ou Wix. Engenharia de ponta em Next.js com carregamento sub-segundo e deploy em Edge Global.",
  },
  {
    number: "02",
    title: "Inteligência Artificial Integrada",
    description:
      "Não criamos apenas telas estáticas. Integramos agentes autônomos de IA aos seus canais e bancos de dados para atender e converter 24/7.",
  },
  {
    number: "03",
    title: "Foco em Resultados Mensuráveis",
    description:
      "Cada linha de código e estrutura visual é desenhada para gerar tração: redução de custos operacionais e aumento real na taxa de conversão.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Diagnóstico & Escopo (48h)",
    description:
      "Mapeamos o fluxo do seu negócio, identificamos os principais gargalos operacionais e traçamos o plano de ação exato.",
  },
  {
    step: "02",
    title: "Arquitetura & Design",
    description:
      "Desenhamos interfaces de alta conversão e arquitetamos o fluxo de dados com segurança, escalabilidade e conformidade.",
  },
  {
    step: "03",
    title: "Engenharia & Integrações",
    description:
      "Desenvolvemos a plataforma em Next.js e conectamos seus agentes de IA, CRMs e gateways em ciclos ágeis de entrega.",
  },
  {
    step: "04",
    title: "Go-Live & Suporte Ativo",
    description:
      "Homologação rigorosa, publicação global e monitoramento contínuo de métricas para garantir que a solução performe sempre.",
  },
] as const;

export const cases = [
  {
    metric: "73%",
    label: "Redução no tempo de atendimento",
    description:
      "Automação que transformou o fluxo de suporte de um operador logístico. De 12 minutos para 3 minutos por atendimento.",
    client: "Operador Logístico / LogTech",
    service: "Automação com IA",
  },
  {
    metric: "4x",
    label: "Velocidade na integração de dados",
    description:
      "Pipeline conectando ERP, CRM e ferramentas internas em tempo real. Processos que levavam horas agora levam segundos.",
    client: "Empresa de Varejo / Grupo Norte",
    service: "Integrações de Sistemas",
  },
  {
    metric: "92%",
    label: "Taxa de resolução automática",
    description:
      "Agente de IA que resolve dúvidas técnicas antes de acionar o time humano. Demanda do suporte caiu 85%.",
    client: "Fintech / Portal Financeiro",
    service: "Atendimento Inteligente",
  },
  {
    metric: "3.2x",
    label: "Aumento na taxa de conversão",
    description:
      "Landing page com copy baseada em dados e testes A/B. Leads qualificados triplicaram em 60 dias.",
    client: "Imobiliária / Grupo Vivaz",
    service: "Websites & Landing Pages",
  },
  {
    metric: "180%",
    label: "Crescimento no faturamento online",
    description:
      "E-commerce com checkout otimizado e integração com estoque e WhatsApp. Ticket médio subiu 40%.",
    client: "Loja de Moda / Studio Bella",
    service: "E-commerce",
  },
  {
    metric: "60%",
    label: "Redução de erros operacionais",
    description:
      "Automação de processos financeiros com validação inteligente. Erros manuais eliminados, tempo cortado pela metade.",
    client: "Escritório de Contabilidade / Contábil Express",
    service: "Automação com IA",
  },
] as const;


export const faqItems = [
  {
    question: "Quanto custa para criar um website institucional ou landing page?",
    answer:
      "O investimento varia conforme a complexidade e os recursos necessários (como integrações de CRM, automações ou design exclusivo). Criamos projetos sob medida focados em alta conversão e retorno sobre o investimento (ROI). Entre em contato pelo WhatsApp para receber uma proposta detalhada em poucas horas.",
  },
  {
    question: "Quanto tempo leva para desenvolver e publicar o projeto?",
    answer:
      "Landing pages de alta conversão costumam ser entregues entre 5 a 10 dias úteis. Websites institucionais completos levam em média de 2 a 4 semanas. Lojas virtuais e projetos com automações personalizadas de IA seguem um cronograma ágil definido após a análise inicial.",
  },
  {
    question: "Como funciona a automação com Inteligência Artificial para empresas?",
    answer:
      "Desenvolvemos agentes autônomos de IA e chatbots inteligentes integrados aos seus canais (WhatsApp, CRM, ERP e e-mail). Eles qualificam leads, tiram dúvidas 24/7 de forma humanizada, agendam reuniões e automatizam tarefas operacionais repetitivas, reduzindo até 73% do tempo de atendimento.",
  },
  {
    question: "A BCOMM atende apenas Curitiba ou empresas de todo o Brasil?",
    answer:
      "Nossa sede fica em Curitiba/PR, mas atendemos clientes em todo o território nacional e no exterior. Todo o processo de briefing, aprovação e suporte é realizado de forma ágil e 100% online.",
  },
  {
    question: "O website desenvolvido já vem otimizado para o Google (SEO e IA)?",
    answer:
      "Sim! Todos os nossos websites são construídos com Next.js, arquitetura de carregamento ultrarrápido, dados estruturados (Schema.org / JSON-LD), metadados para redes sociais e protocolos para IAs (llms.txt), garantindo visibilidade máxima no Google, ChatGPT, Perplexity e Gemini.",
  },
];

