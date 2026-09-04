export function Footer() {
  return (
    <footer className="border-t border-graphite bg-void-black px-[24px] py-[32px] md:px-[48px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-[32px] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-[12px]">
            <img
              src="/logo.png"
              alt=""
              className="h-[64px] w-auto opacity-60"
              aria-hidden="true"
            />
            <span className="text-[14px] font-normal text-iron">
              © {new Date().getFullYear()} BCOMM Comunicação Inteligente
            </span>
          </div>

          <div className="flex flex-col gap-[16px] md:flex-row md:items-center md:gap-[32px]">
            <nav className="flex gap-[24px]" aria-label="Serviços">
              <a href="/servicos/websites" className="text-[14px] font-normal text-iron transition-colors hover:text-bone">
                Websites
              </a>
              <a href="/servicos/ecommerce" className="text-[14px] font-normal text-iron transition-colors hover:text-bone">
                E-commerce
              </a>
              <a href="/servicos/automacao" className="text-[14px] font-normal text-iron transition-colors hover:text-bone">
                Automação
              </a>
            </nav>

            <div className="flex gap-[24px]">
              <a href="/blog" className="text-[14px] font-normal text-iron transition-colors hover:text-bone">
                Blog
              </a>
              <a href="#contato" className="text-[14px] font-normal text-iron transition-colors hover:text-bone">
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
