import { HomeContainer } from './styles'

import { Header } from '../../components/Header'
import { SearchCard } from '../../components/SearchCard'
import { SearchResult } from '../../components/SearchResult'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <SearchCard />
      <SearchResult />
    </HomeContainer>
  )
}
