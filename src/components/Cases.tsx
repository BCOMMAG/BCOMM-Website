import { cases } from "@/lib/constants";
import { AnimatedSection } from "./AnimatedSection";

export function Cases() {
  return (
    <section id="cases" className="bg-bcomm-gray px-[24px] py-[80px] md:px-[48px] md:py-[120px] lg:px-[80px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-bcomm-secondary md:text-[14px]">
            Cases
          </p>
          <h2 className="mt-[8px] font-inter-tight text-[32px] font-medium leading-[1.1] tracking-[-0.015em] text-bcomm-ink sm:text-[40px] md:text-[48px]">
            Resultados que falam por si.
          </h2>
        </AnimatedSection>

        <div className="mt-[48px] grid grid-cols-1 gap-[20px] md:grid-cols-3 md:gap-[24px]">
          {cases.map((c, i) => (
            <AnimatedSection key={c.client} delay={i * 0.1}>
              <div className="rounded-[16px] bg-white p-[28px] transition-shadow duration-300 hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] md:p-[32px]">
                <span className="font-inter-tight text-[48px] font-semibold leading-[1] tracking-[-0.03em] text-bcomm-action md:text-[56px]">
                  {c.metric}
                </span>
                <h3 className="mt-[16px] font-inter-tight text-[20px] font-semibold leading-[1.3] text-bcomm-ink md:text-[22px]">
                  {c.label}
                </h3>
                <p className="mt-[8px] text-[15px] leading-[1.5] text-bcomm-secondary">
                  {c.description}
                </p>
                <p className="mt-[20px] border-t border-bcomm-border-soft pt-[16px] text-[13px] font-medium uppercase tracking-[0.05em] text-bcomm-border-med">
                  {c.client}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
