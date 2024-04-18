import axios from 'axios'
import { useState, useEffect, useCallback } from 'react'
import { MedicineDetailsCard } from '../../components/MedicineDetailsCard'
import { Item } from '../Home'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, DetailsContainer, DetailsContainerError } from './styles'

export function Details() {
  // Home page redirect //
  const navigate = useNavigate()

  async function handleHome() {
    navigate(`/`)
  }

  const [itemData, setItemData] = useState<Item | null>(null)
  const params = useParams()

  const fetchItem = useCallback(async () => {
    try {
      const response = await axios.get<Item>(
        `http://localhost:3000/data/${params.id}`,
      )

      setItemData(response.data)
    } catch (error) {
      console.error('Error fetching item:', error)
    }
  }, [params])

  useEffect(() => {
    fetchItem()
  }, [params, fetchItem])

  if (!itemData) {
    return (
      <DetailsContainerError>
        <p>Item não encontrado.</p>
        <Button onClick={handleHome}>Voltar para a Home</Button>
      </DetailsContainerError>
    )
  }

  return (
    <DetailsContainer>
      <MedicineDetailsCard itemInfos={itemData} />
    </DetailsContainer>
  )
}
