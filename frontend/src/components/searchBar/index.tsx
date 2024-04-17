import { useContext } from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { SearchBarStyles } from './styles';
import { InternalSearchBar } from '../internalSearchBar';
import { ISearchContext, SearchContext } from '@/contexts/searchContext';

export const Searchbar = (): JSX.Element => {
  const { searchType, setSearchType } = useContext(SearchContext);

  function handleChange(event: SelectChangeEvent): void {
    setSearchType(event.target.value as ISearchContext['searchType']);
  }

  function handleSearchPlaceholder(): string {
    return searchType == 'name' ? 'do Medicamento' : 'da Empresa';
  }

  return (
    <SearchBarStyles>
      <FormControl sx={{ minWidth: 145 }} size="small">
        <InputLabel id="search-type-label">Consultar por:</InputLabel>
        <Select
          labelId="search-type-label"
          id="demo-select-small"
          value={searchType}
          label="Consultar por:"
          onChange={handleChange}
        >
          <MenuItem value={'name'}>Medicamento</MenuItem>
          <MenuItem value={'company'}>Empresa</MenuItem>
        </Select>
      </FormControl>
      <InternalSearchBar placeholder={handleSearchPlaceholder()} />
    </SearchBarStyles>
  );
};
