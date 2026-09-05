import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center bg-void-black px-[24px] text-center">
      <h1 className="font-playfair text-[72px] font-normal text-white">404</h1>
      <p className="mt-[16px] text-[18px] text-ash">
        Esta página não existe ou foi movida.
      </p>
      <div className="mt-[32px] flex flex-col gap-[12px]">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-[8px] rounded-[9999px] border border-graphite bg-transparent px-[24px] py-[12px] text-[16px] text-white transition-all hover:border-white hover:bg-white hover:text-black"
        >
          Voltar ao início
        </Link>
        <Link
          href="/servicos"
          className="inline-flex items-center justify-center gap-[8px] rounded-[9999px] border border-transparent px-[24px] py-[12px] text-[16px] text-bone transition-all hover:border-graphite hover:bg-white hover:text-black"
        >
          Ver serviços
        </Link>
      </div>
    </main>
  );
}
