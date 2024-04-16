import { Fragment, useEffect, useMemo, useState } from 'react';
import { FileDownIcon } from 'lucide-react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/views/components/ui/popover';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/views/components/ui/pagination';

import { cn } from '@/app/lib/utils';
import { FilterBy } from '@/app/enums/FilterBy';
import { Product } from '@/app/types/ProductResponse';

import {
  getProductsByFilter,
  getProductsByPage,
} from '@/app/services/ProductService';

interface ProductsProps {
  searchText: string;
  filterBy: FilterBy;
}
export function Products({ searchText, filterBy }: ProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageQuantity, setPageQuantity] = useState(1);

  const filteredProducts = useMemo(() => {
    return searchText === ''
      ? products
      : products.slice((currentPage - 1) * 10, currentPage * 10);
  }, [products, searchText, currentPage]);

  useEffect(() => {
    async function fetchByPage() {
      const products = await getProductsByPage(currentPage);

      setProducts(products.data);
      if (currentPage !== products.pages) {
        setPageQuantity(products.pages);
      }
    }

    if (searchText === '') {
      fetchByPage();
    }
  }, [currentPage, pageQuantity, searchText]);

  useEffect(() => {
    async function fetchByFilter() {
      const products = await getProductsByFilter(searchText, filterBy);

      setProducts(products);
      setPageQuantity(Math.ceil(products.length / 10));
    }

    if (searchText !== '') {
      fetchByFilter();
    }
  }, [searchText, filterBy]);

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
    <section className="flex flex-col gap-6 mb-8">
      {filteredProducts.map((product) => {
        const { id, name, company, active_principles, documents } = product;
        const registry = documents[0].expedient;

        return (
          <div
            key={id}
            className="relative w-full flex flex-col gap-2 px-6 py-4 shadow-lg rounded-xl"
          >
            <Popover>
              <PopoverTrigger className="absolute top-6 right-4">
                <FileDownIcon size={20} />
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
    </section>
  );
}
