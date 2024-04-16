import { useState } from 'react'
import { GetProductsProps, TypeSearchProps } from '../../useHome'

interface useFilterProductsProps {
  getProducts: (data: GetProductsProps) => Promise<void>
}

export function useFilterProducts({ getProducts }: useFilterProductsProps) {
  const typesSearch = [
    {
      id: 1,
      type: 'product',
      title: 'Medicamento',
    },
    {
      id: 2,
      type: 'company',
      title: 'Laboratório',
    },
  ]

  const [filterValue, setFilterValue] = useState<string>('')
  const [typeSearch, setTypeSearch] = useState<TypeSearchProps>('product')
  const [loading, setLoading] = useState(false)

  async function aplySearch() {
    if (!typeSearch || !filterValue) {
      return
    }

    setLoading(true)
    await getProducts({ type: typeSearch, text: filterValue })
    setLoading(false)
  }

  return {
    typesSearch,
    typeSearch,
    filterValue,
    loading,
    aplySearch,
    setFilterValue,
    setTypeSearch,
  }
}
