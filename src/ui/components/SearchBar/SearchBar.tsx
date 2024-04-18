import { Button } from "../Button";
import { Input } from "../Input";
import "./SearchBar.scss";

export const SearchBar = () => {
  return (
    <div className="searchbar-container">
      <Button search="left" color="secondary">
        Favoritos
      </Button>
      <Input placeholder="Pesquisar" />
      <Button search="right">Buscar</Button>
    </div>
  );
};
