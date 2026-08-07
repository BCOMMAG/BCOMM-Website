import { AnimatedSection } from "./AnimatedSection";

export function Cta() {
  return (
    <section id="contato" className="bg-bcomm-black px-[24px] py-[80px] md:px-[48px] md:py-[120px] lg:py-[160px]">
      <div className="mx-auto max-w-[800px] text-center">
        <AnimatedSection>
          <h2 className="font-inter-tight text-[32px] font-medium leading-[1.1] tracking-[-0.02em] text-white sm:text-[40px] md:text-[48px] lg:text-[56px]">
            Pronto para resolver o que importa?
          </h2>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <p className="mx-auto mt-[20px] max-w-[480px] text-[17px] leading-[1.47] text-bcomm-secondary md:mt-[24px] md:text-[19px]">
            Vamos conversar sobre como a tecnologia pode transformar a comunicação e a operação da sua empresa.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="mt-[40px] md:mt-[48px]">
            <a
              href="mailto:contato@bcomm.com.br"
              className="inline-flex items-center justify-center rounded-[980px] bg-bcomm-action px-[28px] py-[14px] text-[16px] font-medium text-white transition-colors hover:bg-bcomm-action/90 md:px-[32px] md:py-[16px] md:text-[17px]"
            >
              Fale com a gente
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
