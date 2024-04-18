import { useMedicineData } from "../context/MedicineDataContext";
import dayjs from "dayjs";

const MedicineList = () => {
  const { medicineData, filteredMedicineData } = useMedicineData();

  if (!filteredMedicineData || filteredMedicineData.length === 0) {
    return <p>Nenhum dado de medicamento encontrado.</p>;
  }

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Princípios Ativos</th>
            <th>Empresa</th>
            <th>Documentos</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {filteredMedicineData.map((medicine) => {
            return (
              <tr key={medicine.id}>
                <td>{medicine.name}</td>
                <td>{medicine.active_principles[0].name}</td>
                <td>{medicine.company}</td>
                <td>
                  {medicine.documents.map((document) => {
                    return (
                      <a key={document.id} href={document.url}>
                        {document.type}
                      </a>
                    );
                  })}
                </td>
                <td>{dayjs(medicine.published_at).format("DD/MM/YYYY")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default MedicineList;
