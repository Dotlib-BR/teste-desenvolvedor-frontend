export type Document = {
    id: string,
	expedient: string,
	type: string,
	url: string
}

type Principle = {
    id: string,
    name: string,
}

export type Medicine = {
    id: string,
	name: string,
	published_at: string,
	company: string,
	documents: Document[],
	active_principles: Principle[]
}