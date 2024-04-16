import React from 'react'
import { HeaderStyled, HeaderTag, HeaderText, HeaderTitle } from './header_styled'

const Header = () => {
  return (
    <HeaderStyled>
        <HeaderText>
            <HeaderTag>Pesquise seu remédio</HeaderTag>
            <HeaderTitle>Descubra os melhores remédios para suas necessidades aqui.</HeaderTitle>
        </HeaderText>
    </HeaderStyled>
  )
}

export default Header