import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Sobre a BCOMM | Quem Somos",
  description:
    "Conheça a BCOMM Comunicação Inteligente. Empresa de tecnologia especializada em websites, landing pages, e-commerce e automação com IA para empresas no Brasil.",
  openGraph: {
    title: "Sobre a BCOMM | Quem Somos",
    description: "Empresa de tecnologia especializada em websites, landing pages, e-commerce e automação com IA.",
  },
};

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-void-black pt-[120px] pb-[96px]">
        <div className="mx-auto max-w-[800px] px-[24px] md:px-[48px]">
          <Breadcrumbs items={[{ label: "Sobre" }]} />

          <div className="mt-[32px]">
            <h1 className="text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
              Sobre a BCOMM
            </h1>
          </div>

          <div className="mt-[48px] flex flex-col gap-[32px] text-[16px] leading-[1.8] text-ash">
            <p>
              A BCOMM Comunicação Inteligente é uma empresa de tecnologia sediada em Curitiba, Paraná, Brasil. Fundada com o objetivo de resolver problemas reais de empresas por meio de engenharia de software e inteligência artificial.
            </p>

            <p>
              Nossa equipe trabalha com websites institucionais, landing pages de alta conversão, e-commerces personalizados, automação com IA, integrações de sistemas e atendimento inteligente. Cada projeto é construído do zero, sem templates genéricos, com foco em resultado mensurável.
            </p>

            <p>
              Atendemos empresas de todos os portes em todo o Brasil. Nosso processo começa por um diagnóstico gratuito, onde mapeamos os gargalos do seu negócio e identificamos onde a tecnologia gera mais impacto. Depois, entregamos em ciclos curtos, com deploy funcional a cada etapa.
            </p>

            <h2 className="text-[24px] font-semibold text-white">Nossos valores</h2>

            <ul className="flex flex-col gap-[16px]">
              <li><strong className="text-bone">Resultado antes de features.</strong> Cada funcionalidade precisa de uma métrica que justifique sua existência.</li>
              <li><strong className="text-bone">Código limpo.</strong> Escrevemos software que outros desenvolvedores conseguem manter e evoluir.</li>
              <li><strong className="text-bone">Transparência.</strong> O cliente acompanha cada etapa e entende o que está sendo feito e por quê.</li>
              <li><strong className="text-bone">Suporte contínuo.</strong> O projeto não termina no deploy. Monitoramos, iteramos e evoluimos juntos.</li>
            </ul>

            <h2 className="text-[24px] font-semibold text-white">Contato</h2>

            <div className="flex flex-col gap-[8px]">
              <p>Email: <a href="mailto:contato@agent-bcomm.space" className="text-iris hover:text-iris-glow">contato@agent-bcomm.space</a></p>
              <p>WhatsApp: <a href="https://wa.me/554196398023" target="_blank" rel="noopener noreferrer" className="text-iris hover:text-iris-glow">(41) 96398-023</a></p>
              <p>Localização: Curitiba, PR, Brasil</p>
              <p>Instagram: <a href="https://www.instagram.com/bcomm.br" target="_blank" rel="noopener noreferrer" className="text-iris hover:text-iris-glow">@bcomm.br</a></p>
              <p>Facebook: <a href="https://www.facebook.com/bcommagent" target="_blank" rel="noopener noreferrer" className="text-iris hover:text-iris-glow">/bcommagent</a></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
