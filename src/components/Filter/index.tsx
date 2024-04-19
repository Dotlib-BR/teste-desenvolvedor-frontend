import { Search } from "@mui/icons-material";
import {
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { PublishedAtEnum } from "../../utils/enums/published-at-order.enum";

interface IFilter {
  submit: (filter: { name: string; company: string, sort: string}) => void;
}

export const Filter = ({ submit }: IFilter) => {
  const [filterValue, setFilterValue] = useState({
    name: "",
    company: "",
    sort: PublishedAtEnum.NONE, 
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
        <Grid item md={4} sm={12}>
          <Grid item sm={6}>
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
        <Grid item md={4} sm={12}>
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small-label">Age</InputLabel>
            <Select
            onChange={(event) => handleFilter("sort", event.target.value)}
              labelId="demo-select-small-label"
              id="demo-select-small"
              label="Age"
            >
              <MenuItem value={PublishedAtEnum.NONE}>
                <em>Sem Ordenação</em>
              </MenuItem>
              <MenuItem value={PublishedAtEnum.ASC}>Mais Recente</MenuItem>
              <MenuItem value={PublishedAtEnum.DESC}>Mais Antigo</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={4} sm={12}>
          <IconButton aria-label="fingerprint" color="secondary" type="submit">
            <Search />
          </IconButton>
        </Grid>
      </Grid>
    </form>
  );
};
