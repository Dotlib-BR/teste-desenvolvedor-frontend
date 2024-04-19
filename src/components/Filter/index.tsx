import { Search } from "@mui/icons-material";
import { Grid, IconButton, TextField } from "@mui/material";
import { useState } from "react";

interface IFilter {
  submit: (filter: { name: string; company: string }) => void;
}

export const Filter = ({  submit }: IFilter) => {
  const [filterValue, setFilterValue] = useState({
    name: "",
    company: "",
  });
  const handleFilter = (key: string, value: string) => {
    setFilterValue((prev) => ({
      ...prev,
      [key]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    submit(filterValue);
  };
  return (
    <form className="filterContainer" onSubmit={(event) => handleSubmit(event)}>
      <Grid container spacing={2}>
        <Grid item md={6} sm={12}>
          <Grid item sm={12}>
            <TextField
              id="filled-search"
              label="Nome Remedio"
              type="search"
              variant="filled"
              onChange={(event) => handleFilter("name", event.target.value)}
            />
          </Grid>

          <Grid item sm={12}>
            <TextField
              id="filled-search"
              label="Laboratorio"
              type="search"
              variant="filled"
              onChange={(event) => handleFilter("company", event.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item md={6} sm={12}>
          <IconButton aria-label="fingerprint" color="secondary" type="submit">
            <Search />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  );
};
