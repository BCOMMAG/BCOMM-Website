import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | BCOMM",
  description:
    "Privacy Policy of BCOMM Comunicação Inteligente. How we collect, use and protect your personal data.",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Privacy Policy | BCOMM",
    description: "Privacy Policy of BCOMM Comunicação Inteligente.",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-void-black pt-[120px] pb-[96px]">
        <div className="mx-auto max-w-[800px] px-[24px] md:px-[48px]">
          <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy" }]} />

          <div className="mt-[32px]">
            <h1 className="text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px]">
              Privacy Policy
            </h1>
            <p className="mt-[8px] font-mono text-[12px] text-charcoal">
              Last updated: 09/05/2026
            </p>
          </div>

          <div className="mt-[48px] flex flex-col gap-[32px] text-[16px] leading-[1.8] text-ash">
            <section>
              <h2 className="mb-[12px] text-[20px] font-semibold text-white">1. Data collected</h2>
              <p>
                When you fill out our contact form, we collect: name, email address, phone number, and the message sent. This data is used exclusively to respond to your inquiry.
              </p>
            </section>

            <section>
              <h2 className="mb-[12px] text-[20px] font-semibold text-white">2. Use of data</h2>
              <p>
                Collected data is used only for: responding to contact messages, sending commercial proposals when requested, and improving our services based on received feedback. We do not sell or share data with third parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="mb-[12px] text-[20px] font-semibold text-white">3. Cookies</h2>
              <p>
                Our website does not use tracking cookies. The only cookie present is the session cookie required for website functionality.
              </p>
            </section>

            <section>
              <h2 className="mb-[12px] text-[20px] font-semibold text-white">4. Security</h2>
              <p>
                Your data is transmitted encrypted (HTTPS) and stored on secure servers. We implement technical and organizational measures to protect your information against unauthorized access, loss, or alteration.
              </p>
            </section>

            <section>
              <h2 className="mb-[12px] text-[20px] font-semibold text-white">5. Your rights</h2>
              <p>
                Under the LGPD (Brazilian General Data Protection Law), you have the right to: access your data, correct incomplete or outdated data, request deletion of your data, and revoke consent for data use. To exercise these rights, contact us at contato@agent-bcomm.space.
              </p>
            </section>

            <section>
              <h2 className="mb-[12px] text-[20px] font-semibold text-white">6. Data retention</h2>
              <p>
                Your data is retained for the time necessary to fulfill the purpose for which it was collected. After the request is fulfilled, data may be kept for up to 12 months for commercial reference purposes.
              </p>
            </section>

            <section>
              <h2 className="mb-[12px] text-[20px] font-semibold text-white">7. Contact</h2>
              <p>
                For questions about this policy or about the treatment of your data, contact us:
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
