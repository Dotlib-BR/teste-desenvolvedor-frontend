import { IMedicine } from '@/interfaces/medicine';
import { ApiPaginatedResponse } from '@/interfaces/pagination_api';
import api from '@/services/http';
import React, { useState, useEffect } from 'react';
import Button from '../Button/index';
import Card from '../Card/index';
import Input from '../Input/index';
import { CardSection, Filters, PageButton, PaginationWrapper } from './pagination_styled';

const Pagination = () => {
  const [medicines, setMedicines] = useState<ApiPaginatedResponse>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    fetchMedicines(1); 
    setFirstLoad(false);
  }, []);

  const fetchMedicines = (page: number) => {
    api.get(`?_page=${page}`)
      .then((response) => {
        setMedicines(response.data);
        setTotalPages(response.data.pages);
        const section = document.getElementById('cardSection');
        if (section && !firstLoad) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      })
      .catch((error) => {
        console.log("Erro na chamada dos produtos: ", error);
      });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    fetchMedicines(page);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    const filteredMedicine = medicines?.data?.filter((medicine) => {
      return medicine.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
             medicine.company.toLowerCase().includes(event.target.value.toLowerCase());
    });

    if(!event.target.value) {
      handlePageChange(currentPage);
    }

    const newMedicines: ApiPaginatedResponse = {
      data: filteredMedicine,
      pages: medicines?.pages ?? 1, 
      first: medicines?.first ?? 0,
      prev: medicines?.prev ?? 0,
      next: medicines?.next ?? 0,
      last: medicines?.last ?? 0,
      items: medicines?.items ?? 0
    };

    setMedicines(newMedicines);
  };

  const handleSortChange = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    const sortedMedicines = [...(medicines?.data || [])].sort((a, b) => {
      const dateA = new Date(a.published_at).getTime();
      const dateB = new Date(b.published_at).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    const newMedicines: ApiPaginatedResponse = {
      data: sortedMedicines,
      pages: medicines?.pages ?? 1, 
      first: medicines?.first ?? 0,
      prev: medicines?.prev ?? 0,
      next: medicines?.next ?? 0,
      last: medicines?.last ?? 0,
      items: medicines?.items ?? 0
    };

    setMedicines(newMedicines);
  };


  return (
    <div>

      <Filters>
        <Input 
          searchValue={searchValue}
          handleInputChange={handleInputChange} 
        />

        <Button onClick={handleSortChange}>
          Ordenar por data {sortOrder === 'asc' ? 'mais antiga' : 'mais nova'}
        </Button>

      </Filters>

      <CardSection id='cardSection'>
      {medicines?.data?.map((medicine) => (
        <Card medicine={medicine} key={medicine.id} />
      ))}  
      </CardSection>
      <PaginationWrapper>
        {(() => {
          const pageButtons = [];
          for (let page = 1; page <= totalPages; page++) {
            pageButtons.push(
              <PageButton
                key={page}
                onClick={() => handlePageChange(page)}
                active={page === currentPage ? 'true' : 'false'} 
                >
                {page}
              </PageButton>
            );
          }
          return pageButtons;
        })()}
      </PaginationWrapper>
    </div>
  );
};

export default Pagination;
