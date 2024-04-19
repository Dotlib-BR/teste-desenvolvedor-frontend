import sortIcon from "../../assets/funnel-outline.svg";
import { Body } from "./menuStyle";
import React, { useState } from "react";
import searchIcon from "../../assets/search-outline.svg";
import searchItems from "../../utils/searchItems";

export default function Menu({
  isTheOldItemFilterActive,
  setIsTheOldItemFilterActive,
  oldToNew,
  newToOld,
  setSearchbarResult,
  setIsSearching,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const filter = () => {
    if (isTheOldItemFilterActive === true) {
      setIsTheOldItemFilterActive(false);
      setSearchbarResult(searchItems(newToOld, searchTerm));
    } else {
      setIsTheOldItemFilterActive(true);
      setSearchbarResult(searchItems(oldToNew, searchTerm));
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  function findBy(event) {
    event.preventDefault();
    setIsSearching(true);
    if (isTheOldItemFilterActive) {
      setSearchbarResult(searchItems(oldToNew, searchTerm));
    } else {
      setSearchbarResult(searchItems(newToOld, searchTerm));
    }
  }

  return (
    <Body>
      <form onSubmit={findBy}>
        <input
          type="text"
          placeholder="Pesquisar..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search"
        />
        <button type="submit">
          <img src={searchIcon} alt="search icon" />
        </button>
      </form>

      {!isTheOldItemFilterActive && (
        <button onClick={filter}>
          Mais antigos
          <img src={sortIcon} alt="Sort icon" />
        </button>
      )}
      {isTheOldItemFilterActive && (
        <button onClick={filter}>
          Mais novos
          <img src={sortIcon} alt="Sort icon" />
        </button>
      )}
    </Body>
  );
}
