import { Medicine } from "@/types/medicine"

export const getMedicines = async () => {
  try {
    const req = await fetch("http://localhost:3000/data")
    const data = (await req.json()) as Medicine[]

    if (!req.ok) {
      return []
    }

    data.sort((a, b) => (a.published_at > b.published_at ? 1 : -1))

    return data
  } catch (error) {
    return []
  }
}
