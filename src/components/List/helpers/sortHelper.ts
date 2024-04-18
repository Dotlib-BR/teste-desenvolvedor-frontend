export function sortHelper(medItems: any[], isSorted: string) {
    if (isSorted === 'asc') {
		medItems.sort((a, b) => {
			const dateA = new Date(a.published_at)
			const dateB = new Date(b.published_at)

			return dateA.getTime() - dateB.getTime()
		})
	} else if (isSorted === 'desc') {
		medItems.sort((a, b) => {
			const dateA = new Date(a.published_at)
			const dateB = new Date(b.published_at)
			return dateB.getTime() - dateA.getTime()
		})
	}
}