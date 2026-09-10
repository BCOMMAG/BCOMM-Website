"use client";

import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { faqItems } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="border-t border-graphite bg-transparent px-[24px] py-[80px] md:px-[48px] md:py-[112px]">
      <div className="mx-auto max-w-[900px]">
        <AnimatedSection>
          <div className="text-center">
            <p className="font-mono text-[12px] uppercase tracking-[0.05em] text-ash">
              Dúvidas Frequentes
            </p>
            <h2 className="mt-[8px] text-[32px] font-normal leading-[1.2] tracking-[-0.03em] text-white sm:text-[40px] md:text-[48px]">
              Perguntas & Respostas
            </h2>
            <p className="mt-[12px] text-[16px] text-ash">
              Tudo o que você precisa saber sobre como trabalhamos e os resultados que entregamos.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-[48px] flex flex-col gap-[12px]">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <AnimatedSection key={item.question} delay={idx * 0.05}>
                <div className="overflow-hidden rounded-[12px] border border-graphite bg-[#0b0b0c]/80 backdrop-blur-[12px] transition-colors hover:border-iron">
                  <button
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between p-[20px] text-left sm:p-[24px]"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-[16px] text-[16px] font-medium text-white sm:text-[18px]">
                      {item.question}
                    </span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`shrink-0 text-iris transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-white" : ""
                      }`}
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="border-t border-graphite/50 px-[20px] pb-[24px] pt-[16px] text-[15px] leading-[1.7] text-bone sm:px-[24px]">
                      {item.answer}
                    </div>
                  )}
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
