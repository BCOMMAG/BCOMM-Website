export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface DevelopmentPlan {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  badge?: string | null;
  highlight?: boolean;
  features: string[];
  notIncluded?: string[];
  cta: string;
  whatsappMessage: string;
}

export interface ManagementPlan {
  id: string;
  number: string;
  name: string;
  monthlyPrice: string;
  tagline: string;
  description: string;
  features: string[];
  domainNote?: string | null;
  isPaid: boolean;
  highlight?: boolean;
  badge?: string | null;
  cta: string;
  whatsappMessage: string;
}

export const developmentPlans: DevelopmentPlan[] = [
  {
    id: "essential",
    name: "Essential",
    tagline: "Website Profissional",
    description: "Para quem precisa de um website institucional moderno e veloz para apresentar sua empresa com credibilidade.",
    price: "597",
    badge: null,
    highlight: false,
    features: [
      "Website profissional personalizado",
      "Design responsivo (Celular, Tablet e Desktop)",
      "Estrutura profissional de páginas e seções",
      "Botão de WhatsApp e canais de contato direto",
      "Formulário de contato integrado",
      "Integração com redes sociais",
      "SEO técnico estruturado para o Google",
      "Google Search Console, Sitemap e Robots.txt",
      "Certificado SSL de segurança",
      "Publicação e deploy em Edge Global",
    ],
    notIncluded: ["Página para Link da Bio", "Otimização de Perfil no Google"],
    cta: "Escolher Essential",
    whatsappMessage: "Olá! Gostaria de contratar o plano de desenvolvimento Essential (R$ 597) para o website da minha empresa.",
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "Website + Link da Bio",
    description: "A opção mais escolhida: estrutura completa para converter visitantes em clientes tanto no Google quanto no Instagram.",
    price: "897",
    badge: "MAIS ESCOLHIDO",
    highlight: true,
    features: [
      "Tudo incluído no plano Essential",
      "Página profissional para o Link da Bio no Instagram",
      "Abertura instantânea no celular",
      "Atalhos para WhatsApp, Instagram e Catálogo",
      "Exibição dos principais serviços na bio",
      "Botão de rotas e localização no mapa",
      "Design 100% exclusivo com a sua identidade",
      "Sem marcas d'água de ferramentas terceiras",
    ],
    notIncluded: ["Otimização de Perfil no Google"],
    cta: "Escolher Professional",
    whatsappMessage: "Olá! Gostaria de contratar o plano Professional (R$ 897) com Website + Link da Bio para minha empresa.",
  },
  {
    id: "presenca-digital",
    name: "Presença Digital",
    tagline: "Estrutura Digital Completa",
    description: "O pacote completo para quem quer dominar as buscas locais no Google e construir autoridade máxima na Web.",
    price: "1.297",
    badge: "PACOTE COMPLETO",
    highlight: false,
    features: [
      "Tudo incluído no plano Professional",
      "Otimização do Perfil da Empresa no Google (Google Meu Negócio)",
      "Configuração das informações comerciais e horários",
      "Estruturação de categorias e serviços no Google",
      "Área de atendimento e endereço estratégico",
      "Estrutura básica de SEO local para buscas e Maps",
      "Integração total entre Website + Google + Instagram",
      "Configuração de link para receber avaliações de clientes",
    ],
    notIncluded: [],
    cta: "Escolher Presença Digital",
    whatsappMessage: "Olá! Gostaria de contratar o pacote completo de Presença Digital (R$ 1.297) para minha empresa.",
  },
];

