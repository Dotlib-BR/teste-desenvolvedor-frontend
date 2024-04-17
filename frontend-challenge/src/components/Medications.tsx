import "../styles/medications.sass";
import { MedicationCard } from "./MedicationCard";
import { useMedications } from "../store/UseMedications";
import { Pagination } from "./Pagination";

export const Medications = () => {
  const { loading, loadingError, medications, searchTerm } = useMedications();

  return (
    <div>
      <div className="medications-container">
        {loading && <p>Carregando...</p>}
        {loadingError && <p>Ocorreu um erro ao carregar os medicamentos.</p>}
        {medications &&
          medications
            .filter((medication) =>
              searchTerm.toLowerCase() === "" ? true : medication.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
            .map((medication, index) => (
              <MedicationCard key={index} medication={medication} />
            ))}
      </div>
      {!loading && !loadingError && <Pagination />}
    </div>
  );
};
