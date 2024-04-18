interface Leaflet {
  id: string
  name: string
  published_at: string
  company: string
  documents: {
    id: string
    type: 'PROFESSIONAL | PATIENT'
    url: string
  }
  active_principles: {
    id: string
    name: string
  }
}

interface LeafletContextProps {
  leaflets: Leaflet[]
  loading: boolean
  handleGetLeaflet: () => Promise<void>
}
