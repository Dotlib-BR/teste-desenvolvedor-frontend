import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
	DialogContent,
	DialogHeader,
	DialogTitle
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table"

import { Medicine } from "@/@types/medicine"

interface MedicineDialogDetailsProps {
	medicine: Medicine
}

export const MedicineDialogDetails = ({
	medicine
}: MedicineDialogDetailsProps) => {
	return (
		<DialogContent className="max-w-[560px]">
			<DialogHeader>
				<DialogTitle className="text-xl capitalize">
					{medicine.name.toLocaleLowerCase()}
				</DialogTitle>
			</DialogHeader>

			<Table>
				<TableBody>
					<TableRow>
						<TableCell className="text-muted-foreground">
							Publicado em
						</TableCell>
						<TableCell className="flex justify-end">
							{new Intl.DateTimeFormat("pt-BR").format(
								new Date(medicine.published_at)
							)}
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell className="text-muted-foreground">Laboratório</TableCell>
						<TableCell className="flex justify-end">
							{medicine.company.substring(0, 40).concat("...")}
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>

			<Accordion type="multiple">
				<AccordionItem value="item-1">
					<AccordionTrigger>Documentos</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-2">
						{medicine.documents.map((document) => (
							<li
								key={document.id}
								className="flex items-center justify-between"
							>
								<span>
									{document.type === "PATIENT" ? "Paciente" : "Profissional"}
								</span>
								<Button asChild size="sm">
									<a href={document.url} download={document.url}>
										Baixar documento
									</a>
								</Button>
							</li>
						))}
					</AccordionContent>
				</AccordionItem>

				<AccordionItem value="item-12">
					<AccordionTrigger>Ativos Principais</AccordionTrigger>
					<AccordionContent>
						{medicine.active_principles.map((ap) => (
							<li key={ap.id}>{ap.name}</li>
						))}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</DialogContent>
	)
}
