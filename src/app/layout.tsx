import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital",
  description: "A focused website starter for agent-first product delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
