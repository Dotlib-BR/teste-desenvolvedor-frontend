import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

import { Medicine } from "@/@types/medicine"

import "@radix-ui/react-dialog"

import { MedicineDialogDetails } from "./medicine-dialog-details"

interface MedicineCardProps {
	medicine: Medicine
}

export const MedicineCard = ({ medicine }: MedicineCardProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Card className="max-w-[470px] cursor-pointer">
					<CardHeader>
						<CardTitle className="text-xl capitalize">
							{medicine.name?.toLowerCase()}
						</CardTitle>
						<CardDescription>
							<strong>Publicado em</strong>:{" "}
							{new Intl.DateTimeFormat("pt-BR").format(
								new Date(medicine.published_at)
							)}
							<br />
							<span className="">
								<strong>Laboratório</strong>:{" "}
								{medicine.company.substring(0, 40).concat("...")}
							</span>
						</CardDescription>
					</CardHeader>
				</Card>
			</DialogTrigger>

			<MedicineDialogDetails medicine={medicine} />
		</Dialog>
	)
}
