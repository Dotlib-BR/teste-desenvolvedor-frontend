import {
  Button,
  SearchContainer,
  Input,
  InputContainer,
  InputLabel,
  Title,
  InputsContainer,
} from './styles'

type SearchProps = {
  loading: boolean

  nameQuery: string
  companyQuery: string

  setNameQuery: (value: string) => void
  setCompanyQuery: (value: string) => void

  onPress: () => void
  onClear: () => void
}

export function SearchCard({
  loading,
  nameQuery,
  companyQuery,
  setNameQuery,
  setCompanyQuery,
  onPress,
  onClear,
}: SearchProps) {
  return (
    <SearchContainer>
      <Title>Buscador de Bulas</Title>

      <InputsContainer>
        <InputContainer>
          <InputLabel>Nome do Medicamento:</InputLabel>
          <Input
            type="text"
            value={nameQuery}
            onChange={(e) => setNameQuery(e.target.value)}
            onSubmit={onPress}
            disabled={loading}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel>Laboratório Fabricante:</InputLabel>
          <Input
            type="text"
            value={companyQuery}
            onChange={(e) => setCompanyQuery(e.target.value)}
            onSubmit={onPress}
            disabled={loading}
          />
        </InputContainer>
      </InputsContainer>

      <Button onClick={onPress} disabled={loading}>
        Buscar
      </Button>
      <Button onClick={onClear} disabled={loading}>
        Limpar
      </Button>
    </SearchContainer>
  )
}
