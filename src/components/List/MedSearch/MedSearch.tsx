'use client'

import { useForm } from 'react-hook-form'
import searchStyles from './SearchStyle.module.scss'

interface MedSearchProps {
	setSearchData: (value: string) => void
}

export const MedSearch = ({ setSearchData }: MedSearchProps) => {
	const { register, handleSubmit } = useForm()

	const sendFormData = (data: any) => {
		setSearchData(data.search)
	}

	return (
		<form className={searchStyles.search}>
			<input type='text' placeholder='Pesquise seu remédio...' {...register('search')} />
			<button onClick={handleSubmit(sendFormData)}>Pesquisar</button>
		</form>
	)
}
