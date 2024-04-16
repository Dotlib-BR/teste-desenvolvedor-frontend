"use client";

import { useRef } from "react";
import SearchInput from "./_components/search-input";
import Section from "./_components/section";
import Button from "./_components/button";

export default function Home() {
  const searchRef = useRef<string>("");

  return (
    <main className="flex min-h-screen items-center justify-center text-lg">
      <Section
        title="Remed.io"
        className="flex flex-col items-center gap-8"
        contentClassName="flex flex-col items-center gap-4"
      >
        <label className="contents">
          Pesquise medicações aqui
          <SearchInput
            placeholder="Nome da medicação"
            valueRef={searchRef}
          ></SearchInput>
        </label>
        <Button onClick={() => alert(searchRef.current)}>Pesquisar</Button>
      </Section>
    </main>
  );
}
