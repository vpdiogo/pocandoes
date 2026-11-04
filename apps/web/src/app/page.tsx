import { PageIntro } from "@/design-system/patterns/PageIntro";
import { PageShell } from "@/design-system/patterns/PageShell";

export default function Home() {
  return (
    <PageShell>
      <PageIntro
        eyebrow="CULTURA CAPIXABA"
        title="Pocando ES"
        description="Agenda e guia cultural do Espírito Santo."
      >
        <p>Estamos preparando um espaço para você descobrir o que acontece por aqui.</p>
      </PageIntro>
    </PageShell>
  );
}
