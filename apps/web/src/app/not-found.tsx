import Link from "next/link";
import { PageIntro } from "@/design-system/patterns/PageIntro";
import { PageShell } from "@/design-system/patterns/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="ERRO 404"
        title="Página não encontrada"
        description="O endereço que você procurou não está disponível."
      >
        <Link href="/">Voltar para a página inicial</Link>
      </PageIntro>
    </PageShell>
  );
}
