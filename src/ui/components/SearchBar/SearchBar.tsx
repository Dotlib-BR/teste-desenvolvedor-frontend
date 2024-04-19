import { useEffect, useState } from "react";
import { useSearchContext } from "../../../context/search-context";
import { Button } from "../Button";
import { Input } from "../Input";
import { Switch } from "../Switch";
import { IoMdSearch } from "react-icons/io";
import { RiStarFill } from "react-icons/ri";
import "./SearchBar.scss";
import { useNavigate } from "react-router-dom";

export const SearchBar = () => {
  const {
    setSearchMode,
    searchMode,
    searchLeafletPagination,
    setSearchText,
    searchText,
  } = useSearchContext();
  const history = useNavigate();

  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <Button
          search="left"
          color="secondary"
          iconButton={windowWidth < 514}
          onClick={() => history(`/favorites`)}
        >
          {windowWidth < 514 ? <RiStarFill className="icon" /> : "Favoritos"}
        </Button>
        <Input
          placeholder="Pesquisar"
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={(e) => handleInputEnter(e.key)}
        />
        <Button
          search="right"
          onClick={() => handleSearch()}
          iconButton={windowWidth < 514}
        >
          {windowWidth < 514 ? <IoMdSearch className="icon" /> : "Buscar"}
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
