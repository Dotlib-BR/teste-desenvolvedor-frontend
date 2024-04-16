import { MedicineProps } from '@/@types/medicine'
import { nameFormatter } from '@/lib/utils'
import dayjs from 'dayjs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

interface CardsProps {
  medicines: MedicineProps[]
}

export function Cards({ medicines }: CardsProps) {
  return (
    <>
      {medicines.map((medicine) => {
        return (
          <Card
            className='flex flex-col w-[300px] h-[280px] justify-between'
            key={medicine.id}
          >
            <CardHeader>
              <CardTitle>
                <p title={medicine.name}>{nameFormatter(medicine.name)}</p>
              </CardTitle>
              <CardDescription>{medicine.company}</CardDescription>
            </CardHeader>
            <div className=''>
              <CardContent className='flex flex-col'>
                <strong>Data de publicação:</strong>
                <span>
                  {dayjs(medicine.published_at).format('DD-MMMM-YYYY')}
                </span>
              </CardContent>
              <CardFooter className='self-end'>
                <a
                  className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 p-2 mb-auto'
                  href='/pdf_sample.pdf'
                  target='_blank'
                >
                  Download bula
                </a>
              </CardFooter>
            </div>
          </Card>
        )
      })}
    </>
  )
}
