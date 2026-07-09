import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Powered CSV Importer",
  description: "GrowEasy Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}