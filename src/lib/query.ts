import { getMedicines } from "@/data/medicine"
import { useQuery } from "@tanstack/react-query"

export const useMedicines = () =>
  useQuery({
    queryKey: ["medicines"],
    queryFn: getMedicines,
  })
