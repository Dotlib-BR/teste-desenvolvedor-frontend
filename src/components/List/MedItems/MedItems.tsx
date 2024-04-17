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

import medStyles from './MedItemsStyle.module.scss'

export const MedItems = ({ medData }: any) => {
	const medItems = Array.isArray(medData) ? medData : []

	return (
		<>
			{medItems.map((medItem) => (
				<li key={medItem.id} className={medStyles.medItem}>
					<div className={medStyles.medItemInfo}>
						<p><strong>{medItem.name}</strong></p>
						<div>
							<p>Princípios Ativos: </p>
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

					<div className={medStyles.medItemInfo}>
						<p>{medItem.published_at}</p>
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
