import React from "react";
import Section from "../_components/section";

export interface LayoutProperties {
  children: React.ReactNode;
}

export default function Layout(properties: LayoutProperties) {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 text-lg">
      <Section
        title="Resultados da busca"
        className="flex max-w-full flex-col items-center gap-8"
      >
        {properties.children}
      </Section>
    </main>
  );
}
