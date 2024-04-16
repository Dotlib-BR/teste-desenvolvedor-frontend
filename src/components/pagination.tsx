'use client'

import { MedicineProps } from '@/@types/medicine'
import {
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as Root,
} from '@/components/ui/pagination'

interface PaginationProps {
  medicines: MedicineProps
}

export function Pagination({ medicines }: PaginationProps) {
  return (
    <Root>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`?_page=${medicines.prev ? medicines.prev : medicines.first}`}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>
            {medicines.next ? medicines.next - 1 : medicines.prev! + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={`?_page=${medicines.next ? medicines.next : medicines.last}`}
          />
        </PaginationItem>
      </PaginationContent>
    </Root>
  )
}
