"use client";

import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

const countries = [
  { code: "+55", label: "BR +55" },
  { code: "+1", label: "US +1" },
  { code: "+54", label: "AR +54" },
  { code: "+351", label: "PT +351" },
  { code: "+34", label: "ES +34" },
  { code: "+44", label: "UK +44" },
  { code: "+49", label: "DE +49" },
  { code: "+33", label: "FR +33" },
  { code: "+39", label: "IT +39" },
  { code: "+52", label: "MX +52" },
];

interface FormErrors {
  nome?: string;
  email?: string;
  telefone?: string;
  mensagem?: string;
}

export function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+55");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): FormErrors => {
    const e: FormErrors = {};

    if (!nome.trim()) {
      e.nome = "Nome é obrigatório";
    } else if (nome.trim().length > 100) {
      e.nome = "Máximo de 100 caracteres";
    }

    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      e.email = "Email inválido";
    } else if (email.trim().length > 254) {
      e.email = "Máximo de 254 caracteres";
    }

    if (!telefone.trim()) {
      e.telefone = "Telefone é obrigatório";
    } else {
      const digits = telefone.replace(/\D/g, "");
      if (countryCode === "+55") {
        if (digits.length < 10 || digits.length > 11) {
          e.telefone = " telefone BR: DDD + 9 + 8 dígitos";
        }
      } else if (digits.length < 7 || digits.length > 15) {
        e.telefone = "Telefone inválido";
      }
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

    const body = [
      `Nome: ${nome.trim()}`,
      email.trim() ? `Email: ${email.trim()}` : null,
      `Telefone: ${countryCode} ${telefone.trim()}`,
      ``,
      `Mensagem: ${mensagem.trim()}`,
    ]
      .filter(Boolean)
      .join("%0A");

    const subject = encodeURIComponent(`Contato via Website - ${nome.trim()}`);
    window.open(`mailto:contato@agent-bcomm.space?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contato" className="border-t border-graphite bg-void-black px-[24px] py-[96px] md:px-[48px] md:py-[144px] lg:py-[192px]">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection>
          <div className="grid gap-[48px] md:grid-cols-[2fr_1fr] md:gap-[0px]">
            {/* Left column: info */}
            <div className="flex flex-col justify-between border-b border-graphite pb-[48px] md:border-b-0 md:border-r md:border-graphite md:pr-[48px] md:pb-0">
              <div>
                <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
                  Contato
                </p>
                <h2 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
                  Fale Conosco.
                </h2>
                <p className="mt-[16px] max-w-[480px] text-[18px] leading-[1.5] text-ash">
                  Preencha o formulário ao lado ou entre em contato diretamente pelo email. Respondemos em até 1 dia útil.
                </p>
              </div>

              <div className="mt-[48px] flex flex-col gap-[24px] md:mt-[64px]">
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
                    Localização
                  </p>
                  <p className="mt-[4px] font-mono text-[16px] text-bone">
                    Curitiba, PR — Brasil
                  </p>
                </div>
              </div>
            </div>

            {/* Right column: form */}
            <div className="md:pl-[48px]">
              {submitted ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                  <p className="text-[24px] font-medium text-white">
                    Obrigado!
                  </p>
                  <p className="mt-[12px] text-[16px] text-ash">
                    Seu email client deve abrir em instantes.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setNome("");
                      setEmail("");
                      setTelefone("");
                      setMensagem("");
                    }}
                    className="mt-[24px] rounded-[9999px] border border-graphite bg-transparent px-[20px] py-[10px] text-[14px] text-bone transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]" noValidate>
                  {/* Nome */}
                  <div>
                    <label className="mb-[6px] block font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
                      Nome *
                    </label>
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value.slice(0, 100))}
                      placeholder="Seu nome"
                      className="input-field"
                    />
                    {errors.nome && (
                      <p className="mt-[4px] text-[12px] text-alarm">{errors.nome}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-[6px] block font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value.slice(0, 254))}
                      placeholder="seu@email.com"
                      className="input-field"
                    />
                    {errors.email && (
                      <p className="mt-[4px] text-[12px] text-alarm">{errors.email}</p>
                    )}
                  </div>

                  {/* Telefone */}
                  <div>
                    <label className="mb-[6px] block font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
                      Telefone *
                    </label>
                    <div className="flex gap-[8px]">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="select-field w-[100px] shrink-0"
                      >
                        {countries.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value.slice(0, 15))}
                        placeholder={countryCode === "+55" ? "41 99999-0000" : "+1 555 123 4567"}
                        className="input-field flex-1"
                      />
                    </div>
                    {errors.telefone && (
                      <p className="mt-[4px] text-[12px] text-alarm">{errors.telefone}</p>
                    )}
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label className="mb-[6px] block font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
                      Mensagem *
                    </label>
                    <textarea
                      value={mensagem}
                      onChange={(e) => setMensagem(e.target.value.slice(0, 500))}
                      placeholder="Como podemos ajudar?"
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

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-slide mt-[8px] w-full rounded-[9999px] border border-graphite bg-transparent px-[24px] py-[12px] text-[16px] font-normal text-white"
                  >
                    Enviar mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
