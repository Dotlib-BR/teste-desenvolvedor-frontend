import { useContext, useState } from "react"
import { getMedicationByName, getMedicationByCompany } from "../../functions/fetch_medications"
import { ResponseData, SearchByType } from "../../types/responseData"
import { Container, InputContainer, SearchWrapper } from "./Styles"
import { DropSelector } from "../DropSelector"
import { DEFAULT_PAGE } from "../../utils/pagination"
import { InputErrors } from "../../types/errors"
import { MedicationContext, MedicationContextType } from "../../contexts/Medication"
import { LoaderContext, LoaderContextType } from "../../contexts/Loader"

export const SearchField = () => {
  const [searchBy, setSearchBy] = useState<SearchByType>('name') 
  const [inputError, setInputError] = useState<InputErrors>('')

  const { MedicationDispatch } = useContext(MedicationContext) as MedicationContextType
  const { setLoading } = useContext(LoaderContext) as LoaderContextType 
  
  const search = async (e?: React.KeyboardEvent<HTMLInputElement>) => {
    let value: string

    if (e) {
      if (e.key !== 'Enter') return
      value = e.currentTarget.value
    } else {
      const input = document.getElementById('search-field') as HTMLInputElement
      value = input.value
    }

    if (!value) {
      setInputError('Campo vazio.')
      return
    }
    
    setLoading(true)
    let data: ResponseData 
    if (searchBy === 'name') {
      data = await getMedicationByName(DEFAULT_PAGE, value)
    } else {
      data = await getMedicationByCompany(DEFAULT_PAGE, value)
    }
    setLoading(false)

    if (data.error) {
      MedicationDispatch({
        type: 'SET_ERROR',
        payload: {
          error: data.error,
          errorMsg: data.errorMsg
        }
      })
      return
    }

    MedicationDispatch({ type: "SET_VALUE_SEARCHED", payload: { value, method: searchBy } })
    MedicationDispatch({ type: "SET_MEDICATION_DATA", payload: data })
  }

  const cleanInput = () => {
    const input = document.getElementById('search-field') as HTMLInputElement
    input.value = ''
  }

  return (
    <Container>
      <SearchWrapper>
        <DropSelector searchBy={searchBy} setSearchBy={setSearchBy}/>
        <InputContainer $error={!!inputError}>
          <input 
          type="text" 
          name="" id="search-field" 
          onKeyDown={(e) => search(e)} 
          onFocus={() => setInputError('')}
          />

          <i className="bi bi-x-lg" onClick={cleanInput}></i>
          <i className="bi bi-search" onClick={() => search()}></i>
          {inputError && <span>{inputError}</span>}
        </InputContainer>
      </SearchWrapper>
    </Container>
  )
}