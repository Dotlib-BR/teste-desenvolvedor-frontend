import { HomeContainer } from './styles'

import { Header } from '../../components/Header'
import { SearchCard } from '../../components/SearchCard'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <SearchCard />
    </HomeContainer>
  )
}
