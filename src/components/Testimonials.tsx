"use client";

import { Marquee } from "@/components/ui/marquee";
import { AnimatedSection } from "./AnimatedSection";

const testimonials = [
  {
    name: "Rafael Tomazini",
    role: "Diretor de Operações",
    company: "Grupo Vivaz",
    body: "A landing page que a BCOMM criou para nosso lançamento imobiliário triplicou os leads qualificados em 60 dias. Copy e design impecáveis.",
  },
  {
    name: "Patrícia Lima",
    role: "CEO",
    company: "Studio Bella Moda",
    body: "Nosso e-commerce faturava X por mês. Depois da BCOMM, o faturamento online cresceu 180%. Checkout otimizado e integração com WhatsApp fez a diferença.",
  },
  {
    name: "Marcos Vieira",
    role: "Head de Tecnologia",
    company: "Portal Financeiro",
    body: "O agente de IA que desenvolveram para nosso suporte técnico resolve 85% das demandas sem acionar o time humano. Redução real de custos.",
  },
  {
    name: "Camila Ferreira",
    role: "Diretora de Operações",
    company: "Grupo Norte Varejo",
    body: "A integração entre nosso ERP e CRM finalmente funciona como deveria. Dados fluindo em tempo real entre departamentos.",
  },
  {
    name: "André Santos",
    role: "Gerente de TI",
    company: "LogTech Operadora",
    body: "Implementação ágil e resultado real. Em 4 semanas já tínhamos o sistema de automação rodando e gerando economia mensurável.",
  },
  {
    name: "Juliana Costa",
    role: "Diretora Executiva",
    company: "Contábil Express",
    body: "A automação de processos financeiros eliminou erros manuais que custavam horas de retrabalho. ROI em 3 meses.",
  },
];

function TestimonialCard({ name, role, company, body }: (typeof testimonials)[number]) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="w-[320px] shrink-0 rounded-[16px] border border-graphite bg-void-black p-[24px] transition-colors hover:border-iron md:w-[360px]">
      <blockquote className="text-[16px] leading-[1.5] text-bone">
        &ldquo;{body}&rdquo;
      </blockquote>
      <div className="mt-[16px] flex items-center gap-[12px] border-t border-graphite pt-[16px]">
        <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-surface-lift font-mono text-[12px] text-iris">
          {initials}
        </div>
        <div>
          <p className="text-[14px] font-medium text-bone">{name}</p>
          <p className="text-[12px] text-ash">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative overflow-hidden border-t border-graphite bg-transparent px-[24px] py-[96px] md:px-[48px] md:py-[120px] lg:px-[80px] lg:py-[144px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
            Depoimentos
          </p>
          <h2 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
            Quem confia na BCOMM
          </h2>
        </AnimatedSection>
      </div>

      <div className="relative mt-[48px] md:mt-[64px]">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[80px] bg-gradient-to-r from-void-black to-transparent md:w-[160px]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l from-void-black to-transparent md:w-[160px]" />

        <Marquee pauseOnHover repeat={3} className="[--duration:50s]">
          {testimonials.map((t) => (
            <TestimonialCard key={`r1-${t.name}`} {...t} />
          ))}
        </Marquee>

        <Marquee pauseOnHover reverse repeat={3} className="mt-[16px] [--duration:50s]">
          {testimonials.map((t) => (
            <TestimonialCard key={`r2-${t.name}`} {...t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
