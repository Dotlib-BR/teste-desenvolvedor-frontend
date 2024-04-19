import { useSearchContext } from "../../../context/search-context";
import { Button } from "../Button";
import { Input } from "../Input";
import { Switch } from "../Switch";
import "./SearchBar.scss";

export const SearchBar = () => {
  const {
    setSearchMode,
    searchMode,
    searchLeafletPagination,
    setSearchText,
    searchText,
  } = useSearchContext();

  const handleSearch = () => {
    searchLeafletPagination(1, searchMode, searchText);
  };

  const handleInputEnter = (input: string) => {
    if (input === "Enter") {
      searchLeafletPagination(1, searchMode, searchText);
    }
  };

  return (
    <div className="search-container">
      <div className="searchbar-container">
        <Button search="left" color="secondary">
          Favoritos
        </Button>
        <Input
          placeholder="Pesquisar"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={(e) => handleInputEnter(e.key)}
        />
        <Button search="right" onClick={() => handleSearch()}>
          Buscar
        </Button>
      </div>
      <div className="switch-container">
        <span className="switch-label">Remédios</span>
        <Switch onChange={() => setSearchMode(!searchMode)} />
        <span className="switch-label">Laboratórios</span>
      </div>
    </div>
  );
};
