import { useHome } from './useHome'

import { Cards } from '@/components/cards'
import { Filter } from '@/components/filter'
import { Pagination } from '@/components/pagination'

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  const name = searchParams?.name as string
  const { medicines } = await useHome(name)

  return (
    <main className='flex flex-col py-6 w-full px-6'>
      <div className='flex flex-col w-full'>
        <h1 className=''>Dotlib Farma</h1>
        <Filter />
        <div className='flex flex-wrap gap-6'>
          <Cards medicines={medicines} />
        </div>
        <Pagination />
      </div>
    </main>
  )
}
