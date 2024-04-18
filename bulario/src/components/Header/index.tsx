import { HeaderContainer, HeaderContent } from './styles'

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img className="logo" src={logoImg} alt="Bulário Eletrônico logo image" />
      </HeaderContent>
    </HeaderContainer>
  )
}