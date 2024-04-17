export async function fetchSearchData(query: string) {
	const isUUID = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$')

	let url
	let response

	if (isUUID.test(query)) {
		url = `http://localhost:3000/data/${query}`
		const fetchIdData = await fetch(url)

		response = await fetchIdData.json()

		response = [response]
	} else {
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
	}

	console.log('aaa', response)

	return response
}
