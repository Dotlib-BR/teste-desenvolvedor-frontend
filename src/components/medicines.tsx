"use client"

import { useReducer, useState } from "react"

import { MedicineCard } from "@/components/medicine-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"

import { getItems } from "@/http/get-items"

import { useQuery } from "@tanstack/react-query"

import { compareDesc } from "date-fns"
import { ArrowUp01, ArrowUp10 } from "lucide-react"

import { Pagination } from "./pagination"

export const Medicines = () => {
	const [filter, setFilter] = useState("")
	const initialSortState = { sortOrder: "desc" }

	const sortReducer = (
		state: {
			sortOrder: string
		},
		action: {
			type: string
		}
	) => {
		switch (action.type) {
			case "SORT_NEWEST_FIRST":
				return { sortOrder: "desc" }
			case "SORT_OLDEST_FIRST":
				return { sortOrder: "asc" }
			default:
				return state
		}
	}

	const [sortState, dispatch] = useReducer(sortReducer, initialSortState)

	const { data: medicines } = useQuery({
		queryFn: getItems,
		queryKey: ["medicine"]
	})

	const filteredMedicines = medicines?.filter((medicine) => {
		if (filter === "") return

		if (medicine.name.includes(filter.toUpperCase())) {
			return medicine
		}

		if (medicine.company.includes(filter.toUpperCase())) {
			return medicine
		}
	})

	const orderedFilteredMedicinesByDate =
		filteredMedicines &&
		filteredMedicines.sort((a, b) => {
			const dateA = new Date(a.published_at)
			const dateB = new Date(b.published_at)

			return compareDesc(dateB, dateA)
		})

	const orderedMedicinesByDate =
		medicines &&
		medicines.sort((a, b) => {
			const dateA = new Date(a.published_at)
			const dateB = new Date(b.published_at)

			return compareDesc(dateB, dateA)
		})

	const [pagination, setPagination] = useState({
		page: 1,
		start: 0,
		limit: 9
	})

	const handleNextClick = () => {
		setPagination((prev) => {
			return {
				...prev,
				page: prev.page + 1,
				limit: prev.limit + 10,
				start: prev.start + 10
			}
		})
	}

	const handlePrevClick = () => {
		setPagination((prev) => {
			return {
				...prev,
				page: prev.page - 1,
				limit: prev.limit - 10,
				start: prev.start - 10
			}
		})
	}

	return (
		<div className="flex h-1/2 w-full flex-col gap-4 pb-2 ">
			<div className="flex gap-2 self-center">
				<div className="">
					<Input
						onChange={(e) => setFilter(e.target.value)}
						className="max-w-[840px] self-center"
						value={filter}
						placeholder="Nome do medicamento ou laboratório"
					/>
				</div>

				<Button
					size="lg"
					className="h-auto px-4 "
					onClick={() =>
						dispatch({
							type:
								sortState.sortOrder === "asc"
									? "SORT_NEWEST_FIRST"
									: "SORT_OLDEST_FIRST"
						})
					}
				>
					{sortState.sortOrder === "desc" ? <ArrowUp01 /> : <ArrowUp10 />}
				</Button>
			</div>

			{!medicines && !orderedFilteredMedicinesByDate && (
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{Array.from({ length: 12 }).map((it, idx) => (
						<Skeleton key={idx} className="h-28 w-full" />
					))}
				</div>
			)}

			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{sortState.sortOrder === "desc" &&
				!orderedFilteredMedicinesByDate?.length &&
				orderedMedicinesByDate ? (
					<>
						{orderedMedicinesByDate
							.slice(pagination.start, pagination.limit)
							.map((medicine) => (
								<MedicineCard key={medicine.id} medicine={medicine} />
							))}
					</>
				) : (
					<>
						{orderedMedicinesByDate &&
							!orderedFilteredMedicinesByDate?.length &&
							orderedMedicinesByDate
								.reverse()
								.slice(pagination.start, pagination.limit)
								.map((medicine) => (
									<MedicineCard key={medicine.id} medicine={medicine} />
								))}
					</>
				)}

				{sortState.sortOrder === "desc" && orderedFilteredMedicinesByDate ? (
					<>
						{orderedFilteredMedicinesByDate
							.slice(pagination.start, pagination.limit)
							.map((medicine) => (
								<MedicineCard key={medicine.id} medicine={medicine} />
							))}
					</>
				) : (
					<>
						{orderedFilteredMedicinesByDate &&
							orderedFilteredMedicinesByDate
								.reverse()
								.slice(pagination.start, pagination.limit)
								.map((medicine) => (
									<MedicineCard key={medicine.id} medicine={medicine} />
								))}
					</>
				)}
			</div>

			<Pagination
				pageNum={pagination.page}
				dataLength={
					filter
						? (orderedFilteredMedicinesByDate?.length as number)
						: (medicines?.length as number)
				}
				onNextClick={handleNextClick}
				onPrevClick={handlePrevClick}
			/>
		</div>
	)
}
