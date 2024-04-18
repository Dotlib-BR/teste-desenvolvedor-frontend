import { useState } from 'react'
import { SearchByType } from '../../types/responseData'
import { DropDownWrapper, Options } from './Styles'

type DropSelectorProps = {
  searchBy: SearchByType
  setSearchBy: (searchBy: SearchByType) => void
}

export function DropSelector({ searchBy, setSearchBy }: DropSelectorProps) {
  const [hover, setHover] = useState(true)

  function selectOption(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) {
    const target = e.target as HTMLParagraphElement
    setSearchBy(target.textContent === 'nome' ? 'name' : 'company')
  }

  const option = searchBy === 'name' ? 'nome' : 'laboratório'

  return (
    <DropDownWrapper
    $hover={hover}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >

    <p>pesquisar por: {option}</p>
    {hover &&  
    <Options>
      <p onClick={(e) => selectOption(e)}>nome</p>
      <p onClick={(e) => selectOption(e)}>laboratório</p>
    </Options>}
    </DropDownWrapper>
  )
}