export const colors = {
  black: "#000000",
  gray: "#f5f5f7",
  white: "#ffffff",
  ink: "#1d1d1f",
  action: "#0071e3",
  link: "#0066cc",
  bright: "#2997ff",
  secondary: "#6e6e73",
  borderSoft: "#d2d2d7",
  borderMed: "#86868b",
  surface1: "#272729",
  surface2: "#262629",
  surface3: "#28282b",
  surface4: "#2a2a2c",
} as const;

export const typography = {
  heroHeadline: {
    size: "text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[80px]",
    weight: "font-semibold",
    leading: "leading-[1.05]",
    tracking: "tracking-[-0.02em]",
  },
  sectionTitle: {
    size: "text-[32px] sm:text-[40px] md:text-[48px]",
    weight: "font-medium",
    leading: "leading-[1.1]",
    tracking: "tracking-[-0.015em]",
  },
  cardTitle: {
    size: "text-[24px] md:text-[28px]",
    weight: "font-semibold",
    leading: "leading-[1.2]",
  },
  body: {
    size: "text-[17px]",
    weight: "font-normal",
    leading: "leading-[1.47]",
    tracking: "tracking-[-0.022em]",
  },
  label: {
    size: "text-[12px] md:text-[14px]",
    weight: "font-medium",
    leading: "leading-[1.3]",
  },
} as const;

export const radii = {
  control: "8px",
  card: "16px",
  module: "28px",
  pill: "980px",
  circle: "50%",
} as const;

export const spacing = {
  sectionLarge: "py-[80px] md:py-[120px] lg:py-[160px]",
  sectionMedium: "py-[60px] md:py-[80px] lg:py-[100px]",
  sectionDense: "py-[48px] md:py-[64px]",
  containerLarge: "px-[24px] md:px-[48px] lg:px-[80px]",
  containerMedium: "px-[24px] md:px-[40px] lg:px-[64px]",
} as const;

export const nav = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contato" },
] as const;

export const solutions = [
  {
    title: "Automação com IA",
    description:
      "Agentes inteligentes que automatizam processos repetitivos, reduzem erros operacionais e liberam seu time para tarefas estratégicas.",
    icon: "🤖",
  },
  {
    title: "Integrações de Sistemas",
    description:
      "Conectamos seus sistemas, APIs e ferramentas em um fluxo único — dados movem-se sem atrito entre departamentos.",
    icon: "🔗",
  },
  {
    title: "Atendimento Inteligente",
    description:
      "Chatbots e canais de suporte que resolvem, aprendem e escalam — sem perder a qualidade humana na comunicação.",
    icon: "💬",
  },
  {
    title: "Plataformas SaaS sob Medida",
    description:
      "Soluções sob medida que escalam com o seu negócio, do MVP ao enterprise, com arquitetura pensada para crescer.",
    icon: "⚙️",
  },
] as const;

export const differentials = [
  {
    number: "01",
    title: "Time técnico especializado",
    description:
      "Engenheiros de software e especialistas em IA trabalhando diretamente com você — sem intermediários, sem ruído.",
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
      "Mapeamos seu fluxo atual, identificamos gargalos e definimos exatamente onde a tecnologia gera impacto real.",
  },
  {
    step: "02",
    title: "Arquitetura",
    description:
      "Projetamos a solução com as tecnologias certas — escalável, segura e alinhada com sua infraestrutura existente.",
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
      "Após o deploy, monitoramos performance, coletamos feedbacks e iteramos — sua solução nunca fica parada.",
  },
] as const;

export const cases = [
  {
    metric: "73%",
    label: "Redução no tempo de atendimento",
    description:
      "Automatização inteligente que transformou o fluxo de suporte de um operador logístico.",
    client: "Operador Logístico — LogTech",
  },
  {
    metric: "4x",
    label: "Velocidade na integração de dados",
    description:
      "Pipeline de dados conectando ERP, CRM e ferramentas internas em tempo real.",
    client: "Empresa de Varejo — Grupo Norte",
  },
  {
    metric: "92%",
    label: "Taxa de resolução automática",
    description:
      "Agente de IA que resolve dúvidas técnicas antes de acionar o time humano.",
    client: "Fintech — Portal Financeiro",
  },
] as const;
