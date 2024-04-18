import { useNavigate } from 'react-router-dom'
import { Item } from '../../pages/Home'
import { formatDate } from '../../utils/formatter'
import {
  Button,
  Title,
  MedicineDetailsContainer,
  ButtonContainer,
  ExpedientContainer,
  DownloadButton,
} from './styles'

type MedicineDetailsProps = {
  itemInfos: Item
}

export function MedicineDetailsCard({ itemInfos }: MedicineDetailsProps) {
  // Home page redirect //
  const navigate = useNavigate()

  async function handleHome() {
    navigate(`/`)
  }

  // Download PDF //
  const handleDownloadPDF = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <MedicineDetailsContainer>
      {itemInfos ? (
        <>
          <p>Nome do Medicamento:</p>
          <Title>{itemInfos.name}</Title>

          <p>Fabricante:</p>
          <Title>{itemInfos.company}</Title>

          <p>Data de publicação:</p>
          <Title>
            {itemInfos.published_at && formatDate(itemInfos.published_at)}
          </Title>

          <p>Princípio ativo:</p>
          {itemInfos.active_principles.map((principle) => (
            <Title key={principle.id}>{principle.name}</Title>
          ))}

          <>
            <p>Expediente:</p>
            <ExpedientContainer>
              {itemInfos.documents.map((expedient) => (
                <Title key={expedient.id}>{expedient.expedient}</Title>
              ))}
            </ExpedientContainer>
          </>

          <p>Bulas disponíveis:</p>
          <ButtonContainer>
            {itemInfos.documents.map((doc) => (
              <DownloadButton
                key={doc.id}
                onClick={() => handleDownloadPDF(doc.url)}
              >
                Download bula do{' '}
                {doc.type === 'PATIENT' ? 'Paciente' : 'Profissional'}
              </DownloadButton>
            ))}
          </ButtonContainer>

          <Button onClick={handleHome}>Voltar para a Home</Button>
        </>
      ) : (
        <Title>Item não encontrado!</Title>
      )}
    </MedicineDetailsContainer>
  )
}
