import { Pill } from "lucide-react"

import { ThemeToggle } from "./theme-toggle"

export const Header = () => {
	return (
		<header className="mb-2 flex h-14 h-dvh items-center justify-between">
			<div className="flex items-center gap-2">
				<Pill className="size-6 fill-foreground/10" />
				<h2 className="hidden text-2xl font-bold md:block">
					Bulário Eletrônico
				</h2>
			</div>

			<ThemeToggle />
		</header>
	)
}