export const managementPlans: ManagementPlan[] = [
  {
    id: "sem-gestao",
    number: "01",
    name: "Sem Gestão",
    monthlyPrice: "0",
    tagline: "Por Conta Própria",
    description: "Você recebe o projeto pronto e publicado e segue por conta própria, sem cobranças ou custos recorrentes.",
    features: [
      "Site entregue e publicado no ar",
      "Acesso e entrega dos arquivos e estrutura",
      "Endereço gratuito incluso: suaempresa.pages.dev",
      "Sem mensalidade (R$ 0/mês)",
      "Sem qualquer fidelidade ou cobrança recorrente",
    ],
    domainNote: "Domínio personalizado: caso você prefira utilizar um endereço próprio (como www.suaempresa.com.br), a contratação e configuração de DNS ficam sob responsabilidade do cliente no plano sem gestão.",
    isPaid: false,
    highlight: false,
    badge: null,
    cta: "Seguir Sem Gestão",
    whatsappMessage: "Olá! Gostaria de contratar apenas o desenvolvimento inicial sem gestão mensal (R$ 0/mês).",
  },
  {
    id: "gestao-essencial",
    number: "02",
    name: "Gestão Essencial",
    monthlyPrice: "97",
    tagline: "Tranquilidade Técnica",
    description: "Para quem quer deixar toda a parte técnica, hospedagem de alta performance e segurança sob o cuidado da BCOMM.",
    features: [
      "Hospedagem e infraestrutura de alta velocidade",
      "Certificado SSL de segurança renovado",
      "Monitoramento e manutenção técnica contínua",
      "Configuração e gerenciamento completo do domínio próprio",
      "Pequenas alterações e correções de textos no site",
      "Suporte técnico direto no WhatsApp",
    ],
    domainNote: "Domínio personalizado: nossa equipe cuida de 100% da configuração e apontamentos para você.",
    isPaid: true,
    highlight: false,
    badge: null,
    cta: "Escolher Gestão Essencial",
    whatsappMessage: "Olá! Gostaria de contratar a Gestão Essencial (R$ 97/mês) para cuidar do meu site.",
  },
  {
    id: "gestao-presenca",
    number: "03",
    name: "Gestão Presença Digital",
    monthlyPrice: "197",
    tagline: "Presença Ativa & Google",
    description: "Para quem quer manter a presença digital sempre ativa, atualizada e atraindo novos contatos no Google e Instagram.",
    features: [
      "Tudo incluído na Gestão Essencial",
      "Atualizações contínuas no Perfil da Empresa no Google",
      "Publicações de novidades e posts no Google Meu Negócio",
      "Pequenas atualizações de conteúdo no website",
      "Atualizações de links e ofertas no Link da Bio",
      "Acompanhamento básico de SEO local",
      "Melhorias contínuas na presença digital",
    ],
    domainNote: null,
    isPaid: true,
    highlight: true,
    badge: "RECOMENDADO",
    cta: "Escolher Presença Ativa",
    whatsappMessage: "Olá! Gostaria de saber mais sobre a Gestão Presença Digital (R$ 197/mês) para minha empresa.",
  },
  {
    id: "gestao-crescimento",
    number: "04",
    name: "Gestão Crescimento",
    monthlyPrice: "297",
    tagline: "Máxima Aceleração",
    description: "Para negócios que desejam máxima tração comercial, atualizações prioritárias e autoridade contínua no mercado.",
    features: [
      "Tudo incluído na Gestão Presença Digital",
      "Mais atualizações mensais de conteúdo e banners",
      "Até 4 publicações estratégicas por mês no Google",
      "Atualizações prioritárias no site e link da bio",
      "Otimizações contínuas de SEO local para buscas",
      "Gestão básica de respostas às avaliações dos clientes",
      "Acompanhamento periódico de métricas e acessos",
    ],
    domainNote: null,
    isPaid: true,
    highlight: false,
    badge: null,
    cta: "Escolher Gestão Crescimento",
    whatsappMessage: "Olá! Gostaria de saber mais sobre a Gestão Crescimento (R$ 297/mês) para acelerar minha empresa.",
  },
];

