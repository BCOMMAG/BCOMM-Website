import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { blogPosts } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog | Dicas de Websites, Landing Pages, E-commerce e Automação com IA",
  description:
    "Artigos sobre criação de websites, landing pages, e-commerce e automação com IA. Dicas práticas para empresas.",
  keywords: [
    "blog tecnologia",
    "dicas landing page",
    "como criar site",
    "e-commerce dicas",
    "automação com IA",
  ],
  openGraph: {
    title: "Blog BCOMM | Websites, Landing Pages, E-commerce e Automação",
    description: "Artigos e dicas sobre tecnologia para empresas.",
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog BCOMM",
    description: "Artigos sobre websites, landing pages, e-commerce e automação com IA.",
    url: "https://agent-bcomm.space/blog",
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
          <Breadcrumbs items={[{ label: "Blog" }]} />

          <div className="mt-[32px]">
            <p className="font-mono text-[12px] uppercase tracking-[0.025em] text-ash">
              Blog
            </p>
            <h1 className="mt-[8px] text-[36px] font-normal leading-[1.2] tracking-[-0.05em] text-white sm:text-[44px] md:text-[56px]">
              Conteúdo que agrega
            </h1>
            <p className="mt-[16px] max-w-[600px] text-[18px] leading-[1.5] text-ash">
              Artigos sobre websites, landing pages, e-commerce e automação com IA. Dicas práticas baseadas em dados reais.
            </p>
          </div>

          <div className="mt-[64px] flex flex-col gap-[24px]">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-[16px] border border-graphite bg-[#0b0b0c] p-[32px] transition-all duration-500 hover:-translate-y-1 hover:border-iron hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)] md:p-[48px]"
              >
                <div className="flex flex-col gap-[12px] md:flex-row md:items-start md:justify-between">
                  <div className="max-w-[700px]">
                    <div className="flex items-center gap-[12px]">
                      <span className="rounded-[9999px] border border-graphite px-[12px] py-[4px] font-mono text-[11px] uppercase text-ash">
                        {post.category}
                      </span>
                      <span className="font-mono text-[12px] text-charcoal">{post.readTime}</span>
                    </div>
                    <h2 className="mt-[12px] text-[20px] font-semibold text-white transition-colors group-hover:text-iris-glow md:text-[24px]">
                      {post.title}
                    </h2>
                    <p className="mt-[8px] text-[16px] leading-[1.6] text-ash">
                      {post.description}
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-[6px] text-[14px] font-normal text-iris transition-colors group-hover:text-iris-glow">
                    Ler artigo
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <p className="mt-[12px] font-mono text-[12px] text-charcoal">
                  {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
