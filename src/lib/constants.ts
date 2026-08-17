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
  { label: "Soluções", href: "#solucoes" },
  {
    label: "Sobre",
    href: "#sobre",
    children: [
      { label: "Sobre a BCOMM", href: "#sobre" },
      { label: "Como Trabalhamos", href: "#processo" },
    ],
  },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contato" },
];

export const solutions = [
  {
    title: "Automação com IA",
    description:
      "Agentes inteligentes que automatizam processos repetitivos, reduzem erros operacionais e liberam seu time para tarefas estratégicas.",
    variant: "automation",
    cta: "Ver como funciona",
    ctaHref: "#contato",
  },
  {
    title: "Integrações de Sistemas",
    description:
      "Conectamos seus sistemas, APIs e ferramentas em um fluxo único, dados movem-se sem atrito entre departamentos.",
    variant: "integration",
    cta: "Conheça as integrações",
    ctaHref: "#contato",
  },
  {
    title: "Atendimento Inteligente",
    description:
      "Chatbots e canais de suporte que resolvem, aprendem e escalam, sem perder a qualidade humana na comunicação.",
    variant: "support",
    cta: "Ver demo de atendimento",
    ctaHref: "#contato",
  },
  {
    title: "Plataformas SaaS sob Medida",
    description:
      "Soluções sob medida que escalam com o negócio, do MVP ao enterprise, com arquitetura pensada para crescer.",
    variant: "saas",
    cta: "Solicitar proposta",
    ctaHref: "#contato",
  },
] as const;

export const differentials = [
  {
    number: "01",
    title: "Time técnico especializado",
    description:
      "Engenheiros de software e especialistas em IA trabalhando diretamente com você, sem intermediários, sem ruído.",
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
      "O projeto não termina no deploy. Monitoramos, evoluimos e garantimos que a solução continue performando.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Mapeamos o fluxo atual, identificamos gargalos e definimos exatamente onde a tecnologia gera impacto real.",
  },
  {
    step: "02",
    title: "Arquitetura",
    description:
      "Projetamos a solução com as tecnologias certas: escalável, segura e alinhada com a infraestrutura existente.",
  },
  {
    step: "03",
    title: "Implementação",
    description:
      "Desenvolvemos, testamos e entregamos em ciclos curtos. Cada sprint resulta em algo funcional e mensurável.",
  },
  {
    step: "04",
    title: "Evolução contínua",
    description:
      "Após o deploy, monitoramos performance, coletamos feedbacks e iteramos, a solução nunca fica parada.",
  },
] as const;

export const cases = [
  {
    metric: "73%",
    label: "Redução no tempo de atendimento",
    description:
      "Automação inteligente que transformou o fluxo de suporte de um operador logístico.",
    client: "Operador Logístico / LogTech",
  },
  {
    metric: "4x",
    label: "Velocidade na integração de dados",
    description:
      "Pipeline de dados conectando ERP, CRM e ferramentas internas em tempo real.",
    client: "Empresa de Varejo / Grupo Norte",
  },
  {
    metric: "92%",
    label: "Taxa de resolução automática",
    description:
      "Agente de IA que resolve dúvidas técnicas antes de acionar o time humano.",
    client: "Fintech / Portal Financeiro",
  },
] as const;
