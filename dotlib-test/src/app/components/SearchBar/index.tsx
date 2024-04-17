import React, { useState } from "react";
import { ContainerSearchBar, InputSearchBar, ButtonSearchBar } from "./styles";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void; // Especificando o tipo da propriedade onSearch
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    onSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <ContainerSearchBar>
      <InputSearchBar type="text" value={searchTerm} onChange={handleChange} />
      <ButtonSearchBar onClick={handleSubmit}>Search</ButtonSearchBar>
    </ContainerSearchBar>
  );
};

export default SearchBar;
