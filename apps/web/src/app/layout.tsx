import type { Metadata } from "next";
import "@/design-system/styles/globals.css";
export const metadata: Metadata = { title: "Pocando ES", description: "Agenda e guia cultural do Espírito Santo." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body><a className="skip-link" href="#conteudo">Ir para o conteúdo</a>{children}</body></html>;
}
