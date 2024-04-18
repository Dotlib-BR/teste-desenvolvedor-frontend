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
		formState: { errors },
	} = useForm<formData>({
		resolver: zodResolver(createSchema),
	})

	const sendFormData = (data: formData) => {
		setSearchData(data.search)
	}

	return (
		<form className={searchStyles.search}>
			<div>
				<input type='text' placeholder='Pesquise seu remédio...' {...register('search')} />
				<button onClick={handleSubmit(sendFormData)}>Pesquisar</button>
			</div>

			{errors.search && <span>{errors.search.message as React.ReactNode}</span>}
		</form>
	)
}
