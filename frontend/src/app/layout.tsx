import type { Metadata } from "next";
import "./styles/main.scss";

export const metadata: Metadata = {
  title: "Bulário Online",
  description: "Generated by create next app",
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
