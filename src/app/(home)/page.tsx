import { Header } from "@/components/header"
import { Medicines } from "@/components/medicines"

export default function IndexPage() {
	return (
		<div className="mx-auto flex min-h-dvh flex-col p-8 pt-2 md:max-w-[1280px]">
			<Header />

			<Medicines />
		</div>
	)
}
