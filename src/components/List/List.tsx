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
	const [isSorted, setIsSorted] = useState('none')

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
			<div className={listStyles.mobileSort}>
				<p>Organizar pela data por:</p>
				<div>
					<button data-sort={isSorted} onClick={() => setIsSorted('asc')}>
						Mais antigo
					</button>
					<button data-sort={isSorted} onClick={() => setIsSorted('desc')}>
						Mais Novo
					</button>
				</div>
			</div>
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
							<li className={listStyles.publishDate}>
								<p>data de publicação</p>
								<button
									data-sort={isSorted}
									onClick={() =>
										setIsSorted(
											isSorted === 'asc'
												? 'desc'
												: 'asc'
										)
									}
								>
									▼
								</button>
							</li>
							<li>
								<p>bula</p>
							</li>
						</ul>
					</li>

					<MedItems medData={medData} isSorted={isSorted} />

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
