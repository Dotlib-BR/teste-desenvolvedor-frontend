import {
  MedicineCardContainer,
  MedicineCardHeader,
  NameColumn,
  CompanyColumn,
  DateColumn,
  DetailsColumn,
  ResultItem,
  ResultTitle,
  ResultCompany,
  ResultDate,
  PaginationFooter,
  PaginationContainer,
  MedicineCardEmpty,
  PageButtons,
} from './styles'

import { Item } from '../../pages/Home'
import { useState } from 'react'
import { formatDate } from '../../utils/formatter'

import clipboardImg from '../../assets/clipboard.svg'
import { useNavigate } from 'react-router-dom'

type MedicineCardProps = {
  filteredItems: Item[]
}

export function MedicineCard({ filteredItems }: MedicineCardProps) {
  // State Storage //
  const [actualPage, setActualPage] = useState(1)
  const [resultsPerPage, setResultsPerPage] = useState(10)

  // Indexes of results to be displayed on the current page //
  const initialIndex = (actualPage - 1) * resultsPerPage
  const finalIndex = actualPage * resultsPerPage
  const peginatedResults = filteredItems.slice(initialIndex, finalIndex)

  const totalPages = Math.ceil(filteredItems.length / resultsPerPage)

  // Page change function //
  async function handleChangePage(page: number) {
    if (page < 1) {
      page = 1
    } else if (page > totalPages) {
      page = totalPages
    }
    setActualPage(page)
  }

  // Change the number of items to display //
  async function handleLimitChange() {
    setResultsPerPage(resultsPerPage === 10 ? 50 : 10)
    setActualPage(1)
  }

  // Details page redirect //
  const navigate = useNavigate()

  async function handleDetails(result: Item) {
    console.log('Redirected to details with this result: ', result)
    navigate(`/details`)
  }

  return (
    <MedicineCardContainer>
      {filteredItems.length > 0 ? (
        <MedicineCardHeader>
          <NameColumn>Nome do Medicamento</NameColumn>
          <CompanyColumn>Fabricante</CompanyColumn>
          <DateColumn>Data de Publicação</DateColumn>
          <DetailsColumn>Detalhes</DetailsColumn>
        </MedicineCardHeader>
      ) : (
        <MedicineCardEmpty>
          <img
            className="clipboard"
            src={clipboardImg}
            alt="Empty search image"
          />
        </MedicineCardEmpty>
      )}
      <MedicineCardContainer>
        {peginatedResults.map((result, index) => (
          <ResultItem key={index}>
            <ResultTitle>{result.name}</ResultTitle>
            <ResultCompany>{result.company.split(' ')[0]}</ResultCompany>
            <ResultDate>
              {result.published_at && formatDate(result.published_at)}
            </ResultDate>
            <PageButtons onClick={() => handleDetails(result)}>
              Detalhar
            </PageButtons>
          </ResultItem>
        ))}
      </MedicineCardContainer>

      {filteredItems.length > 0 && (
        <PaginationFooter>
          <PaginationContainer>
            <PageButtons onClick={() => handleChangePage(actualPage - 1)}>
              Anterior
            </PageButtons>
            <span>
              Página {actualPage} de {totalPages}
            </span>
            <PageButtons onClick={() => handleChangePage(actualPage + 1)}>
              Próxima
            </PageButtons>
          </PaginationContainer>

          <PageButtons onClick={handleLimitChange}>
            Alterar Limite de Resultados por Página ({resultsPerPage})
          </PageButtons>
        </PaginationFooter>
      )}
    </MedicineCardContainer>
  )
}
