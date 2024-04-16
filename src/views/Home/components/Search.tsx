import { FilterBy } from '@/app/enums/FilterBy';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from '@/views/components/ui/select';
import { SearchIcon } from 'lucide-react';
import { ChangeEvent } from 'react';

interface SearchProps {
  currentFilter: FilterBy;
  onFilterChange(value: FilterBy): void;
  onSearchTextChange(value: string): void;
}
export function Search({
  currentFilter,
  onSearchTextChange,
  onFilterChange,
}: SearchProps) {
  function handleFilterChange(value: FilterBy): void {
    if (!Object.values(FilterBy).includes(value)) return;

    onFilterChange(value);
  }

  function handleSearchTextChange(event: ChangeEvent<HTMLInputElement>): void {
    const { value } = event.target;

    onSearchTextChange(value);
  }

  return (
    <div className="relative flex w-full h-11 border rounded-xl">
      <div className="flex-1">
        <SearchIcon
          size={16}
          className="absolute top-1/2 -translate-y-1/2 left-4 text-dotlib"
        />
        <input
          type="text"
          className="text-zinc-800/70 text-sm font-medium w-full h-full px-11 rounded-xl"
          onChange={handleSearchTextChange}
        />
      </div>
      <Select onValueChange={handleFilterChange}>
        <SelectTrigger className="w-32 h-full border-y-0 border-r-0 rounded-none shadow-none">
          {currentFilter}
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Filtro</SelectLabel>
            <SelectItem value={FilterBy.dinamic}>Dinâmico</SelectItem>
            <SelectItem value={FilterBy.name}>Nome</SelectItem>
            <SelectItem value={FilterBy.company}>Companhia</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
