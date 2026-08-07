const footerLinks = {
  solucoes: [
    { label: "Automação com IA", href: "#solucoes" },
    { label: "Integrações", href: "#solucoes" },
    { label: "Atendimento Inteligente", href: "#solucoes" },
    { label: "Plataformas SaaS", href: "#solucoes" },
  ],
  empresa: [
    { label: "Sobre", href: "#sobre" },
    { label: "Processo", href: "#sobre" },
    { label: "Cases", href: "#cases" },
  ],
  contato: [
    { label: "contato@bcomm.com.br", href: "mailto:contato@bcomm.com.br" },
    { label: "Fale com a gente", href: "#contato" },
  ],
  redes: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
  ],
} as const;

function FooterColumn({ title, links }: { title: string; links: readonly { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="mb-[16px] text-[12px] font-medium uppercase tracking-[0.1em] text-bcomm-ink">
        {title}
      </h4>
      <ul className="flex flex-col gap-[10px]">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-[14px] leading-[1.4] text-bcomm-secondary transition-colors hover:text-bcomm-ink"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-bcomm-gray border-t border-bcomm-border-soft px-[24px] py-[48px] md:px-[48px] md:py-[64px] lg:px-[80px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 gap-[32px] md:grid-cols-4 md:gap-[48px]">
          <FooterColumn title="Soluções" links={footerLinks.solucoes} />
          <FooterColumn title="Empresa" links={footerLinks.empresa} />
          <FooterColumn title="Contato" links={footerLinks.contato} />
          <FooterColumn title="Redes" links={footerLinks.redes} />
        </div>

        <div className="mt-[48px] border-t border-bcomm-border-soft pt-[24px] md:mt-[64px]">
          <div className="flex flex-col items-start justify-between gap-[16px] md:flex-row md:items-center">
            <p className="font-inter-tight text-[16px] font-semibold tracking-[-0.02em] text-bcomm-ink">
              BCOMM
            </p>
            <p className="text-[12px] leading-[1.4] text-bcomm-secondary">
              © {new Date().getFullYear()} BCOMM Comunicação Inteligente. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
