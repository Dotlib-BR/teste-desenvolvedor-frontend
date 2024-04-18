import { Header } from '@/components/Header/Header'
import { List } from '@/components/List/List'

export default async function Home() {
	return (
		<>
			<Header />
			<main>
				<List />
			</main>
		</>
	)
}
