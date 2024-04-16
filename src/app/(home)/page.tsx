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
  const page = (searchParams?._page as string) || '1'
  const { medicines } = await useHome(name, page)

  return (
    <main className='flex flex-col py-6 w-full px-6'>
      <div className='flex flex-col w-full'>
        <h1 className=''>Dotlib Farma</h1>
        <Filter />
        <div className='flex flex-wrap gap-6'>
          <Cards medicines={medicines.data} />
        </div>
        <Pagination medicines={medicines} />
      </div>
    </main>
  )
}
