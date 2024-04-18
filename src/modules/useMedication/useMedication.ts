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

export const useMedication = () => {
  const [response, setResponse] = useState<ResponseSchema>({} as ResponseSchema)
  const [isLoading, setIsLoading] = useState(false)

  const getMedications = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/data?_page=1`)

      setResponse(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getMedications()
  }, [getMedications])

  return {
    getMedications,
    response,
    isLoading,
  }
}
