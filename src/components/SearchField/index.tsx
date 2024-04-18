import { useState } from "react"
import { getMedications } from "../../functions/getMedication"
import { Data, SearchByType } from "../../types/responseData"
import { InputError } from "../../types/Errors"
import { Pagination } from "../Pagination"
import { InputContainer, SearchWrapper } from "./Styles"
import { DropSelector } from "../DropSelector"
import { DEFAULT_PAGE } from "../utils/pagination"

export function SearchField() {

  const [error, setError] = useState<InputError | null>(null)
  const [medications, setMedications] = useState<Data>()
  const [valueSearched, setValueSearched] = useState('')
  const [searchBy, setSearchBy] = useState<SearchByType>('name') 

  async function search(e?: React.KeyboardEvent<HTMLInputElement>) {
    let value: string

    if (e) {
      if (e.key !== 'Enter') return
      value = e.currentTarget.value
    } else {
      const input = document.getElementById('search-field') as HTMLInputElement
      value = input.value
    }

    if (!value) {
      setError({
        error: 'Digite algo para pesquisar'
      })
      return
    }
    const data = await getMedications(value, searchBy, DEFAULT_PAGE)

    setMedications(data)
    setValueSearched(value)
  }

  return (
    <>
      <SearchWrapper>
        <DropSelector searchBy={searchBy} setSearchBy={setSearchBy}/>
        <InputContainer $error={!!error}>
          <input 
          type="text" 
          name="" id="search-field" 
          onKeyDown={(e) => search(e)} 
          onFocus={() => setError(null)}
          />

          <i className="bi bi-search" onClick={() => search()}></i>
          {error?.error && <span>{'* ' + error.error}</span>}
        </InputContainer>
      </SearchWrapper>

      <Pagination 
      medications={medications}
      setMedications={setMedications}
      valueSearched={valueSearched}
      />
    </>
  )
}