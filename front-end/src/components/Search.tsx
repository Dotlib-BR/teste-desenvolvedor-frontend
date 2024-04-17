/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type SearchProps = {
    options: string[],
    setSearchTerm: Dispatch<SetStateAction<string>>
}

export const Search = ({options, setSearchTerm}: SearchProps) => {
  return (
    <Autocomplete
      disablePortal
      id="search"
      fullWidth
      options={options.sort()}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Pesquisar por nome do medicamento ou laboratório farmacêutico"
        />
      )}
      size="small"
      onChange={(_event, value) => setSearchTerm(value || "")}
      sx={{ marginBottom: "20px" }}
    />
  );
};
