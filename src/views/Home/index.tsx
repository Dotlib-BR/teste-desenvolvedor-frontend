import { useEffect, useState, Fragment } from 'react';
import { FileDown, Search } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
} from '@/views/components/ui/select';

import { Product, ProductResponse } from '@/app/types/ProductResponse';
import { Popover, PopoverTrigger } from '../components/ui/popover';
import { PopoverContent } from '@radix-ui/react-popover';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../components/ui/pagination';
import { cn } from '@/app/lib/utils';

export function Home() {
  const [filterBy, setFilterBy] = useState<'dinamic' | 'name' | 'company'>(
    'dinamic',
  );
  const [currentPage, setCurrentPage] = useState(1);

  const [products, setProducts] = useState<Product[]>([]);
  const [pageQuantity, setPageQuantity] = useState(0);

  useEffect(() => {
    console.log(new Array(pageQuantity));
  }, [pageQuantity]);

  useEffect(() => {
    fetch(`http://localhost:3000/data?_page=${currentPage}`)
      .then((response) => response.json())
      .then((productResponse: ProductResponse) => {
        setProducts(productResponse.data);
        setPageQuantity(productResponse.pages);
      });
  }, [currentPage]);

  function translateFilter(): string {
    switch (filterBy) {
      case 'dinamic':
        return 'Dinâmico';
      case 'name':
        return 'Nome';
      case 'company':
        return 'Companhia';
      default:
        return 'Dinâmico';
    }
  }

  function handleFilterChange(value: string): void {
    const filter = ['dinamic', 'name', 'company'].includes(value)
      ? value
      : 'dinamic';

    setFilterBy(filter as 'dinamic' | 'name' | 'company');
  }

  function handlePaginationActions(action: 'next' | 'previous'): void {
    if (action === 'next' && currentPage === pageQuantity) return;
    if (action === 'previous' && currentPage === 1) return;

    action === 'next'
      ? setCurrentPage((prevState) => prevState + 1)
      : setCurrentPage((prevState) => prevState - 1);
  }

  function handleJumpPage(page: number): void {
    if (page >= 1 && page <= pageQuantity) setCurrentPage(page);
  }

  return (
    <div className="px-4">
      <header className="flex flex-col justify-center items-center gap-4 h-[124px] mb-11">
        <img src="./dotlib.png" alt="Dotlib Logo" className="w-32" />
        <h1 className="text-2xl font-bold">BULÁRIO ELETRÔNICO</h1>
      </header>

      <div className="relative flex w-full h-11 border rounded-xl mb-8">
        <div className="flex-1">
          <Search
            size={16}
            className="absolute top-1/2 -translate-y-1/2 left-4 text-dotlib"
          />
          <input
            type="text"
            className="text-zinc-800/70 text-sm font-medium w-full h-full px-11 rounded-xl"
          />
        </div>
        <Select onValueChange={handleFilterChange}>
          <SelectTrigger className="w-32 h-full border-y-0 border-r-0 rounded-none shadow-none">
            {translateFilter()}
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filtro</SelectLabel>
              <SelectItem value="dinamic">Dinâmico</SelectItem>
              <SelectItem value="name">Nome</SelectItem>
              <SelectItem value="company">Companhia</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <section className="flex flex-col gap-6 mb-8">
        {products.map((product) => {
          const { id, name, company, active_principles, documents } = product;
          const registry = documents[0].expedient;

          return (
            <div
              key={id}
              className="relative w-full flex flex-col gap-2 px-6 py-4 shadow-lg rounded-xl"
            >
              <Popover>
                <PopoverTrigger className="absolute top-6 right-4">
                  <FileDown size={20} />
                </PopoverTrigger>
                <PopoverContent className="text-sm flex flex-col items-start gap-2 mt-2 px-4 py-2 bg-white border rounded-md">
                  <button type="button" className="border-b pb-2">
                    Profissional
                  </button>
                  <button type="button">Paciente</button>
                </PopoverContent>
              </Popover>
              <div className="flex flex-col">
                <small className="text-xs text-zinc-800/70">
                  N° Registro: {registry}
                </small>
                <strong className="text-xl">{name}</strong>
              </div>
              <span className="text-zinc-800/70">
                Princípios ativos:
                {active_principles.map((activePrinciple, index) => (
                  <Fragment key={activePrinciple.id}>
                    {` ${activePrinciple.name}`}
                    {index !== active_principles.length - 1 && ','}
                  </Fragment>
                ))}
              </span>
              <span className="text-zinc-800/70">Laboratório: {company}</span>
            </div>
          );
        })}
      </section>

      <Pagination>
        <PaginationContent>
          <PaginationPrevious
            className={cn(currentPage === 1 && 'opacity-50')}
            onClick={() => handlePaginationActions('previous')}
          />
          {Array.from({ length: pageQuantity }, (_, index) => index + 1).map(
            (value) => (
              <PaginationItem
                key={Math.random()}
                onClick={() => handleJumpPage(value)}
              >
                <PaginationLink isActive={currentPage === value}>
                  {value}
                </PaginationLink>
              </PaginationItem>
            ),
          )}
          <PaginationNext
            className={cn(currentPage === pageQuantity && 'opacity-50')}
            onClick={() => handlePaginationActions('next')}
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
}
