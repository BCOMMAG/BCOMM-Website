import { Dictionary } from "./types";

export const pt: Dictionary = {
  locale: "pt",
  nav: {
    services: "Serviços",
    allServices: "Todos os Serviços",
    websites: "Websites & Landing Pages",
    ecommerce: "E-commerce",
    automation: "Automação com IA",
    linkBio: "Link Bio Instagram",
    centralLinks: "Central de Links (Bio)",
    prices: "Soluções & Planos",
    about: "Sobre",
    aboutUs: "Sobre a BCOMM",
    howWeWork: "Como Trabalhamos",
    cases: "Cases",
    contact: "Contato",
    requestProposal: "Solicitar Proposta",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
  },
  hero: {
    titlePrefix: "Tecnologia que ",
    typingWords: [
      "multiplica suas vendas",
      "escala sua operação",
      "automatiza seu negócio",
    ],
    description:
      "Construímos websites de abertura instantânea e assistentes de inteligência artificial que atendem no WhatsApp 24 horas por dia para captar clientes, fechar vendas e cortar custos operacionais da sua empresa.",
    ctaPrimary: "Solicitar Proposta",
    ctaSecondary: "Conheça nossas soluções",
    badges: [
      "ABERTURA INSTANTÂNEA NO CELULAR",
      "ATENDIMENTO ATIVO 24H POR DIA",
      "FOCO EM RETORNO FINANCEIRO",
    ],
  },
  solutions: {
    tag: "Soluções Digitais",
    title: "O que a BCOMM constrói para sua empresa",
    subtitle:
      "Desenvolvemos ecossistemas completos para colocar sua empresa em outro patamar de autoridade, velocidade e conversão.",
    centerTitle: "Estruturas de Alta Performance",
    centerSubtitle: "Websites, Lojas e Agentes Autônomos de IA",
    items: [
      {
        title: "Websites & Landing Pages",
        description:
          "Sites modernos, rápidos e feitos para converter visitantes em clientes. Design sob medida, performance extrema e SEO.",
        cta: "Ver como funciona",
        ctaHref: "/servicos/websites",
      },
      {
        title: "Landing Pages de Alta Conversão",
        description:
          "Páginas com foco em resultado: captação de leads, lançamentos e campanhas. Copy, design e dados trabalhando juntos.",
        cta: "Ver exemplos",
        ctaHref: "/servicos/websites",
      },
      {
        title: "E-commerce Personalizado",
        description:
          "Lojas virtuais que crescem com o negócio. Catálogo, checkout, pagamentos e gestão integrados em uma plataforma sob medida.",
        cta: "Conhecer e-commerce",
        ctaHref: "/servicos/ecommerce",
      },
      {
        title: "Automação com IA",
        description:
          "Agentes inteligentes que automatizam tarefas repetitivas, reduzem erros e liberam seu time para o que importa.",
        cta: "Ver automação",
        ctaHref: "/servicos/automacao",
      },
    ],
  },
  about: {
    tag: "Quem Somos & Diferenciais",
    title: "Engenharia de software focada no caixa da sua empresa",
    subtitle:
      "Não criamos páginas estáticas sem propósito. Desenvolvemos ferramentas diretas que colocam mais dinheiro no caixa da sua empresa.",
    ctaButton: "Solicitar meu projeto",
    cards: [
      {
        id: "speed",
        tag: "Velocidade Real",
        title: "Abertura instantânea que não perde clientes",
        hook: "Se o seu site demora mais de 3 segundos para abrir, você está jogando dinheiro no lixo.",
        benefit:
          "Construído com Next.js e CDN Global. O cliente clica no link do anúncio ou Instagram e a página já está aberta na tela.",
        metricNumber: "< 0.8s",
        metricLabel: "Tempo médio de carregamento",
      },
      {
        id: "design",
        tag: "Autoridade Visual",
        title: "Design sob medida que transmite alto valor",
        hook: "Empresas amadoras parecem amadoras antes mesmo do cliente ler a primeira frase.",
        benefit:
          "Design exclusivo desenhado para a sua marca. Nada de templates batidos de WordPress que travam o celular do cliente.",
        metricNumber: "100%",
        metricLabel: "Design proprietário e exclusivo",
      },
      {
        id: "automation",
        tag: "IA Ativa 24/7",
        title: "Atendimento no WhatsApp sem filas",
        hook: "Enquanto seu concorrente demora horas para responder, a sua empresa fecha o lead na hora.",
        benefit:
          "Agentes de IA treinados no seu produto que qualificam leads, tiram dúvidas e direcionam para o fechamento a qualquer hora.",
        metricNumber: "24/7",
        metricLabel: "Disponibilidade em tempo real",
      },
      {
        id: "linkbio",
        tag: "Link Bio Próprio",
        title: "Bio do Instagram sem marcas de terceiros",
        hook: "Pare de pagar mensalidades para ferramentas lentas que colocam a marca deles no seu Instagram.",
        benefit:
          "Uma página de Link Bio rápida, elegante e totalmente integrada ao seu domínio, sem mensalidades abusivas e sem limites.",
        metricNumber: "0 taxas",
        metricLabel: "Sem intermediários ou marcas alheias",
      },
      {
        id: "conversion",
        tag: "Foco em ROI",
        title: "Estrutura desenhada para gerar lucro",
        hook: "Ter um site que não vende é apenas um custo. Nós construímos ferramentas de captação ativa.",
        benefit:
          "Copywriting persuasivo, botões posicionados estrategicamente e formulários sem atrito para maximizar conversões.",
        metricNumber: "+180%",
        metricLabel: "Aumento médio em conversão",
      },
    ],
  },
  process: {
    tag: "Metodologia Ágil",
    title: "Como transformamos sua presença digital",
    subtitle:
      "Processo transparente e previsível do diagnóstico ao suporte contínuo da sua operação.",
    steps: [
      {
        number: "01",
        title: "Diagnóstico Estratégico",
        description:
          "Mapeamos seus objetivos, concorrência e gargalos comerciais para definir a arquitetura exata.",
        detail: "Alinhamento de escopo",
      },
      {
        number: "02",
        title: "Design & Engenharia",
        description:
          "Criamos interfaces exclusivas e código de alta performance, sem atalhos ou templates lentos.",
        detail: "Next.js + Tailwind",
      },
      {
        number: "03",
        title: "Integração & Automação",
        description:
          "Conectamos WhatsApp, gateways de pagamento, CRMs e agentes de inteligência artificial.",
        detail: "Fluxos inteligentes",
      },
      {
        number: "04",
        title: "Deploy Global & Suporte",
        description:
          "Publicação em CDN de alta velocidade com monitoramento 24 horas por dia e evolução contínua.",
        detail: "Edge CDN & SSL",
      },
    ],
  },
  aiArchitecture: {
    tag: "Inteligência Artificial",
    title: "Como a IA trabalha pela sua empresa",
    subtitle:
      "Muito além de um robô que manda mensagens engessadas: um assistente inteligente integrado à rotina do seu negócio que resolve problemas e gera vendas reais.",
    pillars: [
      {
        tag: "ATENDIMENTO 24/7",
        title: "Atendimento & Qualificação Ativa",
        description:
          "Responde dúvidas frequentes, qualifica se o lead tem perfil de compra e agenda reuniões automaticamente.",
        detail: "WhatsApp & Web",
      },
      {
        tag: "AUTOMAÇÃO INTERNA",
        title: "Processamento de Dados & Tarefas",
        description:
          "Elimina trabalhos manuais repetitivos, conecta planilhas com CRMs e gera relatórios operacionais automáticos.",
        detail: "Economia de tempo",
      },
      {
        tag: "ESCALABILIDADE",
        title: "Capacidade de Atendimento Ilimitada",
        description:
          "Atenda 10 ou 10.000 clientes simultaneamente com a mesma velocidade e qualidade sem precisar inchar a folha de pagamento.",
        detail: "Zero gargalos",
      },
    ],
  },
  cases: {
    tag: "Resultados Reais",
    title: "Métricas que comprovam nosso impacto",
    subtitle:
      "Empresas que confiaram na BCOMM e transformaram suas operações com tecnologia e IA.",
    items: [
      {
        metric: "+240%",
        service: "Website + Link Bio",
        label: "Aumento na captação de leads qualificados",
        description:
          "Redesenho completo da estrutura digital com foco em carregamento instantâneo no celular e CTA direto para o WhatsApp.",
        client: "Clínica Médica Integrada / São Paulo",
      },
      {
        metric: "-65%",
        service: "Automação com IA",
        label: "Redução no tempo de resposta ao cliente",
        description:
          "Implementação de assistente inteligente no WhatsApp capaz de responder dúvidas e agendar consultas 24 horas por dia.",
        client: "Escritório de Consultoria B2B / Curitiba",
      },
      {
        metric: "3.2x",
        service: "E-commerce Sob Medida",
        label: "Crescimento no faturamento online",
        description:
          "Migração de plataforma compartilhada para loja própria sob medida com catálogo ultrarrápido e finalização no WhatsApp.",
        client: "Marca de Moda Feminina / Rio de Janeiro",
      },
    ],
  },
  faq: {
    tag: "Dúvidas Frequentes",
    title: "Perguntas Frequentes",
    items: [
      {
        question: "Quanto tempo leva para desenvolver e publicar o projeto?",
        answer:
          "Landing pages de alta conversão costumam ser entregues entre 5 a 10 dias úteis. Websites institucionais completos levam em média de 2 a 4 semanas. Lojas virtuais e projetos com automações personalizadas de IA seguem um cronograma ágil definido após a análise inicial.",
      },
      {
        question: "Como funciona o atendimento para clientes fora do Brasil?",
        answer:
          "Atendemos clientes em qualquer país de forma 100% digital e ágil, com canais dedicados no WhatsApp e E-mail corporativo. Trabalhamos com métodos de pagamento internacionais para sua total conveniência.",
      },
      {
        question: "Como funciona a automação com Inteligência Artificial para empresas?",
        answer:
          "Desenvolvemos agentes autônomos de IA e chatbots inteligentes integrados aos seus canais (WhatsApp, CRM e ERP). Eles qualificam leads, tiram dúvidas 24/7 de forma humanizada, agendam reuniões e automatizam tarefas operacionais repetitivas, reduzindo até 73% do tempo de atendimento.",
      },
      {
        question: "O website desenvolvido já vem otimizado para o Google (SEO e IA)?",
        answer:
          "Sim! Todos os nossos websites são construídos com Next.js, arquitetura de carregamento ultrarrápido, dados estruturados (Schema.org / JSON-LD), metadados para redes sociais e protocolos para IAs (llms.txt), garantindo visibilidade máxima no Google, ChatGPT, Perplexity e Gemini.",
      },
    ],
  },
  contact: {
    tag: "Contato Direto",
    statusOnline: "SISTEMA ONLINE • ATENDIMENTO IMEDIATO 24/7",
    title: "Solicitar Proposta",
    subtitle:
      "Sem esperas de dias por retorno comercial. Processamos sua demanda rapidamente a qualquer hora e direcionamos seu projeto com total clareza.",
    whatsappLabel: "WhatsApp Direto",
    emailLabel: "E-mail Oficial",
    socialLabel: "Redes Sociais",
    form: {
      step1: "1. Selecione a solução de interesse",
      step2: "2. Seu nome ou empresa",
      step3: "3. Detalhes do projeto",
      services: [
        "Website Institucional + Link Bio",
        "E-commerce Sob Medida + Link Bio",
        "Sistemas Customizados & Automação com IA",
        "Outro Projeto Sob Medida",
      ],
      namePlaceholder: "Nome completo ou nome da empresa",
      msgPlaceholder: "Descreva seu objetivo, necessidades ou dúvidas sobre o projeto.",
      submitButton: "Iniciar Atendimento no WhatsApp",
      emailButton: "Ou enviar solicitação por E-mail",
      errorName: "Nome é obrigatório (máx 100 caracteres)",
      errorMsg: "Mensagem é obrigatória (máx 500 caracteres)",
    },
  },
  pricingPage: {
    badge: "Escopos de Entrega BCOMM",
    title: "Soluções sob medida para a presença e escala do seu negócio",
    subtitle:
      "Conheça nossas estruturas de entrega: Website com Link Bio para autoridade de marca, E-commerce Sob Medida para vender com catálogo próprio ou Sistemas Customizados com IA para máxima eficiência operacional.",
    loading: "Carregando soluções e escopos...",
    cardBadgePopular: "MAIS PROCURADO",
    commercialModel: "Modelo Comercial",
    immediateService: "Atendimento Imediato",
    customQuote: "Orçamento Sob Medida",
    customQuoteDesc: "Escopo personalizado conforme as demandas, integrações e país da sua operação.",
    includedTitle: "O que está incluído:",
    deliverablesTitle: "Principais Entregáveis",
    ctaWhatsapp: "Solicitar no WhatsApp",
    ctaEmail: "Ou solicitar via E-mail",
    tableTag: "Transparência & Escopo",
    tableTitle: "Comparativo de Recursos & Entregas",
    tableSubtitle: "Veja exatamente o que cada estrutura entrega para a presença e operação do seu negócio.",
    tableCol1: "Recursos / Capacidade",
    tableCol2: "Website + Link Bio",
    tableCol3: "E-commerce + Link Bio",
    tableCol4: "Sistemas & IA",
    faqTag: "Dúvidas Frequentes",
    faqTitle: "Perguntas sobre Contratação & Escopos",
    bannerTitle: "Precisa de uma recomendação técnica para sua empresa?",
    bannerDesc:
      "Analisamos os objetivos da sua marca e indicamos exatamente a melhor combinação entre website, e-commerce ou agentes de IA.",
    bannerCtaWhatsapp: "Falar com Especialista no WhatsApp",
    bannerCtaForm: "Preencher Formulário de Contato",
  },
  footer: {
    copyright: `© ${new Date().getFullYear()} BCOMM Comunicação Inteligente. Todos os direitos reservados.`,
    websites: "Websites",
    ecommerce: "E-commerce",
    automation: "Automação com IA",
    linkBio: "Link Bio",
    prices: "Soluções & Planos",
    centralLinks: "Central de Links",
    contact: "Contato",
  },
};
