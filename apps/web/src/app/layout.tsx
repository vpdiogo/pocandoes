import type { Metadata } from "next";
import messages from "@/locales/pt-BR.json";
import "@/design-system/styles/globals.css";

export const metadata: Metadata = {
  title: messages.site.title,
  description: messages.site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <a className="skip-link" href="#main-content">
          {messages.accessibility.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
