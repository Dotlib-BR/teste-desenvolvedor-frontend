import styled from 'styled-components'

export const MedicineCardContainer = styled.main`
  width: 86.4rem;
  margin-top: 2rem;
  align-self: center;

  @media only screen and (max-width: 864px) {
    width: 100%;
  }
`

export const MedicineCardHeader = styled.header`
  display: flex;
  align-self: center;

  justify-content: space-between;
`

export const MedicineCardEmpty = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 6rem;

  .clipboard {
    width: 20rem;
  }
`

export const NameColumn = styled.p`
  width: 25rem;
`

export const CompanyColumn = styled.p`
  width: 15rem;
`

export const DateColumn = styled.p`
  width: 20rem;
`

export const DetailsColumn = styled.p`
  width: 10rem;
`

export const ResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid #ccc;
  border-radius: 0.8rem;
  padding: 1rem;
  margin-bottom: 1rem;
`

export const ResultTitle = styled.h3`
  width: 25rem;

  font-size: 1.4rem;
`

export const ResultCompany = styled.h3`
  width: 15rem;

  font-size: 1.4rem;
`

export const ResultDate = styled.h3`
  width: 20rem;

  font-size: 1.4rem;
`

export const PaginationFooter = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 2rem;
  margin-bottom: 4rem;

  @media only screen and (max-width: 864px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;

    gap: 2rem;
  }
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`

export const PageButtons = styled.button`
  background-color: ${(props) => props.theme.blue};
  color: #fff;
  border: none;
  border-radius: 0.4rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.4rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  min-width: 10rem;

  &:hover {
    background-color: #0056b3;
  }
`
