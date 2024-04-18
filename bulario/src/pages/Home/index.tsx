import { HomeContainer } from './styles'

import { SearchCard } from '../../components/SearchCard'
import { SearchResult } from '../../components/SearchResult'
import { MedicineCard } from '../../components/MedicineCard'

import { useState } from 'react'
import axios from 'axios'

export interface Item {
  id: string
  name: string
  published_at: string
  company: string
  documents: { id: string; expedient: string; type: string; url: string }[]
  active_principles: { id: string; name: string }[]
}

export function Home() {
  // State Storage //
  const [nameQuery, setNameQuery] = useState('')
  const [companyQuery, setCompanyQuery] = useState('')
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(false)

  // Fetch API function //
  async function handleFetchData() {
    setLoading(true)
    try {
      const response = await axios.get('http://localhost:3000/data')
      setItems(response.data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
    setLoading(false)
  }

  // Clear Search Function //
  async function handleClearSearch() {
    setNameQuery('')
    setCompanyQuery('')
    setItems([])
  }

  // Query filtering //
  const filteredItems = items
    .filter(
      (item) =>
        item.name.toLowerCase().includes(nameQuery.toLowerCase()) &&
        item.company.toLowerCase().includes(companyQuery.toLowerCase()),
    )
    .sort((a, b) => {
      // Converting dates to Date objects //
      const dateA = new Date(a.published_at)
      const dateB = new Date(b.published_at)
      // Sorting in descending order //
      return dateB.getTime() - dateA.getTime()
    })

  return (
    <HomeContainer>
      <SearchCard
        nameQuery={nameQuery}
        companyQuery={companyQuery}
        setNameQuery={setNameQuery}
        setCompanyQuery={setCompanyQuery}
        loading={loading}
        onPress={handleFetchData}
        onClear={handleClearSearch}
      />

      <SearchResult length={filteredItems.length} />

      <MedicineCard filteredItems={filteredItems} />
    </HomeContainer>
  )
}
