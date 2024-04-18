import { format } from 'date-fns'
import medStyles from './MedItemsStyle.module.scss'
import { ptBR } from 'date-fns/locale/pt-BR'
import Link from 'next/link'
import { MedDataProps } from '@/types/dataTypes'
import { sortHelper } from '../helpers/sortHelper'

interface MedItemsProps extends MedDataProps {
	isSorted: string
}

export const MedItems = ({ medData, isSorted }: MedItemsProps) => {
	const medItems = Array.isArray(medData) ? medData : []

	sortHelper(medData, isSorted)

	return (
		<>
			{medItems.map((medItem) => (
				<li key={medItem.id} className={medStyles.medItem}>
					<div className={medStyles.medItemInfo}>
						<p>
							<strong>{medItem.name}</strong>
						</p>
						<div>
							<p>Princípio Ativo: </p>
							{medItem.active_principles.map((principle: any) => (
								<div key={principle.id}>
									<p>{principle.name}</p>
								</div>
							))}
						</div>
					</div>

					<div className={medStyles.medItemInfo}>
						<p>{medItem.company}</p>
					</div>

					<div className={`${medStyles.medItemInfo} ${medStyles.medDate}`}>
						<p>
							{format(medItem.published_at, 'dd/MM/yyyy', {
								locale: ptBR,
							})}
						</p>
					</div>

					<div className={medStyles.medDownload}>
						{medItem.documents.map((document) =>
							document.type === 'PATIENT' ? (
								<Link
									key={document.id}
									href={document.url}
									target='_blank'
									className={medStyles.downloadLink}
								>
									Paciente
								</Link>
							) : (
								<Link
									key={document.id}
									href={document.id}
									target='_blank'
									className={medStyles.downloadLink}
								>
									Médico
								</Link>
							)
						)}
					</div>
				</li>
			))}
		</>
	)
}
