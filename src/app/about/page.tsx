import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About BCOMM | Who We Are",
  description:
    "Learn about BCOMM Comunicação Inteligente. A technology company specialized in websites, landing pages, e-commerce and AI automation for businesses in Brazil.",
  openGraph: {
    title: "About BCOMM | Who We Are",
    description: "Technology company specialized in websites, landing pages, e-commerce and AI automation.",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-void-black pt-[120px] pb-[96px]">
        <div className="mx-auto max-w-[800px] px-[24px] md:px-[48px]">
          <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

          <div className="mt-[32px]">
            <h1 className="text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
              About BCOMM
            </h1>
          </div>

          <div className="mt-[48px] flex flex-col gap-[32px] text-[16px] leading-[1.8] text-ash">
            <p>
              BCOMM Comunicação Inteligente is a technology company based in Curitiba, Paraná, Brazil. We build software that solves real business problems through software engineering and artificial intelligence.
            </p>

            <p>
              Our team works with institutional websites, high-conversion landing pages, custom e-commerce platforms, AI-powered automation, system integrations, and intelligent customer support. Every project is built from scratch, with no generic templates, focused on measurable results.
            </p>

            <p>
              We serve businesses of all sizes across Brazil. Our process starts with a free diagnosis where we map your business bottlenecks and identify where technology creates the most impact. Then we deliver in short cycles, with functional deployment at every stage.
            </p>

            <h2 className="text-[24px] font-semibold text-white">Our values</h2>

            <ul className="flex flex-col gap-[16px]">
              <li><strong className="text-bone">Results before features.</strong> Every functionality must have a metric that justifies its existence.</li>
              <li><strong className="text-bone">Clean code.</strong> We write software that other developers can maintain and evolve.</li>
              <li><strong className="text-bone">Transparency.</strong> The client follows every step and understands what is being done and why.</li>
              <li><strong className="text-bone">Continuous support.</strong> The project does not end at deployment. We monitor, iterate, and evolve together.</li>
            </ul>

            <h2 className="text-[24px] font-semibold text-white">Contact</h2>

            <div className="flex flex-col gap-[8px]">
              <p>Email: <a href="mailto:contato@agent-bcomm.space" className="text-iris hover:text-iris-glow">contato@agent-bcomm.space</a></p>
              <p>WhatsApp: <a href="https://wa.me/554196398023" target="_blank" rel="noopener noreferrer" className="text-iris hover:text-iris-glow">(41) 96398-023</a></p>
              <p>Location: Curitiba, PR, Brazil</p>
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
