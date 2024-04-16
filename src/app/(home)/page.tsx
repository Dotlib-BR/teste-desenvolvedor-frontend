import { useHome } from './useHome'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default async function Home() {
  const { medicines } = await useHome()

  return (
    <main className='flex flex-col  items-center justify-center py-6'>
      <h1>Dotlib Farma</h1>
      <div className='flex flex-wrap w-[1280px]'>
        {medicines.map((medicine) => {
          return (
            <Card key={medicine.id}>
              <CardHeader>
                <CardTitle>
                  {medicine.name.substring(1, 15).concat('...')}
                </CardTitle>
                <CardDescription>{medicine.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <strong>Data de publicação:</strong>
                <span>{medicine.published_at}</span>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </main>
  )
}
