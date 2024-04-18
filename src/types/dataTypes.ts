export interface MedDataProps {	
	medData: {
		id: string
		name: string
		published_at: string
		company: string
		documents: DocumentsProps[]
		active_principles: PrinciplesProps[]
	}[]
}

export interface DocumentsProps {
	id: string
	expedient: string
	type: string
	url: string
}

interface PrinciplesProps {
	id: string
	name: string
}