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
    href: "#servicos",
    children: [
      { label: "Todos os Serviços", href: "/servicos" },
      { label: "Websites & Landing Pages", href: "/servicos/websites" },
      { label: "E-commerce", href: "/servicos/ecommerce" },
      { label: "Automação com IA", href: "/servicos/automacao" },
    ],
  },
  {
    label: "Sobre",
    href: "#sobre",
    children: [
      { label: "Sobre a BCOMM", href: "#sobre" },
      { label: "Como Trabalhamos", href: "#processo" },
    ],
  },
  { label: "Cases", href: "#cases" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "#contato" },
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
    ctaHref: "#contato",
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
    ctaHref: "#contato",
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
    ctaHref: "#contato",
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
    ctaHref: "#contato",
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
    ctaHref: "#contato",
  },
  {
    slug: "linktree",
    title: "Criação de Linktree",
    shortTitle: "Linktree",
    description:
      "Linktree personalizado para Instagram e redes sociais. Design alinhado com sua marca, links organizados e performance.",
    features: [
      "Design personalizado com identidade visual",
      "Links organizados por categoria",
      "Integração com WhatsApp, Instagram, email",
      "Analytics de cliques",
      "Otimizado para mobile",
      "SEO e schema para buscadores",
    ],
    cta: "Solicitar orçamento",
    ctaHref: "#contato",
  },
] as const;

