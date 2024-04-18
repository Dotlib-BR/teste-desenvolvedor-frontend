import { useMedicineData } from "../context/MedicineDataContext";
import dayjs from "dayjs";
import Documents from "./Documents";

const MedicineList = () => {
  const { filteredMedicineData } = useMedicineData();

  if (!filteredMedicineData || filteredMedicineData.length === 0) {
    return <p>Nenhum dado de medicamento encontrado.</p>;
  }

  return (
    <section className="table-container">
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Princípios Ativos</th>
            <th>Empresa</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredMedicineData.map((medicine) => {
            return (
              <tr key={medicine.id}>
                <td>{medicine.name}</td>
                <td>{medicine.active_principles[0].name}</td>
                <td>{medicine.company}</td>
                <td>{dayjs(medicine.published_at).format("DD/MM/YYYY")}</td>
                <td>
                  <Documents
                    documents={medicine.documents}
                    medicineId={medicine.id}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default MedicineList;
