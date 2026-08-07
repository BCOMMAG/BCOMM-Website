import { AnimatedSection } from "./AnimatedSection";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center bg-bcomm-black px-[24px] pt-[80px] md:px-[48px] lg:px-[80px]">
      <div className="mx-auto w-full max-w-[1200px]">
        <AnimatedSection>
          <h1
            className="font-inter-tight text-[36px] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-[48px] md:text-[56px] md:tracking-[-0.02em] lg:text-[64px] xl:text-[80px]"
          >
            Tecnologia que comunica.
            <br />
            <span className="text-bcomm-secondary">Soluções que funcionam.</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mt-[24px] max-w-[560px] text-[17px] font-normal leading-[1.47] tracking-[-0.022em] text-bcomm-secondary md:mt-[32px] md:text-[19px]">
            Automação, integrações e agentes de IA construídos com engenharia de verdade — para empresas que precisam de resultados, não de promessas.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-[40px] flex flex-col gap-[12px] sm:flex-row md:mt-[48px]">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-[980px] bg-bcomm-action px-[20px] py-[12px] text-[15px] font-medium text-white transition-colors hover:bg-bcomm-action/90 md:px-[24px] md:py-[14px]"
            >
              Agende uma conversa
            </a>
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center rounded-[980px] bg-bcomm-ink px-[20px] py-[12px] text-[15px] font-medium text-white transition-colors hover:bg-bcomm-surface-1 md:px-[24px] md:py-[14px]"
            >
              Conheça as soluções
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
