import "../styles/medicationcard.sass";
import { Medication } from "../types/Medication";

export const MedicationCard = ({ medication }: { medication: Medication }) => {
  return (
    <div className="medication-card">
      <h3>{medication.name}</h3>
      <p>Empresa: {medication.company}</p>
      <p>Data de Publicação: {medication.published_at}</p>
      <p>Documentos:</p>
      <ul>
        {medication.documents.map((document, index) => (
          <ul key={index}>
            <li>{document.id}</li>
            <li>{document.expedient}</li>
            <li>{document.type}</li>
            <li>{document.url}</li>
          </ul>
        ))}
      </ul>
      <p>Princípios Ativos:</p>
      <ul>
        {medication.active_principles.map((activePrinciple, index) => (
          <ul key={index}>
            <li>{activePrinciple.id}</li>
            <li>{activePrinciple.name}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
}
