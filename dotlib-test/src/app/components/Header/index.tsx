"use client";
import react from "react";
import { ContainerHeader, TitleHeader } from "./styles";

export default function Header() {
  return (
    <ContainerHeader className="bg-white shadow">
      <TitleHeader className="text-3xl font-bold tracking-tight text-gray-900">
        Dotlib Test
      </TitleHeader>
    </ContainerHeader>
  );
}
