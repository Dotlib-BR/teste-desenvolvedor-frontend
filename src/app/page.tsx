import { Header } from '@/components/Header/Header'
import { List } from '@/components/List/List'

export default async function Home() {
	const teste = await (await fetch('http://localhost:3000/data/')).json()
	console.log(teste)

	return (
		<>
			<Header />
			<main>
				<List />
			</main>
		</>
	)
}
