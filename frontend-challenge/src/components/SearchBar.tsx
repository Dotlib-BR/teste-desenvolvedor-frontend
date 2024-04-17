import "../styles/searchbar.sass"
import { useMedications } from "../store/UseMedications";
import { useEffect, useRef } from "react";

export const SearchBar = () => {
  const input = useRef<HTMLInputElement>(null);

  const { searchTerm, setSearchTerm } = useMedications();

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);

  return (
    <div className="container">
      <input type="text" placeholder="Buscar Medicamento" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} ref={input} className="input" />
    </div>
  )
}
