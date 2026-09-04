import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Automação com IA para Empresas | BCOMM",
  description:
    "Automatize processos repetitivos com inteligência artificial. Chatbots, RPA, integrações e análise preditiva. Reduza custos em até 60%.",
  keywords: [
    "automação com IA",
    "inteligência artificial para empresas",
    "chatbot",
    "RPA",
    "automação de processos",
    "agente de IA",
    "automação empresarial",
    "redução de custos com IA",
  ],
  openGraph: {
    title: "Automação com IA para Empresas | BCOMM",
    description:
      "Agentes inteligentes que automatizam processos e reduzem erros operacionais.",
  },
};

const features = [
  {
    title: "Chatbots com IA",
    description: "Assistentes virtuais que resolvem dúvidas, fazem atendimento e escalam sem perder qualidade.",
  },
  {
    title: "Automação de Processos",
    description: "RPA + IA para eliminar tarefas repetitivas: entrada de dados, validações, aprovações.",
  },
  {
    title: "Integração Inteligente",
    description: "Conexão entre CRMs, ERPs e ferramentas existentes com fluxo automatizado de dados.",
  },
  {
    title: "Análise Preditiva",
    description: "IA que identifica padrões, prevê demandas e auxilia na tomada de decisão.",
  },
  {
    title: "Monitoramento em Tempo Real",
    description: "Dashboards e alertas para acompanhar performance da automação e identificar gargalos.",
  },
  {
    title: "Evolução Contínua",
    description: "A IA aprende com os dados. Otimização automática baseada em resultados reais.",
  },
];

const useCases = [
  {
    title: "Atendimento ao Cliente",
    metric: "92%",
    metricLabel: "taxa de resolução automática",
    description: "Chatbots que resolvem dúvidas técnicas antes de acionar o time humano.",
  },
  {
    title: "Processamento Financeiro",
    metric: "60%",
    metricLabel: "redução de erros",
    description: "Validação inteligente de documentos, conciliação e aprovações automatizadas.",
  },
  {
    title: "Gestão de Dados",
    metric: "10x",
    metricLabel: "mais rápido",
    description: "Processos que levavam horas executados em segundos com IA treinada para o contexto.",
  },
];

export default function AutomacaoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automação com IA para Empresas",
    provider: {
      "@type": "Organization",
      name: "BCOMM Comunicação Inteligente",
    },
    description: "Agentes inteligentes que automatizam processos, reduzem erros e liberam o time para tarefas estratégicas.",
    areaServed: "BR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-void-black pt-[120px] pb-[96px]">
        <div className="mx-auto max-w-[1200px] px-[24px] md:px-[48px] lg:px-[80px]">
          <Breadcrumbs items={[{ label: "Serviços", href: "/servicos" }, { label: "Automação com IA" }]} />

          <div className="mt-[32px]">
            <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
              Automação com IA
            </p>
            <h1 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
              IA que trabalha para você
            </h1>
            <p className="mt-[16px] max-w-[600px] text-[18px] leading-[1.5] text-ash">
              Automatize processos repetitivos, elimine erros operacionais e libere seu time para tarefas estratégicas. Inteligência artificial aplicada a problemas reais.
            </p>
          </div>

          <div className="mt-[64px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-[16px] border border-graphite bg-[#0b0b0c] p-[32px]">
                <h3 className="text-[18px] font-semibold text-white">{f.title}</h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-ash">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-[96px]">
            <h2 className="text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px]">
              Casos de uso reais
            </h2>
            <div className="mt-[48px] flex flex-col gap-[32px] md:grid md:grid-cols-3 md:gap-[16px]">
              {useCases.map((uc) => (
                <div key={uc.title} className="rounded-[16px] border border-graphite bg-[#0b0b0c] p-[32px]">
                  <span className="font-mono text-[48px] font-normal leading-[1] text-iris">{uc.metric}</span>
                  <p className="mt-[4px] font-mono text-[12px] uppercase text-ash">{uc.metricLabel}</p>
                  <h3 className="mt-[16px] text-[18px] font-medium text-white">{uc.title}</h3>
                  <p className="mt-[8px] text-[14px] leading-[1.5] text-ash">{uc.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[96px] rounded-[16px] border border-graphite bg-[#0b0b0c] p-[32px] text-center md:p-[48px]">
            <h2 className="text-[24px] font-semibold text-white md:text-[32px]">
              Que processos você quer automatizar?
            </h2>
            <p className="mt-[12px] text-[16px] text-ash">
              Comece pelo diagnóstico gratuito. Vamos mapear seus processos e identificar onde a IA gera mais impacto.
            </p>
            <Link
              href="/#contato"
              className="mt-[24px] inline-flex items-center gap-[8px] rounded-[9999px] border border-graphite bg-transparent px-[24px] py-[12px] text-[16px] text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
            >
              Começar diagnóstico
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
