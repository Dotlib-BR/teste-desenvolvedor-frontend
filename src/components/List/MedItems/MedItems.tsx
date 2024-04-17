// interface MedListProps {
// 	medData: {
// 		id: string
// 		name: string
// 		published_at: string
// 		company: string
// 		documents: DocumentsProps[]
// 		active_principles: PrinciplesProps[]
// 	}[]
// }

// interface DocumentsProps {
// 	id: string
// 	expedient: string
// 	type: string
// 	url: string
// }

// interface PrinciplesProps {
// 	id: string
// 	name: string
// }

import { format } from 'date-fns'
import medStyles from './MedItemsStyle.module.scss'
import { ptBR } from 'date-fns/locale/pt-BR'

export const MedItems = ({ medData }: any) => {
	const medItems = Array.isArray(medData) ? medData : []

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
								<p key={principle.id}>
									<p>{principle.name}</p>
								</p>
							))}
						</div>
					</div>

					<div className={medStyles.medItemInfo}>
						<p>{medItem.company}</p>
					</div>

					<div className={`${medStyles.medItemInfo} ${medStyles.medDate}`}>
						<p >
							{format(medItem.published_at, 'dd/MM/yyyy', {
								locale: ptBR,
							})}
						</p>
					</div>

					<div className={medStyles.medDownload}>
						<button>Médico</button>
						<button>Paciente</button>
					</div>
				</li>
			))}
		</>
	)
}
