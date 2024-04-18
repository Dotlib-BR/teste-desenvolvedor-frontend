import { api } from "@/lib/axios"

import { Medicine } from "@/@types/medicine"

export const getItems = async () => {
	const response = await api.get<Medicine[]>("/data")

	return response.data
}
