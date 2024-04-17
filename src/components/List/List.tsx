'use client'

import { useEffect, useState } from 'react'
import { MedItems } from './MedItems/MedItems'
import { fetchMedData } from '@/services/fetchMedData'
import listStyles from './ListStyle.module.scss'

export const List = () => {
	const [medData, setMedData] = useState([])
	const [page, setPage] = useState(1)
	const [isSearch, setIsSearch] = useState(false)
	const [searchData, setSearchData] = useState({})

	useEffect(() => {
		if (!isSearch) {
			const getMedData = async () => {
				const medData = await fetchMedData(page)
				setMedData(medData.data)
			}
			getMedData()
		}
	}, [isSearch, page])

	console.log(medData)

	return (
		<>
			{/* <div setIsSearch={setIsSearch}>SEARCH</div> */}
			<div className={listStyles.listWrapper}>
				<ul className={listStyles.mainList}>
					<li>
						<ul className={listStyles.itemTopics}>
							<li>
								<p>nome</p>
							</li>
							<li>
								<p>empresa</p>
							</li>
							<li>
								<p>data de publicação</p>
							</li>
							<li>
								<p>bula</p>
							</li>
						</ul>
					</li>

					{!isSearch ? <MedItems medData={medData} /> : <MedItems medData={searchData} />}

					<li className={listStyles.pagination}>
						{page > 1 && (
							<button
								className={listStyles.pageButton}
								onClick={() => setPage(page - 1)}
							>
								Anterior
							</button>
						)}

						{medData.length === 10 && (
							<button
								className={listStyles.pageButton}
								onClick={() => setPage(page + 1)}
							>
								Próxima
							</button>
						)}
					</li>
				</ul>
			</div>
		</>
	)
}
