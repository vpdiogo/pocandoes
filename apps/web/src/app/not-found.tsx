import Link from "next/link";
import { PageIntro } from "@/design-system/patterns/PageIntro";
import { PageShell } from "@/design-system/patterns/PageShell";
import messages from "@/locales/pt-BR.json";

export default function NotFound() {
  return (
    <PageShell>
      <PageIntro
        eyebrow={messages.notFound.eyebrow}
        title={messages.notFound.title}
        description={messages.notFound.description}
      >
        <Link href="/">{messages.notFound.backHome}</Link>
      </PageIntro>
    </PageShell>
  );
}
