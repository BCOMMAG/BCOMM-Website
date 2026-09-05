import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact | Get in Touch with BCOMM",
  description:
    "Get in touch with BCOMM Comunicação Inteligente. WhatsApp, email and contact form for website, landing page, e-commerce and AI automation projects.",
  openGraph: {
    title: "Contact | Get in Touch with BCOMM",
    description: "Get in touch with BCOMM for technology projects.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-void-black pt-[120px] pb-[96px]">
        <div className="mx-auto max-w-[800px] px-[24px] md:px-[48px]">
          <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

          <div className="mt-[32px]">
            <h1 className="text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
              Contact
            </h1>
          </div>

          <div className="mt-[48px] flex flex-col gap-[40px]">
            <section>
              <h2 className="text-[24px] font-semibold text-white">WhatsApp</h2>
              <p className="mt-[8px] text-[16px] leading-[1.6] text-ash">
                Compose your message and send it directly via WhatsApp. We respond quickly.
              </p>
              <a
                href="https://wa.me/554196398023?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20BCOMM."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[16px] inline-flex items-center gap-[8px] rounded-[9999px] bg-[#25D366] px-[24px] py-[12px] text-[16px] font-normal text-white transition-all hover:brightness-110"
              >
                Open WhatsApp
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-white">Email</h2>
              <p className="mt-[8px] text-[16px] leading-[1.6] text-ash">
                For projects, partnerships or general inquiries:
              </p>
              <a
                href="mailto:contato@agent-bcomm.space"
                className="mt-[8px] text-[16px] text-iris hover:text-iris-glow"
              >
                contato@agent-bcomm.space
              </a>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-white">Social Media</h2>
              <div className="mt-[16px] flex flex-col gap-[8px]">
                <p>
                  Instagram:{" "}
                  <a href="https://www.instagram.com/bcomm.br" target="_blank" rel="noopener noreferrer" className="text-iris hover:text-iris-glow">
                    @bcomm.br
                  </a>
                </p>
                <p>
                  Facebook:{" "}
                  <a href="https://www.facebook.com/bcommagent" target="_blank" rel="noopener noreferrer" className="text-iris hover:text-iris-glow">
                    /bcommagent
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-[24px] font-semibold text-white">Location</h2>
              <p className="mt-[8px] text-[16px] leading-[1.6] text-ash">
                Curitiba, Paraná, Brazil. We serve businesses nationwide.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
