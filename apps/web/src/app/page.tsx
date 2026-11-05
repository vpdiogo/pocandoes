import { PageIntro } from "@/design-system/patterns/PageIntro";
import { PageShell } from "@/design-system/patterns/PageShell";
import messages from "@/locales/pt-BR.json";

export default function Home() {
  return (
    <PageShell>
      <PageIntro
        eyebrow={messages.home.eyebrow}
        title={messages.site.title}
        description={messages.site.description}
      >
        <p>{messages.home.comingSoon}</p>
      </PageIntro>
    </PageShell>
  );
}
