'use client'

import { useEffect, useState } from 'react'
import { MedItems } from './MedItems/MedItems'
import { fetchMedData } from '@/services/fetchMedData'
import listStyles from './ListStyle.module.scss'
import { fetchSearchData } from '@/services/fetchSearchData'
import { MedSearch } from './MedSearch/MedSearch'

export const List = () => {
	const [medData, setMedData] = useState([])
	const [page, setPage] = useState(1)
	const [searchData, setSearchData] = useState('')

	useEffect(() => {
		if (searchData.length <= 0) {
			const getMedData = async () => {
				const medData = await fetchMedData(page)
				setMedData(medData.data)
			}

			getMedData()
		} else {
			const getSearchData = async () => {
				const searchMedData = await fetchSearchData(searchData, page)
				setMedData(searchMedData)
			}

			getSearchData()
		}
	}, [page, searchData])

	return (
		<div className={listStyles.listWrapper}>
			<MedSearch setSearchData={setSearchData} />
			<div>
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

					<MedItems medData={medData} />

					<li className={listStyles.pagination}>
						<button
							className={listStyles.pageButton}
							onClick={() => setPage(page - 1)}
							disabled={page === 1 ? true : false}
						>
							Anterior
						</button>

						<button
							className={listStyles.pageButton}
							onClick={() => setPage(page + 1)}
							disabled={medData.length < 10 ? true : false}
						>
							Próxima
						</button>
					</li>
				</ul>
			</div>
		</div>
	)
}
