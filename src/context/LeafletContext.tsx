import { ReactNode, createContext, useCallback, useState } from 'react'
import { getMedicines } from '../services/medicine'

interface LeafletProviderProps {
  children: ReactNode
}

export const LeafletContext = createContext<LeafletContextProps>(
  {} as LeafletContextProps
)

function LeafletProvider({ children }: LeafletProviderProps) {
  const [leaflets, setLeaflets] = useState<Leaflet[]>([])
  const [loading, setLoading] = useState(false)

  const handleGetLeaflet = useCallback(async (currentPage: number) => {
    try {
      setLoading(true)
      const response = await getMedicines(currentPage)
      setLeaflets(response?.data)
    } catch (error) {
      console.error('error get', error)
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <LeafletContext.Provider value={{ handleGetLeaflet, leaflets, loading }}>
      {children}
    </LeafletContext.Provider>
  )
}

export default LeafletProvider
