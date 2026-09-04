"use client";

import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

const WHATSAPP_NUMBER = "554196398023";

interface FormErrors {
  nome?: string;
  mensagem?: string;
}

export function Contact() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const e: FormErrors = {};

    if (!nome.trim()) {
      e.nome = "Nome é obrigatório";
    } else if (nome.trim().length > 100) {
      e.nome = "Máximo de 100 caracteres";
    }

    if (!mensagem.trim()) {
      e.mensagem = "Mensagem é obrigatória";
    } else if (mensagem.trim().length > 500) {
      e.mensagem = "Máximo de 500 caracteres";
    }

    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    const texto = encodeURIComponent(
      `Olá, sou ${nome.trim()}.\n\n${mensagem.trim()}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, "_blank");
  };

  return (
    <section id="contato" className="border-t border-graphite bg-void-black px-[24px] py-[96px] md:px-[48px] md:py-[144px] lg:py-[192px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <div className="grid gap-[48px] md:grid-cols-[2fr_1fr] md:gap-[0px]">
            <div className="flex flex-col justify-between border-b border-graphite pb-[48px] md:border-b-0 md:border-r md:border-graphite md:pr-[48px] md:pb-0">
              <div>
                <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
                  Contato
                </p>
                <h2 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
                  Fale Conosco
                </h2>
                <p className="mt-[16px] max-w-[480px] text-[18px] leading-[1.5] text-ash">
                  Monte sua mensagem e envie direto pelo WhatsApp. Respondemos rapidamente.
                </p>
              </div>

              <div className="mt-[48px] flex flex-col gap-[24px] md:mt-[64px]">
                <div>
                  <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
                    WhatsApp
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-[4px] font-mono text-[16px] text-iris transition-colors hover:text-iris-glow"
                  >
                    (41) 96398-023
                  </a>
                </div>

                <div>
                  <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
                    Email
                  </p>
                  <a
                    href="mailto:contato@agent-bcomm.space"
                    className="mt-[4px] font-mono text-[16px] text-iris transition-colors hover:text-iris-glow"
                  >
                    contato@agent-bcomm.space
                  </a>
                </div>

                <div>
                  <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
                    Redes Sociais
                  </p>
                  <div className="mt-[8px] flex gap-[16px]">
                    <a
                      href="https://instagram.com/bcomm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-graphite text-ash transition-all duration-200 hover:border-iris hover:text-iris"
                      aria-label="Instagram"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                      </svg>
                    </a>
                    <a
                      href="https://facebook.com/bcomm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-graphite text-ash transition-all duration-200 hover:border-iris hover:text-iris"
                      aria-label="Facebook"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:pl-[48px]">
              <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]" noValidate>
                <div>
                  <label className="mb-[6px] block font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
                    Seu nome
                  </label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value.slice(0, 100))}
                    placeholder="Como prefere ser chamado?"
                    className="input-field"
                  />
                  {errors.nome && (
                    <p className="mt-[4px] text-[12px] text-alarm">{errors.nome}</p>
                  )}
                </div>

                <div>
                  <label className="mb-[6px] block font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
                    Sua mensagem
                  </label>
                  <textarea
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value.slice(0, 500))}
                    placeholder="Conte o que precisa. Quanto mais detalhes, melhor a gente te atende."
                    rows={5}
                    className="input-field resize-y"
                  />
                  <div className="mt-[4px] flex justify-between">
                    {errors.mensagem ? (
                      <p className="text-[12px] text-alarm">{errors.mensagem}</p>
                    ) : (
                      <span />
                    )}
                    <p className="font-mono text-[12px] text-charcoal">
                      {mensagem.length}/500
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-[8px] flex w-full items-center justify-center gap-[8px] rounded-[9999px] bg-[#25D366] px-[24px] py-[14px] text-[16px] font-normal text-white transition-all duration-200 hover:brightness-110"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enviar no WhatsApp
                </button>
              </form>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
