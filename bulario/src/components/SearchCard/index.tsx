import {
  Button,
  CardContainer,
  Input,
  InputContainer,
  InputLabel,
  Title,
} from './styles'

import { useState } from 'react'

export function SearchCard() {
  const [nomeMedicamento, setNomeMedicamento] = useState<string>('')
  const [nomeFabricante, setNomeFabricante] = useState<string>('')

  async function handleBuscar() {
    // Lógica para buscar as bulas com os nomes fornecidos //
    console.log('Buscar:', nomeMedicamento, nomeFabricante)
  }

  async function handleLimpar() {
    setNomeMedicamento('')
    setNomeFabricante('')
  }

  return (
    <CardContainer>
      <Title>Buscador de Bulas</Title>
      <InputContainer>
        <InputLabel>Nome do Medicamento:</InputLabel>
        <Input
          type="text"
          value={nomeMedicamento}
          onChange={(e) => setNomeMedicamento(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Laboratório Fabricante:</InputLabel>
        <Input
          type="text"
          value={nomeFabricante}
          onChange={(e) => setNomeFabricante(e.target.value)}
        />
      </InputContainer>
      <Button onClick={handleBuscar}>Buscar</Button>
      <Button onClick={handleLimpar}>Limpar</Button>
    </CardContainer>
  )
}