export const differentials = [
  {
    number: "01",
    title: "Time técnico especializado",
    description:
      "Engenheiros de software e especialistas em IA trabalhando direto com você. Sem intermediários, sem ruído.",
  },
  {
    number: "02",
    title: "Implementação ágil",
    description:
      "Do diagnóstico à entrega em semanas, não meses. Metodologias ágeis aplicadas com disciplina, não só no slide.",
  },
  {
    number: "03",
    title: "Suporte contínuo",
    description:
      "O projeto não termina no deploy. A gente monitora, evolui e garante que a solução continue performando.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Mapeamos o fluxo atual, identificamos gargalos e definimos onde a tecnologia faz diferença de verdade.",
  },
  {
    step: "02",
    title: "Arquitetura",
    description:
      "Projetamos a solução com as tecnologias certas: escalável, segura e alinhada com a infraestrutura que já existe.",
  },
  {
    step: "03",
    title: "Implementação",
    description:
      "Desenvolvemos, testamos e entregamos em ciclos curtos. Cada sprint gera algo funcional e mensurável.",
  },
  {
    step: "04",
    title: "Evolução contínua",
    description:
      "Depois do deploy, monitoramos performance, coletamos feedbacks e iteramos. A solução nunca fica parada.",
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

export const blogPosts = [
  {
    slug: "como-criar-landing-page-que-converte",
    title: "Como Criar uma Landing Page que Converte: Guia Completo 2026",
    description:
      "Os 7 elementos essenciais de uma landing page de alta conversão. Copy, design, prova social e CTK, tudo baseado em dados reais.",
    category: "Landing Pages",
    date: "2026-08-15",
    readTime: "8 min",
    content: `
## Por que 96% das landing pages falham?

A maioria das landing pages não converte porque foi feita com base em achismos, não em dados. Uma landing page eficiente é um sistema: cada elemento, do título ao último botão, precisa se justificar com métrica.

## Os 7 elementos de uma landing page que converte

### 1. Headline que comunica valor em 3 segundos

O visitante decide se fica ou sai em 3 segundos. Sua headline precisa responder: "O que eu ganho com isso?"

- **Fraco:** "Soluções digitais para sua empresa"
- **Forte:** "Landing pages que transformam visitantes em clientes em 30 dias"

### 2. Subheadline que expande a promessa

A subheadline detalha como a promessa se concretiza. Ela complementa o título, não o repete.

### 3. Prova social imediata

Depoimentos, logos de clientes, métricas. Tudo que prova que outros já confiaram e tiveram resultado. Coloque acima da dobra.

### 4. CTK único e claro

Um objetivo por página. Não existe "Saiba mais" + "Fale conosco" + "Baixe o e-book" na mesma landing page. Escolha UM CTK.

### 5. Formulário otimizado

Cada campo a mais reduz a conversão em ~11%. Pergunte só o essencial: nome, email e o que o lead precisa.

### 6. Mobile-first

60%+ do tráfego vem de celulares. Se a landing page não é perfeita no mobile, está perdendo mais da metade dos leads.

### 7. Velocidade de carregamento

Cada segundo extra de carregamento reduz a conversão em 7%. Core Web Vitals não é opcional.

## Como implementar na prática

1. Defina uma única meta para a página
2. Mapeie a jornada do visitante do clique ao preenchimento do formulário
3. Escreva a copy focando no benefício, não na feature
4. Teste duas versões do CTK (texto e cor)
5. Meça tudo com analytics e heatmaps

---

Precisa de uma landing page que converte? A BCOMM cria páginas focadas em resultado, com copy baseada em dados e design que converte. [Fale conosco](/contato).
    `,
  },
  {
    slug: "e-commerce-que-vende-mais",
    title: "E-commerce que Vende Mais: 5 Otimizações que Triplicam Conversões",
    description:
      "Como otimizar sua loja virtual para vender mais. Checkout, velocidade, mobile, provas sociais e recuperação de carrinho.",
    category: "E-commerce",
    date: "2026-08-22",
    readTime: "7 min",
    content: `
## O problema não é tráfego, é conversão

A maioria dos e-commerces investe pesado em tráfego pago, mas ignora a experiência de compra. Resultado: CPC alto, carrinho abandonado, ROI negativo.

## 5 otimizações que geram resultado real

### 1. Checkout em uma página

Cada tela extra no checkout é uma porta de saída. Checkout em uma página aumenta a conversão em 35%.

### 2. Velocidade de carregamento

Páginas que carregam em menos de 2 segundos têm 87% menos abandono. Otimize imagens, use CDN, minimize JavaScript.

### 3. Experiência mobile impecável

Botões grandes, formulários simplificados, pagamento com Apple Pay/Google Pay. O mobile não pode ser uma versão menor do desktop.

### 4. Prova social nos produtos

Avaliações, fotos de clientes reais, badge de "mais vendido". Produtos sem prova social convertem 70% menos.

### 5. Recuperação de carrinho abandonado

88% dos carrinhos são abandonados. Um e-mail de recuperação com desconto leve recupera 10-15% dessas vendas.

## Implementação

Cada uma dessas otimizações não é "bonita": é mensurável. Implemente, meça, itere. O e-commerce que vende mais é o que testa mais.

---

A BCOMM cria e-commerces personalizados com foco em conversão. [Solicite uma proposta](/contato).
    `,
  },
  {
    slug: "automacao-ia-reduz-custos-operacionais",
    title: "Automação com IA: Como Reduzir Custos Operacionais em até 60%",
    description:
      "Empresas usando automação com IA para reduzir custos, eliminar erros e escalar operações. Dados e resultados reais.",
    category: "Automação com IA",
    date: "2026-09-01",
    readTime: "6 min",
    content: `
## O custo da inação

Processos manuais não são apenas lentos: são caros. Cada hora gasta em tarefa repetitiva é hora não investida em crescimento.

## Onde a IA gera impacto real

### Atendimento ao cliente

Chatbots com IA resolvem 70-90% das demandas sem intervenção humana. Isso não substitui o time. Libera ele para problemas complexos que geram valor.

### Processamento de dados

Entrada de dados, reconciliação, relatórios. Tarefas que levam horas podem ser executadas em segundos com IA treinada para o contexto do negócio.

### Gestão de processos

Validação de documentos, aprovações, follow-ups. Cada etapa automatizada reduz o ciclo operacional e elimina gargalos.

## ROI real da automação

- Redução de 40-60% em custos operacionais
- Eliminação de 85% dos erros manuais
- Tempo de processamento reduzido em 10x
- Escalabilidade sem aumento proporcional de headcount

## Por onde começar

1. Mapeie os processos que mais consomem tempo
2. Quantifique o custo dessas tarefas (horas x custo/hora)
3. Priorize pelo impacto e facilidade de automação
4. Implemente em ciclos curtos, meça resultado
5. Evolua com base em dados reais, não suposições

---

A BCOMM implementa automação com IA para empresas que querem resultados mensuráveis. [Comece pelo diagnóstico](/contato).
    `,
  },
] as const;
