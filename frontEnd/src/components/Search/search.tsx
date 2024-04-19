//React
import { ChangeEvent, useState } from "react";

//Styles
import { Input } from "./search.styles";

//Context
import { useGlobalContext } from "../../context/context";

//Service
import { getSearchedMedicine } from "../../service/service";

function Search() {
  const [searchValue, setSearchValue] = useState("");

  const { setState } = useGlobalContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getSearchedMedicine(setState, searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input type="text" value={searchValue} onChange={handleChange} />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default Search;