export const structureComparisonRows = [
  { feature: "Website Institucional Personalizado", essential: true, professional: true, presenca: true },
  { feature: "Design Responsivo (Mobile, Tablet, PC)", essential: true, professional: true, presenca: true },
  { feature: "SEO Técnico & Indexação Google", essential: true, professional: true, presenca: true },
  { feature: "Canais de WhatsApp & Formulário", essential: true, professional: true, presenca: true },
  { feature: "Página Exclusiva de Link da Bio", essential: false, professional: true, presenca: true },
  { feature: "Abertura Instantânea no Celular", essential: true, professional: true, presenca: true },
  { feature: "Otimização de Perfil no Google (Meu Negócio)", essential: false, professional: false, presenca: true },
  { feature: "SEO Local para Google Maps", essential: false, professional: false, presenca: true },
  { feature: "Integração Website + Google + Instagram", essential: false, professional: false, presenca: true },
];

export const managementComparisonRows = [
  { item: "Hospedagem & Infraestrutura", semGestao: "Pages.dev", essencial: "Incluso", presenca: "Incluso", crescimento: "Incluso Prioritário" },
  { item: "Domínio Próprio", semGestao: "Cliente configura", essencial: "BCOMM gerencia", presenca: "BCOMM gerencia", crescimento: "BCOMM gerencia" },
  { item: "Suporte Técnico", semGestao: "Não incluso", essencial: "WhatsApp", presenca: "Prioritário WhatsApp", crescimento: "Dedicado Prioritário" },
  { item: "Atualizações no Website", semGestao: "Não incluso", essencial: "Básicas", presenca: "Frequentes", crescimento: "Prioritárias" },
  { item: "Atualizações no Link da Bio", semGestao: "Não incluso", essencial: "Básicas", presenca: "Incluso", crescimento: "Incluso" },
  { item: "Publicações no Google", semGestao: "Não incluso", essencial: "Não incluso", presenca: "Periódicas", crescimento: "Até 4 posts/mês" },
  { item: "Gestão de Avaliações Google", semGestao: "Não incluso", essencial: "Não incluso", presenca: "Básico", crescimento: "Ativo" },
  { item: "SEO Local Contínuo", semGestao: "Não incluso", essencial: "Não incluso", presenca: "Acompanhamento", crescimento: "Otimização Ativa" },
];

export const pricingFaq = [
  {
    q: "Sou obrigado a contratar uma mensalidade de gestão?",
    a: "Não! A contratação do desenvolvimento é independente. Ao finalizar o projeto, você pode optar pela opção 'Sem Gestão' (R$ 0/mês). O seu site continuará no ar com endereço .pages.dev sem nenhuma cobrança recorrente.",
  },
  {
    q: "Como funciona a configuração de domínio próprio no plano Sem Gestão (R$ 0)?",
    a: "Caso você queira utilizar um domínio personalizado (ex: www.suaempresa.com.br), você contrata o registro no Registro.br e faz os apontamentos de DNS por conta própria. Se preferir não se preocupar com isso, nosso plano de Gestão Essencial (R$ 97/mês) cuida de 100% da configuração e manutenção.",
  },
  {
    q: "Posso mudar ou cancelar meu plano de gestão a qualquer momento?",
    a: "Sim! Não trabalhamos com contratos de fidelidade ou multas de cancelamento. Você pode aderir a um plano de gestão, fazer upgrade ou cancelar quando desejar.",
  },
  {
    q: "Quais são as formas de pagamento para o desenvolvimento inicial?",
    a: "O valor de desenvolvimento (R$ 597, R$ 897 ou R$ 1.297) pode ser pago via Pix com desconto ou parcelado no cartão de crédito em condições facilitadas.",
  },
  {
    q: "Qual é o prazo médio de entrega do projeto?",
    a: "Após a confirmação do pedido e o envio das informações básicas (serviços, fotos e contatos), o prazo habitual de entrega para validação é de 3 a 7 dias úteis.",
  },
  {
    q: "Vocês atendem apenas Curitiba ou qualquer cidade do Brasil?",
    a: "Atendemos empresas em todo o território nacional e no exterior. Todo o processo de atendimento, alinhamento e homologação é realizado de forma 100% online e ágil pelo WhatsApp.",
  },
];
