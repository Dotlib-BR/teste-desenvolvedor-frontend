export type Medicine = {
	id: string
	name: string
	published_at: Date
	company: string
	documents: Document[]
	active_principles: ActivePrinciple[]
}

type ActivePrinciple = {
	id: string
	name: string
}

type Document = {
	id: string
	expedient: string
	type: string
	url: string
}
