import { useEffect, useState } from 'react'
import { leafletProps } from './utils/types';

import './styles/components/app.sass'
import { Input } from './components/Input';
import { Leaflet } from './components/Leaflet';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

function App() {
  const [leaflet, setLeaflet] = useState<leafletProps[]>([] as leafletProps[]);
  const [filteredLeaflets, setFilteredLeaflets] = useState<leafletProps[]>([] as leafletProps[]);
  const [fetchedLeaflet, setFetchedLeaflet] = useState<leafletProps[]>([] as leafletProps[]);
  
  const [isTyping, setIsTyping] = useState(false);
  const [page, setPage] = useState(1)
  
  const [drugNameSearch, setDrugNameSearch] = useState('')
  const [companySearch, setCompanySearch] = useState('')
  const [activePrincipleSearch, setActivePrincipleSearch] = useState('')
  const [filteredPages, setFilteredPages] = useState(1)

  const totalPages = Math.ceil(leaflet.length / 10)

  function goToNextPage() {
    setPage(page + 1)
  }

  function goToPreviousPage() {
    setPage(page - 1)
  }

  function goToFirstPage() {
    setPage(1)
  }

  function goToLastPage() {
    setPage(totalPages)
  }

  useEffect(() => {
    setIsTyping(true)

    setPage(1)

      if(drugNameSearch === '' && companySearch === '' && activePrincipleSearch === '') {
        setIsTyping(false)

        setFilteredPages(totalPages)
        setLeaflet(fetchedLeaflet)
      }

      setFilteredLeaflets(leaflet.filter((item) => {
        const drugName = item.name.toLowerCase().includes(drugNameSearch.toLowerCase())
        const company = item.company.toLowerCase().includes(companySearch.toLowerCase())
        const activePrinciple = item.active_principles.find((activePrinciple) => {
          return activePrinciple.name.toLowerCase().includes(activePrincipleSearch.toLowerCase())
        })
              
        return drugName && company && activePrinciple
      }))

      setFilteredPages(Math.ceil(filteredLeaflets.length / 10))
  }, [drugNameSearch, companySearch, activePrincipleSearch])

  useEffect(() => {

    const fetchData = async () => {
    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => {
        setLeaflet(data);
        setFetchedLeaflet(data);
        setFilteredPages(Math.ceil(data.length / 10))
      });
    }

    fetchData();
  }, []);

  return (
    <>
      <main className="container hide-scroll-bar">
        <h1>Bulário Eletrônico</h1>

        <div className='container-filter'>
          <div className='container-filter-header'>
            <h3>
              Consulte uma bula
            </h3>
          </div>

          <div className='container-input-wrapper'>
            <Input title='Medicamento' type='text' value={drugNameSearch} onChange={(e) => setDrugNameSearch(e.target.value)} />
            <Input title='Empresa' value={companySearch} onChange={(e) => setCompanySearch(e.target.value)} />
            <Input title='Principio ativo' value={activePrincipleSearch}  onChange={(e) => setActivePrincipleSearch(e.target.value)} />
          </div>

        </div>

        <div className='container-leaflet hide-scroll-bar'>
          {

            isTyping 
            ? filteredLeaflets.slice((page - 1) * 10, page * 10).map((item: leafletProps) => <Leaflet key={item.id} {...item} />) 
            : leaflet.slice((page - 1) * 10, page * 10).map((item: leafletProps) => <Leaflet key={item.id} {...item} />)
          }
        </div>

        <div className='pagination'>
          <button disabled={page === 1} onClick={goToFirstPage}>
            <ChevronsLeft size={28} />
          </button>

          <button disabled={page === 1} onClick={goToPreviousPage}>
            <ChevronLeft size={28} />
          </button>

          <span>
            {page} de {isTyping ? filteredPages : totalPages}
          </span>

          <button disabled={isTyping ? page === filteredPages : page === totalPages} onClick={goToNextPage}>
            <ChevronRight size={28} />
          </button>

          <button disabled={isTyping ? page === filteredPages : page === totalPages} onClick={goToLastPage}>
            <ChevronsRight size={28} />
          </button>

        </div>
      </main>
    </>
  )
}

export default App
