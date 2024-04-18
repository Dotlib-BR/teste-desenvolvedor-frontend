import { useCallback, useEffect, useState } from 'react'

import { api } from '@/core/services/api'

type Document = {
  id: string
  expedient: string
  type: 'PROFESSIONAL' | 'PATIENT'
  url: string
}

type ActivePrinciple = {
  id: string
  name: string
}

type Medication = {
  id: string
  name: string
  published_at: Date
  company: string
  documents: Document[]
  active_principles: ActivePrinciple[]
}

type ResponseSchema = {
  first: number
  prev: number | null
  next: number | null
  last: number
  pages: number
  items: number
  data: Medication[]
}

export type GetMedicationsProps = {
  page?: number
  name?: string
  company?: string
}

export const useMedication = () => {
  const [response, setResponse] = useState<ResponseSchema>({} as ResponseSchema)
  const [isLoading, setIsLoading] = useState(false)

  const getMedications = useCallback(
    async ({ page = 1, name, company }: GetMedicationsProps) => {
      let query = `/data?_page=${page}`

      if (name) query = `/data?name=${name.toUpperCase()}`

      if (company) query = `/data?company=${company.toUpperCase()}`

      try {
        setIsLoading(true)
        const response = await api.get(query)

        if (name || company) {
          setResponse({
            data: response.data,
            first: 0,
            prev: null,
            next: null,
            last: 0,
            pages: 0,
            items: 0,
          })
        } else {
          setResponse(response.data)
        }

        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    },
    [],
  )

  useEffect(() => {
    getMedications({})
  }, [getMedications])

  return {
    getMedications,
    response,
    isLoading,
  }
}
