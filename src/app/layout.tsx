import type { Metadata } from "next";
import { Figtree, Space_Mono } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "600", "800", "900"],
  style: ["normal", "italic"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ivo Vieytes — Process Improvement & QA Automation",
  description:
    "Portfolio de Process Improvement y QA Automation por Ivo Vieytes. Buenos Aires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
