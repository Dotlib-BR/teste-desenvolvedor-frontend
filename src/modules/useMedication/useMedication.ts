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
  sort?: '-' | null
  page?: number
  name?: string
  company?: string
}

export type QueryParams = {
  name: string
  company: string
  page: string
  sort: string
}

export const useMedication = () => {
  const [queryParams, setQueryParams] = useState<QueryParams>({
    page: '_page=1',
  } as QueryParams)
  const [response, setResponse] = useState<ResponseSchema>({} as ResponseSchema)
  const [isLoading, setIsLoading] = useState(false)

  const handleSetQueryParams = useCallback((data: Partial<QueryParams>) => {
    setQueryParams((oldState) => {
      return {
        ...oldState,
        ...data,
      }
    })
  }, [])

  const getMedications = useCallback(async () => {
    const query = `/data?` + Object.values(queryParams).join('')

    console.log(query)

    try {
      setIsLoading(true)
      const response = await api.get(query)

      setResponse(response.data)

      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [queryParams])

  useEffect(() => {
    getMedications()
  }, [getMedications])

  return {
    getMedications,
    response,
    isLoading,
    handleSetQueryParams,
  }
}
