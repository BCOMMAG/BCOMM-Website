import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Política de Privacidade | BCOMM",
  description:
    "Política de Privacidade da BCOMM Comunicação Inteligente. Como coletamos, usamos e protegemos seus dados pessoais.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Política de Privacidade | BCOMM",
    description: "Política de Privacidade da BCOMM Comunicação Inteligente.",
  },
};

export default function PoliticaPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-void-black pt-[120px] pb-[96px]">
        <div className="mx-auto max-w-[800px] px-[24px] md:px-[48px]">
          <Breadcrumbs items={[{ label: "Política de Privacidade" }]} />

          <div className="mt-[32px]">
            <h1 className="text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px]">
              Política de Privacidade
            </h1>
            <p className="mt-[8px] font-mono text-[12px] text-charcoal">
              Última atualização: 05/09/2026
            </p>
          </div>

          <div className="mt-[48px] flex flex-col gap-[32px] text-[16px] leading-[1.8] text-ash">
            <section>
              <h2 className="mb-[12px] text-[20px] font-semibold text-white">1. Dados coletados</h2>
              <p>
                Quando você preenche nosso formulário de contato, coletamos: nome, endereço de email, telefone e a mensagem enviada. Esses dados são usados exclusivamente para responder sua solicitação.
              </p>
            </section>

            <section>
              <h2 className="mb-[12px] text-[20px] font-semibold text-white">2. Uso dos dados</h2>
              <p>
                Os dados coletados são utilizados apenas para: responder mensagens de contato, enviar propostas comerciais quando solicitadas, e mejorar nossos serviços com base no feedback recebido. Não vendemos nem compartilhamos dados com terceiros para fins de marketing.
              </p>
            </section>

            <section>
              <h2 className="mb-[12px] text-[20px] font-semibold text-white">3. Cookies</h2>
              <p>
                Nosso site não utiliza cookies de rastreamento. O único cookie presente é o de sessão necessário para o funcionamento do site.
              </p>
            </section>

            <section>
              <h2 className="mb-[12px] text-[20px] font-semibold text-white">4. Segurança</h2>
              <p>
                Seus dados são transmitidos de forma criptografada (HTTPS) e armazenados em servidores seguros. Implementamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, perda ou alteração.
              </p>
            </section>

            <section>
              <h2 className="mb-[12px] text-[20px] font-semibold text-white">5. Seus direitos</h2>
              <p>
                Conforme a LGPD (Lei Geral de Proteção de Dados), você tem direito a: acessar seus dados, corrigir dados incompletos ou desatualizados, solicitar a exclusão de seus dados, e revogar o consentimento para uso de dados. Para exercer esses direitos, entre em contato pelo email contato@agent-bcomm.space.
              </p>
            </section>

            <section>
              <h2 className="mb-[12px] text-[20px] font-semibold text-white">6. Retenção de dados</h2>
              <p>
                Seus dados são retidos pelo tempo necessário para cumprir a finalidade para a qual foram coletados. Após o atendimento da solicitação, os dados podem ser mantidos por até 12 meses para fins de referência comercial.
              </p>
            </section>

            <section>
              <h2 className="mb-[12px] text-[20px] font-semibold text-white">7. Contato</h2>
              <p>
                Para dúvidas sobre esta política ou sobre o tratamento de seus dados, entre em contato:
              </p>
              <ul className="mt-[8px] flex flex-col gap-[4px]">
                <li>Email: <a href="mailto:contato@agent-bcomm.space" className="text-iris hover:text-iris-glow">contato@agent-bcomm.space</a></li>
                <li>WhatsApp: <a href="https://wa.me/554196398023" target="_blank" rel="noopener noreferrer" className="text-iris hover:text-iris-glow">(41) 96398-023</a></li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
