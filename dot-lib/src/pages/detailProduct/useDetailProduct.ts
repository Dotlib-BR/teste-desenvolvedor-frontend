import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../services/api'
import { ProductProps } from '../../contexts/productContext'

export function useDetailProduct() {
  const { id } = useParams()
  const [product, setProduct] = useState<ProductProps | null>(null)

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await api.get(`/data/${id}`)
        setProduct(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getProduct()
  }, [])

  const handleOpenDoc = (url: string) => {
    window.open(url, '_blank')
  }
  return { product, handleOpenDoc }
}
