import { useState } from 'react'
import { SearchByType } from '../../types/responseData'
import { DropDownWrapper, Options } from './Styles'

type Props = {
  searchBy: SearchByType
  setSearchBy: (searchBy: SearchByType) => void
}

export const DropSelector = ({ searchBy, setSearchBy }: Props) => {
  const [hover, setHover] = useState(false)

  const selectOption= (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
    const target = e.target as HTMLParagraphElement
    setSearchBy(target.textContent === 'nome' ? 'name' : 'company')
  }

  const option = searchBy === 'name' ? 'nome' : 'laboratório'

  return (
    <DropDownWrapper
      $hover={hover}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => setHover(!hover)}
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