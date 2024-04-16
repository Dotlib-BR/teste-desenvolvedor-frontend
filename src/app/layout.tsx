import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";
import Goo from "./_components/goo";

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Remed.io",
  description: "Pesquise remédios aqui",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={atkinsonHyperlegible.className}>
      <body className="min-h-screen">
        <div className="pointer-events-none absolute inset-0 z-[-1] text-teal-500 opacity-50">
          <Goo></Goo>
        </div>
        {children}
      </body>
    </html>
  );
}
