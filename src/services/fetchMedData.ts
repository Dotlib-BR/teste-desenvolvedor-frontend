export async function fetchMedData(page: number) {
	let dataUrl = `http://localhost:3000/data/?_page=${page}&_per_page=10`

	const fetchMedData = await fetch(dataUrl)
	const response = await fetchMedData.json()

	return response
}
