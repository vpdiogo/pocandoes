import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Pocando ES", description: "Agenda e guia cultural do Espírito Santo." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
