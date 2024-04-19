//React
import { ChangeEvent, useState } from "react";

//Styles
import { Form, Input, IconButton } from "./search.styles";
import { SearchCheck, SearchX } from "lucide-react";

//Context
import { useGlobalContext } from "../../../context/context";

//Service
import {
  getSearchedMedicine,
  getMedicineByPageOrId,
} from "../../../service/service";

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

  const handleCleanSearch = () => {
    setSearchValue("");
    getMedicineByPageOrId(setState, undefined, 1);
    setState((prevState) => ({
      ...prevState,
      showFooter: true,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" value={searchValue} onChange={handleChange} />
      <IconButton type="submit">
        <SearchCheck color="#3F826D" />
      </IconButton>
      <SearchX
        color="#DE4F3F"
        style={{ cursor: "pointer" }}
        onClick={() => handleCleanSearch()}
      />
    </Form>
  );
}

export default Search;
