import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "D13S Digital Commerce",
    template: "%s | D13S",
  },
  description:
    "D13S sells curated source code, plugins, templates, and website services with controlled license, support, and delivery workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
