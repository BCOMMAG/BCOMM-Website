import { AnimatedSection } from "./AnimatedSection";

export function Cta() {
  return (
    <section id="contato" className="bg-void-black px-[24px] py-[80px] md:px-[48px] md:py-[96px] lg:py-[144px]">
      <div className="mx-auto max-w-[800px] text-center">
        <AnimatedSection>
          <h2 className="text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
            Pronto para resolver o que importa?
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="mx-auto mt-[20px] max-w-[480px] text-[18px] leading-[1.5] text-ash md:mt-[24px]">
            Vamos conversar sobre como a tecnologia pode transformar a comunicação e a operação da sua empresa.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="mt-[40px] md:mt-[48px]">
            <a
              href="mailto:contato@bcomm.com.br"
              className="inline-flex items-center justify-center rounded-[6px] border border-graphite bg-transparent px-[24px] py-[14px] text-[16px] font-normal text-white transition-colors hover:border-white/30 md:px-[32px] md:py-[16px]"
            >
              Fale com a gente
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
