import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "E-commerce Personalizado | Loja Virtual Sob Medida | BCOMM",
  description:
    "E-commerces personalizados com checkout otimizado, integração de pagamento e gestão completa. Loja virtual que cresce com seu negócio.",
  keywords: [
    "e-commerce",
    "loja virtual",
    "loja online",
    "criar loja virtual",
    "desenvolvimento e-commerce",
    "loja online sob medida",
    "shopify alternative",
    "loja virtual Curitiba",
  ],
  openGraph: {
    title: "E-commerce Personalizado | BCOMM",
    description:
      "Lojas virtuais que crescem com o negócio. Catálogo, checkout, pagamentos e gestão integrados.",
  },
};

const features = [
  {
    title: "Catálogo Inteligente",
    description: "Filtros, busca, categorias e fichas técnicas. O cliente encontra o que quer em segundos.",
  },
  {
    title: "Checkout de Alta Conversão",
    description: "Processo de compra simplificado em uma página. Menos etapas, mais vendas.",
  },
  {
    title: "Pagamentos Integrados",
    description: "Stripe, PagSeguro, Mercado Pago, PIX, boleto. Múltiplas opções para o cliente escolher.",
  },
  {
    title: "Gestão em Tempo Real",
    description: "Estoque, pedidos, financeiro. Tudo atualizado instantaneamente. Painel completo para gestão.",
  },
  {
    title: "WhatsApp Commerce",
    description: "Integração direta com WhatsApp para confirmação de pedidos, suporte e recuperação de carrinho.",
  },
  {
    title: "Performance para Vender",
    description: "Páginas de produto que carregam em menos de 1.5 segundos. Velocidade é conversão.",
  },
];

const metrics = [
  { value: "180%", label: "Crescimento médio no faturamento online" },
  { value: "40%", label: "Aumento no ticket médio com checkout otimizado" },
  { value: "99.9%", label: "Uptime garantido com infraestrutura escalável" },
];

export default function EcommercePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "E-commerce Personalizado",
    provider: {
      "@type": "Organization",
      name: "BCOMM Comunicação Inteligente",
    },
    description: "Lojas virtuais personalizadas com checkout otimizado, integração de pagamento e gestão completa.",
    areaServed: "BR",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-void-black pt-[120px] pb-[96px]">
        <div className="mx-auto max-w-[1200px] px-[24px] md:px-[48px] lg:px-[80px]">
          <Breadcrumbs items={[{ label: "Serviços", href: "/servicos" }, { label: "E-commerce" }]} />

          <div className="mt-[32px]">
            <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
              E-commerce
            </p>
            <h1 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
              Loja virtual que cresce com seu negócio
            </h1>
            <p className="mt-[16px] max-w-[600px] text-[18px] leading-[1.5] text-ash">
              E-commerces personalizados com catálogo inteligente, checkout de alta conversão e gestão completa. Do produto à entrega, tudo integrado.
            </p>
          </div>

          <div className="mt-[48px] grid grid-cols-1 gap-[24px] sm:grid-cols-3">
            {metrics.map((m) => (
              <div key={m.label} className="rounded-[16px] border border-graphite bg-[#0b0b0c] p-[32px] text-center">
                <span className="font-mono text-[48px] font-normal leading-[1] text-iris">{m.value}</span>
                <p className="mt-[8px] text-[14px] text-ash">{m.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-[64px] grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-[16px] border border-graphite bg-[#0b0b0c] p-[32px]">
                <h3 className="text-[18px] font-semibold text-white">{f.title}</h3>
                <p className="mt-[8px] text-[14px] leading-[1.6] text-ash">{f.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-[96px] rounded-[16px] border border-graphite bg-[#0b0b0c] p-[32px] text-center md:p-[48px]">
            <h2 className="text-[24px] font-semibold text-white md:text-[32px]">
              Pronto para vender online?
            </h2>
            <p className="mt-[12px] text-[16px] text-ash">
              Vamos criar sua loja virtual personalizada, com foco em conversão e experiência do cliente.
            </p>
            <Link
              href="/#contato"
              className="mt-[24px] inline-flex items-center gap-[8px] rounded-[9999px] border border-graphite bg-transparent px-[24px] py-[12px] text-[16px] text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
            >
              Criar minha loja
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
