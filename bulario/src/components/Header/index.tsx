import { HeaderContainer, HeaderContent } from './styles'

import logoImg from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

export function Header() {
  // Home page redirect //
  const navigate = useNavigate()

  async function handleHome() {
    navigate(`/`)
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <img
          className="logo"
          src={logoImg}
          alt="Bulário Eletrônico logo image"
          onClick={handleHome}
        />
      </HeaderContent>
    </HeaderContainer>
  )
}
