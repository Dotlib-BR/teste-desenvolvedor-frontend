import { FileDown } from "lucide-react"

import { Medicine } from "@/types/medicine"

// Components
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// Utilities
import { formatDate } from "@/helpers/format-date"
import { formatDocumentType } from "@/helpers/format-document-type"
import pdfFile from "../../api/public/pdf_sample.pdf"

interface MedicineDialogProps {
  medicine: Medicine
}

export const MedicineDialog = ({ medicine }: MedicineDialogProps) => {
  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild className="hover:cursor-pointer">
          <div className="flex-1 overflow-hidden" title={medicine.name}>
            <p className="truncate font-semibold">{medicine.name}</p>
            <p className="truncate text-xs">
              <span className="hidden sm:inline">Laboratório: </span>
              {medicine.company}
            </p>
          </div>
        </DialogTrigger>
        <DialogContent className="">
          <DialogTitle>{medicine.name}</DialogTitle>
          <DialogDescription>Laboratório {medicine.company}</DialogDescription>

          <div>
            <strong>Publicação: </strong>
            {medicine.published_at && ` ${formatDate(medicine.published_at)}`}
            <div>
              <strong>Princípios Ativos: </strong>
              {medicine.active_principles.map((principle) => (
                <span key={principle.id}>{principle.name}</span>
              ))}
            </div>
          </div>

          <div className="border-b"></div>

          <div>
            <h4 className="mb-2 text-xl font-semibold">
              Bulas disponíveis para download
            </h4>

            <div className="flex gap-8">
              {medicine.documents.map((document) => (
                <div key={document.id} className="">
                  <div className="text-sm">Nº {document.expedient}</div>
                  <div className="font-semibold">
                    Bula {formatDocumentType(document.type)}
                  </div>
                  <a href={pdfFile} download className="mt-4 inline-block">
                    <Button className="flex gap-2">
                      <FileDown />
                      Download
                    </Button>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
