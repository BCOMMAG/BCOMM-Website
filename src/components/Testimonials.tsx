"use client";

import { Marquee } from "@/components/ui/marquee";
import { AnimatedSection } from "./AnimatedSection";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "CTO",
    company: "Fintech Digital",
    body: "A automação que implementamos reduziu nosso tempo de processamento em 70%. O time da BCOMM entendeu exatamente o que precisávamos.",
  },
  {
    name: "Camila Ferreira",
    role: "Diretora de Operações",
    company: "Grupo Norte Varejo",
    body: "A integração entre nosso ERP e CRM finalmente funciona como deveria. Dados fluindo em tempo real entre departamentos.",
  },
  {
    name: "André Lima",
    role: "Head de Tecnologia",
    company: "Indústria MetalTech",
    body: "O agente de IA que desenvolveram para nosso suporte técnico resolve 85% das demandas sem acionar o time humano.",
  },
  {
    name: "Fernanda Costa",
    role: "Gerente de Suporte",
    company: "Operadora LogTech",
    body: "Implementação ágil e resultado real. Em 4 semanas já tínhamos o sistema rodando e gerando economia mensurável.",
  },
  {
    name: "Marcos Oliveira",
    role: "CEO",
    company: "Startup SaaS Hub",
    body: "A plataforma sob medida que construíram escala com nosso crescimento. Arquitetura pensada para o futuro, não só para hoje.",
  },
  {
    name: "Juliana Santos",
    role: " Diretora Executiva",
    company: "Portal Financeiro",
    body: "O suporte contínuo faz toda a diferença. Não é só deploy e sumiço, evolução constante da solução.",
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
    <section className="relative overflow-hidden bg-void-black px-[24px] py-[80px] md:px-[48px] md:py-[96px] lg:px-[80px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
            Depoimentos
          </p>
          <h2 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
            Quem confia na BCOMM.
          </h2>
        </AnimatedSection>
      </div>

      <div className="relative mt-[48px] md:mt-[64px]">
        {/* Gradient overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[80px] bg-gradient-to-r from-void-black to-transparent md:w-[160px]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l from-void-black to-transparent md:w-[160px]" />

        {/* Row 1: scrolling left */}
        <Marquee pauseOnHover repeat={3} className="[--duration:50s]">
          {testimonials.map((t) => (
            <TestimonialCard key={`r1-${t.name}`} {...t} />
          ))}
        </Marquee>

        {/* Row 2: scrolling right (reversed) */}
        <Marquee pauseOnHover reverse repeat={3} className="mt-[16px] [--duration:50s]">
          {testimonials.map((t) => (
            <TestimonialCard key={`r2-${t.name}`} {...t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
