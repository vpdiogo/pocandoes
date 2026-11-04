import type { ReactNode } from "react";
import styles from "./PageShell.module.css";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main id="conteudo" tabIndex={-1} className={styles.shell}>
      <div className={styles.content}>{children}</div>
    </main>
  );
}
