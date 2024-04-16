import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/Styles/Styles.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bulário eletrônico",
  description: "Consulte bulas de medicamentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="PT-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
