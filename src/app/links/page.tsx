import { LinktreeMobile } from "@/components/linktree/LinktreeMobile";
import { LinktreeDesktop } from "@/components/linktree/LinktreeDesktop";

export default function LinksPage() {
  return (
    <>
      <div className="block md:hidden">
        <LinktreeMobile />
      </div>
      <div className="hidden md:block">
        <LinktreeDesktop />
      </div>
    </>
  );
}
