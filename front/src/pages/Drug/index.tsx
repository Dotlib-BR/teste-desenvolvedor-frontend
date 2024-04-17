import React, { useState, useEffect } from 'react';
import DrugList from '../../components/drug-list';
import { IListItemsResponse } from '../../services/module/general/interface';
import * as api from '../../services/module'
import { Button, Flex, Heading, Input } from '@chakra-ui/react';
import { Paginate } from '../../components/paginate';
import { NoResultsFound } from '../../components/no-results-found';
import { Layout } from '../../components/layout';

const Drugs: React.FC = () => {
  const [drugs, setDrugs] = useState([] as IListItemsResponse[]);
  const [allDrugs, setAllDrugs] = useState([] as IListItemsResponse[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDrugs, setFilteredDrugs] = useState([] as IListItemsResponse[]);
  const [sortOrder, setSortOrder] = useState('desc');
  
  const fetchData = async () => {
    try {
      const items = await api.general.listPaginated(currentPage)
      const totalItems = await api.general.list()
      const totalPages = Math.ceil(totalItems.length / 10)

        setDrugs(items)
        setAllDrugs(totalItems)
        setTotalPages(totalPages)
    } catch (error) {
      console.error('Error fetching drugs', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  useEffect(() => {
    if(drugs) setFilteredDrugs(drugs)
    }, [drugs])

const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  
    if (e.target.value === '') {
      setFilteredDrugs(drugs);
      return;
    }

    const value = e.target.value.toLowerCase();
    const newFilteredDrugs = allDrugs.filter(drug => drug.name.toLowerCase().includes(value) || drug.company.toLowerCase().includes(value));
    setFilteredDrugs(newFilteredDrugs.slice(0, 10));
  };
  

    const handleSortByDate = () => {
        const sortedDrugs = [...filteredDrugs].sort((a, b) => {
        const dateA = new Date(a.published_at).getTime();
        const dateB = new Date(b.published_at).getTime();
        return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
        });
    
        setFilteredDrugs(sortedDrugs);
        setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    };

  const handlePreviousPage = () => setCurrentPage(prevState => prevState - 1)
  const handleNextPage = () => setCurrentPage(prevState => prevState + 1)


  return (
    <Layout>
        <Flex w="1000px" minH="500px" flexDir='column' justifyContent='center' align='center' gap="5">
            <Heading>Lista de medicamentos</Heading>
            <Flex w="100%" justify="center" gap="2">
        
                <Input
                w="80%"
                type="text"
                placeholder="Digite o nome do medicamento ou laboratório"
                value={searchTerm}
                onChange={handleSearch}
            />

            <Button w="20%"
                onClick={handleSortByDate}
            >
                Ordenar por data
            </Button>
            </Flex>

            {
                !filteredDrugs.length ? (
                    <NoResultsFound />
                ) : (
                    <React.Fragment>
                        <DrugList drugs={filteredDrugs} />
                        <Paginate
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handlePreviousPage={handlePreviousPage}
                        handleNextPage={handleNextPage}
                        />
                    </React.Fragment>
                )
            }


        </Flex>
        </Layout>
  );
};

export { Drugs }