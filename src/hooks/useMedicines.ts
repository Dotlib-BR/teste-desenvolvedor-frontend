import { useContext } from 'react'
import { LeafletContext } from '../context/LeafletContext'

export function useMedicines() {
  return useContext(LeafletContext)
}
