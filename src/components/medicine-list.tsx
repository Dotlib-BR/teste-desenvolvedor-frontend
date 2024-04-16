import { formatDocumentType } from "@/helper/format-document-type"
import { Medicine } from "@/types/medicine"

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
      <div className="flex justify-between bg-zinc-800 p-2 text-lg text-white">
        <strong>Medicamento</strong>
        <strong>Documento</strong>
      </div>
      {medicines.slice(start, limit).map((medicine) => (
        <div key={medicine.id} className="border-b p-2 hover:bg-zinc-200">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 overflow-hidden" title={medicine.name}>
              <p className="truncate font-semibold">{medicine.name}</p>
              <p className="truncate text-xs">
                <span className="hidden sm:inline">Companhia: </span>
                {medicine.company}
              </p>
              <span className="text-sm">
                <span>Data de publicação: </span>
                {new Date(medicine.published_at).toLocaleDateString("pt-BR")}
              </span>
            </div>
            <div className="flex gap-2">
              {medicine.documents.map((document) => (
                <div
                  key={document.id}
                  className=" w-20 rounded-md bg-zinc-800 p-1 text-center text-xs text-white"
                >
                  {formatDocumentType(document.type)}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
