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

export interface EcommercePlan {
  id: string;
  name: string;
  badge: string;
  subBadge?: string | null;
  subtitle: string;
  setupPrice: string;
  monthlyPrice: string;
  monthlyLabel: string;
  highlight?: boolean;
  features: string[];
  cta: string;
  whatsappMessage: string;
}

export interface EcommerceComparisonRow {
  feature: string;
  essencial: string | boolean;
  pro: string | boolean;
  automatizado: string | boolean;
}

export const ecommercePlans: EcommercePlan[] = [
  {
    id: "ecommerce-essencial",
    name: "E-commerce Essencial",
    badge: "Loja Sob Medida",
    subBadge: null,
    subtitle: "Para quem quer começar a vender online com catálogo próprio e atendimento humanizado via WhatsApp.",
    setupPrice: "1.897",
    monthlyPrice: "197",
    monthlyLabel: "Gestão & Infraestrutura",
    highlight: false,
    features: [
      "Loja virtual com design 100% sob medida para a marca",
      "Catálogo de produtos, fotos em alta resolução e categorias",
      "Variações completas por produto (tamanhos, cores, grades)",
      "Carrinho inteligente e captura rápida de dados da cliente",
      "Registro oficial de pedidos no banco de dados (fonte única da verdade)",
      "Finalização direta via WhatsApp com link seguro do pedido",
      "Painel administrativo para cadastro e edição ilimitada de produtos",
      "Cálculo de frete realizado manualmente pela loja no WhatsApp",
      "Hospedagem em VPS dedicada, SSL, backups automáticos e suporte técnico",
    ],
    cta: "Escolher Essencial",
    whatsappMessage: "Olá! Gostaria de contratar a implantação do E-commerce Essencial (R$ 1.897 + R$ 197/mês) para a minha loja.",
  },
  {
    id: "ecommerce-gestao-pro",
    name: "E-commerce Gestão Pro",
    badge: "Central Operacional",
    subBadge: "MAIS ESCOLHIDO",
    subtitle: "O plano ideal para quem quer controle total da operação, histórico de pedidos e gestão inteligente de estoque.",
    setupPrice: "1.897",
    monthlyPrice: "297",
    monthlyLabel: "Gestão, Auditoria & Infraestrutura",
    highlight: true,
    features: [
      "Tudo incluso no Plano Essencial",
      "Linha do tempo e histórico completo de movimentações do pedido",
      "Gestão estruturada de status: Aguardando Confirmação ➔ Confirmado ➔ Em Preparação ➔ Enviado ➔ Entregue",
      "Baixa inteligente de estoque: O estoque só é reservado/baixado após a confirmação manual do pagamento",
      "Módulo de cancelamento com auditoria: Registro de motivos e devolução automática dos itens ao estoque",
      "Painel de Rastreio com botão direto: Campo no admin para colar o código de envio, gerando link do Melhor Rastreio para o cliente final",
      "Dashboard gerencial: Indicadores de faturamento, pedidos pendentes e produtos mais vendidos",
      "Estrutura pronta para futuras integrações automáticas",
    ],
    cta: "Escolher Gestão Pro",
    whatsappMessage: "Olá! Gostaria de contratar a implantação do E-commerce Gestão Pro (R$ 1.897 + R$ 297/mês) para a minha loja.",
  },
  {
    id: "ecommerce-automatizado",
    name: "E-commerce Automatizado",
    badge: "Automação & Escala",
    subBadge: null,
    subtitle: "Operação de alta eficiência com cotação automática de frete no carrinho e módulo de recomendação de produtos.",
    setupPrice: "1.897",
    monthlyPrice: "397",
    monthlyLabel: "Gestão Avançada & Automações",
    highlight: false,
    features: [
      "Tudo incluso no Plano Gestão Pro",
      "Cálculo automático de frete no carrinho via API do Melhor Envio (SEDEX, PAC, Jadlog e transportadoras em tempo real por CEP)",
      "Módulo 'Monte o Look' / Upsell: Recomendação de produtos complementares no carrinho para elevar o ticket médio",
      "Seleção de frete no checkout: Valor e prazo já associados automaticamente ao pedido",
      "Geração de links de rastreamento integrados",
      "Acompanhamento técnico prioritário e evolução contínua da loja",
    ],
    cta: "Escolher Automatizado",
    whatsappMessage: "Olá! Gostaria de contratar a implantação do E-commerce Automatizado (R$ 1.897 + R$ 397/mês) para a minha loja.",
  },
];

export const ecommerceComparisonRows: EcommerceComparisonRow[] = [
  { feature: "Loja Virtual & Design Sob Medida", essencial: true, pro: true, automatizado: true },
  { feature: "Catálogo Ilimitado & Variações (Cor/Tamanho)", essencial: true, pro: true, automatizado: true },
  { feature: "Pedidos Gravados no Banco com Link Seguro", essencial: true, pro: true, automatizado: true },
  { feature: "Finalização de Pedido no WhatsApp", essencial: true, pro: true, automatizado: true },
  { feature: "Baixa de Estoque Inteligente na Confirmação", essencial: false, pro: true, automatizado: true },
  { feature: "Linha do Tempo e Histórico do Pedido", essencial: false, pro: true, automatizado: true },
  { feature: "Gestão de Cancelamentos com Retorno de Estoque", essencial: false, pro: true, automatizado: true },
  { feature: "Dashboard com Métricas de Vendas", essencial: false, pro: true, automatizado: true },
  { feature: "Consulta de Rastreio para o Cliente", essencial: "Manual", pro: "Botão Melhor Rastreio", automatizado: "Integrado via API" },
  { feature: "Cálculo de Frete no Carrinho", essencial: "Manual via WhatsApp", pro: "Manual via WhatsApp", automatizado: "Automático via Melhor Envio" },
  { feature: "Módulo Upsell (\"Monte o Look\" no Carrinho)", essencial: false, pro: false, automatizado: true },
  { feature: "Servidor VPS Dedicado, SSL e Backups Inclusos", essencial: true, pro: true, automatizado: true },
];

export const ecommerceFaq = [
  {
    q: "Por que a implantação é um valor único e a gestão é mensal?",
    a: "O desenvolvimento sob medida envolve arquitetura, design exclusivo e deploy dedicado. A mensalidade cobre a infraestrutura da VPS, banco de dados, segurança, backups diários, manutenção de APIs e suporte contínuo para manter sua loja vendendo 24 horas por dia.",
  },
  {
    q: "O estoque é baixado quando o cliente clica no WhatsApp?",
    a: "Não! No modelo BCOMM o estoque só é deduzido após a administradora confirmar o recebimento do pagamento no painel, impedindo que clientes desistentes bloqueiem produtos de outros compradores.",
  },
  {
    q: "Posso começar no plano Essencial ou Gestão Pro e migrar para o Automatizado depois?",
    a: "Sim! A arquitetura BCOMM é modular. Você pode iniciar com o cálculo de frete manual e ativar a integração com o Melhor Envio ou novas automações quando sua operação escalar.",
  },
  {
    q: "Há limites de produtos cadastrados?",
    a: "Não há limites artificiais de catálogo. Você gerencia seus produtos livremente através do seu painel administrativo.",
  },
];
