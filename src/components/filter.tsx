'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Input } from './ui/input'

export function Filter() {
  const router = useRouter()
  const [name, setName] = useState('')

  router.replace(`?name=${name}`)

  return (
    <Input
      placeholder='busque por um medicamento ou um laboratório...'
      className='mb-6 mt-6 max-w-[500px]'
      onChange={(e) => setName(e.target.value)}
    />
  )
}
