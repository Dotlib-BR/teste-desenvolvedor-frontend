import { Fragment, useEffect, useMemo, useState } from 'react';
import { FileDownIcon } from 'lucide-react';
import pdfStatic from '../../../../api/public/pdf_sample.pdf';

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
      setCurrentPage(1);
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
    <>
      <section className="flex flex-col flex-1 gap-6 w-full max-w-[1024px] overflow-y-scroll pb-4">
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
                <PopoverContent className="text-sm flex flex-col items-start gap-2 w-fit mt-2 px-4 py-2 bg-white border rounded-md">
                  <a href={pdfStatic} download className="border-b pb-2">
                    Profissional
                  </a>
                  <a href={pdfStatic} download>
                    Paciente
                  </a>
                </PopoverContent>
              </Popover>
              <div className="flex flex-col w-11/12 md:flex-row-reverse md:items-center md:justify-end md:gap-2">
                <small className="text-xs text-zinc-800/70">
                  N° Registro: {registry}
                </small>
                <strong className="text-lg max-w-[400px] text-ellipsis overflow-hidden">
                  {name}
                </strong>
              </div>
              <span className="text-zinc-800/70 text-ellipsis overflow-hidden">
                Princípios ativos:
                {active_principles.map((activePrinciple, index) => (
                  <Fragment key={activePrinciple.id}>
                    {` ${activePrinciple.name}`}
                    {index !== active_principles.length - 1 && ','}
                  </Fragment>
                ))}
              </span>
              <span className="text-zinc-800/70 text-ellipsis overflow-hidden">
                Laboratório: {company}
              </span>
            </div>
          );
        })}
      </section>

      {pageQuantity > 1 && (
        <Pagination>
          <PaginationContent className="h-fit">
            <PaginationPrevious
              className={cn(
                'cursor-pointer',
                currentPage === 1 && 'cursor-not-allowed opacity-50',
              )}
              onClick={() => handlePaginationActions('previous')}
            />
            {Array.from({ length: pageQuantity }, (_, index) => index + 1).map(
              (value) => (
                <PaginationItem
                  key={Math.random()}
                  className="cursor-pointer"
                  onClick={() => handleJumpPage(value)}
                >
                  <PaginationLink isActive={currentPage === value}>
                    {value}
                  </PaginationLink>
                </PaginationItem>
              ),
            )}
            <PaginationNext
              className={cn(
                'cursor-pointer',
                currentPage === pageQuantity && 'cursor-not-allowed opacity-50',
              )}
              onClick={() => handlePaginationActions('next')}
            />
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}
