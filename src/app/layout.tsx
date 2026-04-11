import type { Metadata } from "next";
import { siteContent } from "@/content/siteContent";
import "./globals.css";

export const metadata: Metadata = {
  title: siteContent.siteTitle,
  description: siteContent.siteTagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
