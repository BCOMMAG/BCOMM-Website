import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { blogPosts } from "@/lib/constants";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `https://agent-bcomm.space/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Organization",
      name: "BCOMM Comunicação Inteligente",
    },
    publisher: {
      "@type": "Organization",
      name: "BCOMM Comunicação Inteligente",
      logo: {
        "@type": "ImageObject",
        url: "https://agent-bcomm.space/logo.png",
      },
    },
    datePublished: post.date,
    url: `https://agent-bcomm.space/blog/${post.slug}`,
  };

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="min-h-screen bg-void-black pt-[120px] pb-[96px]">
        <article className="mx-auto max-w-[720px] px-[24px] md:px-[48px]">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />

          <div className="mt-[32px]">
            <div className="flex items-center gap-[12px]">
              <span className="rounded-[9999px] border border-graphite px-[12px] py-[4px] font-mono text-[11px] uppercase text-ash">
                {post.category}
              </span>
              <span className="font-mono text-[12px] text-charcoal">{post.readTime}</span>
            </div>
            <h1 className="mt-[16px] text-[32px] font-normal leading-[1.2] tracking-[-0.03em] text-white sm:text-[40px] md:text-[48px]">
              {post.title}
            </h1>
            <p className="mt-[12px] text-[18px] text-ash">
              {post.description}
            </p>
            <p className="mt-[8px] font-mono text-[12px] text-charcoal">
              {new Date(post.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}
            </p>
          </div>

          <div
            className="prose mt-[48px] text-[16px] leading-[1.8] text-bone"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, "<br/>").replace(/## (.*)/g, '<h2 class="mt-[32px] mb-[16px] text-[24px] font-semibold text-white">$1</h2>').replace(/### (.*)/g, '<h3 class="mt-[24px] mb-[12px] text-[18px] font-medium text-white">$1</h3>').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>').replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-iris hover:text-iris-glow underline">$1</a>') }}
          />

          {relatedPosts.length > 0 && (
            <div className="mt-[64px] border-t border-graphite pt-[32px]">
              <h2 className="text-[20px] font-semibold text-white">Artigos relacionados</h2>
              <div className="mt-[24px] flex flex-col gap-[16px]">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group rounded-[12px] border border-graphite bg-[#0b0b0c] p-[24px] transition-all hover:border-iron"
                  >
                    <h3 className="text-[16px] font-medium text-white transition-colors group-hover:text-iris-glow">
                      {rp.title}
                    </h3>
                    <p className="mt-[4px] text-[14px] text-ash">{rp.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-[64px] rounded-[16px] border border-graphite bg-[#0b0b0c] p-[32px] text-center">
            <h2 className="text-[20px] font-semibold text-white">
              Precisa de uma solução sob medida?
            </h2>
            <p className="mt-[8px] text-[14px] text-ash">
              A BCOMM cria websites, landing pages, e-commerces e automações com IA para empresas que precisam de resultado.
            </p>
            <Link
              href="/#contato"
              className="mt-[16px] inline-flex items-center gap-[8px] rounded-[9999px] border border-graphite bg-transparent px-[20px] py-[10px] text-[14px] text-white transition-all duration-200 hover:border-white hover:bg-white hover:text-black"
            >
              Fale conosco
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
