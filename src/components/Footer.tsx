export function Footer() {
  return (
    <footer className="border-t border-graphite bg-void-black px-[24px] py-[32px] md:px-[48px]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between">
        <img
          src="/logo.png"
          alt="BCOMM"
          className="h-[18px] w-auto opacity-60"
        />
        <div className="flex gap-[24px]">
          <a href="#" className="text-[14px] font-normal text-iron transition-colors hover:text-bone">
            Privacidade
          </a>
          <a href="#" className="text-[14px] font-normal text-iron transition-colors hover:text-bone">
            Termos
          </a>
        </div>
      </div>
    </footer>
  );
}
