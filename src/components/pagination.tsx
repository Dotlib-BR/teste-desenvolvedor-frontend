// Components
import { Button } from "@/components/ui/button"

interface PaginationProps {
	dataLength: number
	pageNum: number
	onNextClick: () => void
	onPrevClick: () => void
}

export const Pagination = ({
	dataLength,
	pageNum,
	onNextClick,
	onPrevClick
}: PaginationProps) => {
	const canGoToNext = dataLength / 10 > pageNum
	const canGoToPrev = pageNum !== 1

	return (
		<div className="flex items-center justify-center gap-4">
			<Button onClick={onPrevClick} disabled={!canGoToPrev}>
				Anterior
			</Button>
			<div>{pageNum}</div>
			<Button onClick={onNextClick} disabled={!canGoToNext}>
				Próximo
			</Button>
		</div>
	)
}
