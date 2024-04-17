import "../styles/medications.sass"
import { MedicationCard } from "./MedicationCard";
import { useMedications } from "../store/UseMedications";

export const Medications = () => {
  const { loading, loadingError, medications, searchTerm } = useMedications();

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {loadingError && <p>Ocorreu um erro ao carregar os medicamentos.</p>}
      <div className="medications-container">
        {medications &&
          medications
            .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
            .filter((medication) =>
              searchTerm.toLowerCase() === "" ? medication : medication.name.toLowerCase().includes(searchTerm)
            )
            .map((medication, index) => (
              <MedicationCard key={index} medication={medication} />
            ))}
      </div>
    </div>
  );

}
