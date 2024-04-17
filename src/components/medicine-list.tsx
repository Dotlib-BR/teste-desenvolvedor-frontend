import { Medicine } from "@/types/medicine"

// Utilities
import { formatDate } from "@/helpers/format-date"
import { MedicineDialog } from "./medicine-dialog"
interface MedicineListProps {
  medicines: Medicine[]
  start?: number
  limit?: number
}

export const MedicineList = ({
  medicines,
  start,
  limit,
}: MedicineListProps) => {
  return (
    <section className="overflow-hidden rounded-md border shadow-md">
      <div className="flex justify-between bg-zinc-800 px-4 py-2 text-lg text-white">
        <strong>Medicamento</strong>
        <strong>Publicação</strong>
      </div>
      {medicines.slice(start, limit).map((medicine) => (
        <div key={medicine.id} className="border-b p-4 hover:bg-zinc-200">
          <div className="flex items-center justify-between gap-4">
            <MedicineDialog key={medicine.id} medicine={medicine} />
            <span className="text-sm">{formatDate(medicine.published_at)}</span>
          </div>
        </div>
      ))}
    </section>
  )
}
