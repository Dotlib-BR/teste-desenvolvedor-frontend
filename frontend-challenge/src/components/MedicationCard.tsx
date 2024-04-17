import "../styles/medicationcard.sass";
import { Medication } from "../types/Medication";

export const MedicationCard = ({ medication }: { medication: Medication }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <div className="medication-card">
      <h3 className="medication-name">{medication.name}</h3>
      <div className="medication-content">
        <p>Empresa: {medication.company}</p>
        <p>Data de Publicação: {formatDate(medication.published_at)}</p>
      </div>
      <p className="paragraph">Documentos:</p>
      {medication.documents.map((document) => (
        <div className="document-content" key={document.id}>
          <ul>
            <li>Expediente: {document.expedient}</li>
            <li>Tipo: {document.type}</li>
            <li><a href={document.url} target="_blank" rel="noopener noreferrer">Download PDF</a></li>
          </ul>
        </div>
      ))}
      <p className="paragraph">Principais Ativos:</p>
      {medication.active_principles.map((activePrinciple) => (
        <div className="active-principles-content" key={activePrinciple.id}>
          <ul>
            <li>Nome: {activePrinciple.name}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
