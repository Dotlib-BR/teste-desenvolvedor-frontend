import { SearchResultContainer, Title } from './styles'

type SearchResultProps = {
  length: number
}

export function SearchResult({ length }: SearchResultProps) {
  return (
    <SearchResultContainer>
      <Title>
        <h3>Resultado da busca</h3>
        <span>
          {length === 0
            ? 'Nenhum resultado encontrado'
            : `${length} resultado(s) encontrados`}
        </span>
      </Title>
    </SearchResultContainer>
  )
}
