import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://agent-bcomm.space" },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.label,
        ...(item.href ? { item: `https://agent-bcomm.space${item.href}` } : {}),
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="font-mono text-[12px] text-ash">
        <ol className="flex flex-wrap items-center gap-[8px]">
          <li>
            <Link href="/" className="transition-colors hover:text-bone">Início</Link>
          </li>
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-[8px]">
              <span className="text-charcoal">/</span>
              {item.href ? (
                <Link href={item.href} className="transition-colors hover:text-bone">{item.label}</Link>
              ) : (
                <span className="text-bone">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
