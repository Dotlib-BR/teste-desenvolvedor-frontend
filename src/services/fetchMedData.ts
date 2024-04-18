export async function fetchMedData(page: number) {
	try {
		let dataUrl = `http://localhost:3000/data/?_page=${page}&_per_page=10`

		const fetchMedData = await fetch(dataUrl)
		const response = await fetchMedData.json()

		response.data.forEach((med: any) => {
			med.documents.sort((a: any, b: any) => a.type.localeCompare(b.type))
		})

		return response
	} catch (error) {
		console.error('Ocorreu um erro de: ', error)
		return { medData: [] }
	}
}
