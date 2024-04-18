export async function fetchSearchData(query: string): Promise<any> {
	try {
		let url
		let response

		url = `http://localhost:3000/data/`

		const fetchQueryData = await fetch(url)
		const dataFetched = await fetchQueryData.json()

		const filteredData = dataFetched.filter(
			(item: { name: string; company: string; id: string }) =>
				item.name.toLowerCase().includes(query.toLowerCase()) ||
				item.company.toLowerCase().includes(query.toLowerCase()) ||
				item.id.toLowerCase().includes(query.toLowerCase())
		)

		response = filteredData

		if (!Array.isArray(response)) {
			response = [response]
		}

		return response
	} catch (error) {
		console.error('Ocorreu um erro de: ', error)
	}
}
