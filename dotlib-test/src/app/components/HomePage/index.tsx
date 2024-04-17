"use client";
import React, { useState } from "react";
import { ContainerHomePage } from "./styles";
import SearchBar from "../SearchBar";
import MediceResults from "../MediceResults";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o termo de pesquisa

  const handleSearch = (term: string) => {
    setSearchTerm(term); // Atualizando o estado com o termo de pesquisa
  };

  return (
    <ContainerHomePage>
      <SearchBar onSearch={handleSearch} />{" "}
      <MediceResults searchTerm={searchTerm} />{" "}
    </ContainerHomePage>
  );
}
