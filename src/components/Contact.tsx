"use client";

import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

const WHATSAPP_NUMBER = "554196398023";

const serviceOptions = [
  "Website Institucional",
  "Landing Page de Alta Conversão",
  "E-commerce / Loja Virtual",
  "Agente de IA / Atendimento 24h",
  "Integração de Sistemas",
  "Outro Projeto Sob Medida",
];

interface FormErrors {
  nome?: string;
  mensagem?: string;
}

export function Contact() {
  const [nome, setNome] = useState("");
  const [selectedService, setSelectedService] = useState<string>("Website Institucional");
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
      `Olá! Meu nome é ${nome.trim()}.\n\nInteresse principal: [${selectedService}]\n\nDetalhes do projeto:\n${mensagem.trim()}`
    );

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, "_blank");
  };

  return (
    <section id="contato" className="border-t border-graphite bg-transparent px-[20px] py-[80px] md:px-[48px] md:py-[120px] lg:px-[80px]">
      <div className="mx-auto max-w-[1240px]">
        <AnimatedSection>
          {/* White Island Container: Card de Conversão Imediata em Fundo Branco */}
          <div className="rounded-[32px] bg-white p-[32px] text-neutral-900 shadow-[0_24px_70px_rgba(0,0,0,0.45),0_0_50px_rgba(255,255,255,0.15)] md:p-[56px] lg:p-[64px]">
            <div className="grid gap-[48px] md:grid-cols-[1.8fr_2fr] md:gap-[0px]">
              
              {/* Coluna Esquerda: Informações e Status Online */}
              <div className="flex flex-col justify-between border-b border-neutral-200 pb-[40px] md:border-b-0 md:border-r md:border-neutral-200 md:pb-0 md:pr-[48px]">
                <div>
                  <div className="inline-flex items-center gap-[8px] rounded-full border border-emerald-600/30 bg-emerald-50 px-[12px] py-[5px] text-[11px] font-mono font-semibold text-emerald-700">
                    <span className="h-[6px] w-[6px] rounded-full bg-emerald-600 animate-pulse" />
                    SISTEMA ONLINE • ATENDIMENTO IMEDIATO 24/7
                  </div>

                  <h2 className="mt-[20px] text-[32px] font-semibold leading-[1.15] tracking-[-0.04em] text-neutral-950 sm:text-[42px] md:text-[50px]">
                    Solicitar Proposta
                  </h2>
                  <p className="mt-[16px] max-w-[480px] text-[15px] leading-[1.6] text-neutral-600 sm:text-[17px]">
                    Sem esperas de dias por retorno comercial. Nosso sistema inteligente processa sua demanda em minutos a qualquer hora e direciona seu projeto com clareza.
                  </p>
                </div>

                <div className="mt-[40px] flex flex-col gap-[20px] md:mt-[60px]">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-neutral-400 font-semibold">
                      WhatsApp Direto
                    </p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-[4px] inline-block font-mono text-[17px] font-semibold text-neutral-900 transition-colors hover:text-iris"
                    >
                      (41) 96398-023
                    </a>
                  </div>

                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-neutral-400 font-semibold">
                      Canal Institucional
                    </p>
                    <a
                      href="mailto:contato@agent-bcomm.space"
                      className="mt-[4px] inline-block font-mono text-[16px] font-semibold text-neutral-900 transition-colors hover:text-iris"
                    >
                      contato@agent-bcomm.space
                    </a>
                  </div>

                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.05em] text-neutral-400 font-semibold">
                      Redes Sociais
                    </p>
                    <div className="mt-[8px] flex gap-[12px]">
                      <a
                        href="https://www.instagram.com/bcomm.br"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-700 transition-all duration-200 hover:border-iris hover:bg-iris hover:text-white"
                        aria-label="Instagram"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <circle cx="12" cy="12" r="5" />
                          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                        </svg>
                      </a>
                      <a
                        href="https://www.facebook.com/bcommagent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-700 transition-all duration-200 hover:border-iris hover:bg-iris hover:text-white"
                        aria-label="Facebook"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coluna Direita: Formulário de Alta Conversão */}
              <div className="md:pl-[48px]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]" noValidate>
                  <div>
                    <label className="mb-[10px] block font-mono text-[11px] uppercase tracking-[0.05em] text-neutral-500 font-semibold">
                      1. Selecione o tipo de projeto
                    </label>
                    <div className="flex flex-wrap gap-[8px]">
                      {serviceOptions.map((opt) => {
                        const isSelected = selectedService === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setSelectedService(opt)}
                            className={`rounded-[10px] border px-[13px] py-[8px] text-[13px] font-medium transition-all duration-200 ${
                              isSelected
                                ? "border-iris bg-iris text-white shadow-sm"
                                : "border-neutral-200 bg-neutral-50 text-neutral-700 hover:border-neutral-300 hover:bg-neutral-100"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="mb-[6px] block font-mono text-[11px] uppercase tracking-[0.05em] text-neutral-500 font-semibold">
                      2. Seu nome ou empresa
                    </label>
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value.slice(0, 100))}
                      placeholder="Nome completo ou nome da empresa"
                      className="w-full rounded-[10px] border border-neutral-200 bg-neutral-50 px-[16px] py-[13px] text-[15px] text-neutral-900 placeholder:text-neutral-400 outline-none transition-all duration-200 focus:border-iris focus:bg-white focus:ring-2 focus:ring-iris/20"
                    />
                    {errors.nome && (
                      <p className="mt-[4px] text-[12px] text-red-600">{errors.nome}</p>
                    )}
                  </div>

                  <div>
                    <label className="mb-[6px] block font-mono text-[11px] uppercase tracking-[0.05em] text-neutral-500 font-semibold">
                      3. Detalhes do projeto
                    </label>
                    <textarea
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value.slice(0, 500))}
                      placeholder="Descreva seu objetivo, prazo estimado ou dúvidas sobre o projeto."
                      rows={4}
                      className="w-full resize-y rounded-[10px] border border-neutral-200 bg-neutral-50 px-[16px] py-[13px] text-[15px] text-neutral-900 placeholder:text-neutral-400 outline-none transition-all duration-200 focus:border-iris focus:bg-white focus:ring-2 focus:ring-iris/20"
                    />
                    <div className="mt-[4px] flex justify-between">
                      {errors.mensagem ? (
                        <p className="text-[12px] text-red-600">{errors.mensagem}</p>
                      ) : (
                        <span />
                      )}
                      <p className="font-mono text-[12px] text-neutral-400">
                        {mensagem.length}/500
                      </p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-[8px] flex w-full items-center justify-center gap-[10px] rounded-full bg-[#25D366] px-[24px] py-[15px] text-[16px] font-semibold text-white shadow-lg transition-all duration-200 hover:brightness-105 active:scale-98"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Iniciar Atendimento Imediato no WhatsApp
                  </button>
                </form>
              </div>

            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
