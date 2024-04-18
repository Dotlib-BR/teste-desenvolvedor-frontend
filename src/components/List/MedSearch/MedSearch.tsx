'use client'

import { useForm } from 'react-hook-form'
import searchStyles from './SearchStyle.module.scss'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface MedSearchProps {
	setSearchData: (value: string) => void
}

type formData = z.infer<typeof createSchema>

const createSchema = z.object({
	search: z.string().min(1, { message: 'Campo obrigatório *' }),
})

export const MedSearch = ({ setSearchData }: MedSearchProps) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted },
		reset,
	} = useForm<formData>({
		resolver: zodResolver(createSchema),
	})

	const sendFormData = (data: formData) => {
		setSearchData(data.search)
	}

	const handlereset = () => {
		reset()
		setSearchData('')
	}

	return (
		<form className={searchStyles.searchWrapper}>
			<div>
				<div className={searchStyles.searchInput}>
					<input
						type='text'
						placeholder='Pesquise seu remédio...'
						{...register('search')}
						size={30}
					/>
					{errors.search && <span>{errors.search.message as React.ReactNode}</span>}
				</div>
				<div className={searchStyles.searchButtons}>
					<button onClick={handleSubmit(sendFormData)}>Pesquisar</button>
					{isSubmitted && (
						<button type='reset' onClick={handlereset}>
							Reiniciar
						</button>
					)}
				</div>
			</div>
		</form>
	)
}
