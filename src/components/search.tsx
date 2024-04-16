import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { FormEvent } from "react"

interface SearchProps {
  onChange: (value: string) => void
  onFilter: () => void
}

export const Search = ({ onChange, onFilter }: SearchProps) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onFilter()
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-4">
      <Input
        type="search"
        placeholder="Pesquise pelo nome do medicamento ou laboratório"
        onChange={(e) => onChange(e.target.value)}
      />
      <Button className="gap-2">
        <SearchIcon />
        <div className="hidden sm:inline">Pesquisar</div>
      </Button>
    </form>
  )
}
