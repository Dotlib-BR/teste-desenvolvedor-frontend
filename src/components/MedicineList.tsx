import { useMedicineData } from "../context/MedicineDataContext";
import dayjs from "dayjs";
import Documents from "./Documents";
import DateFilter from "../assets/Icons/DateFilter";
import { IMedicineData } from "../context/MedicineDataContext.d";
import { useState } from "react";
import { Link } from "react-router-dom";

const MedicineList = () => {
  const { filteredMedicineData, setFilteredMedicineData } = useMedicineData();
  const [isSorted, setIsSorted] = useState(false)

  function sortByPublishedDate(a: IMedicineData, b: IMedicineData, asc: boolean) {
    const dateA = new Date(a.published_at);
    const dateB = new Date(b.published_at);

    if (dateA < dateB) {
      return asc ? -1 : 1;
    }
    if (dateA > dateB) {
      return asc ? 1 : -1;;
    }
    return 0;
  }

  const handleDateClick = () => {
    if(isSorted) {
      setIsSorted(false)

      return setFilteredMedicineData((prev) => {
        const sortedData = [...prev].sort((a, b) => sortByPublishedDate(a, b, false));
        return sortedData;
      });
    }

    setIsSorted(true)

    setFilteredMedicineData((prev) => {
      const sortedData = [...prev].sort((a, b) => sortByPublishedDate(a, b, true));
      return sortedData;
    });
  };

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
            <th className="table-container__date" onClick={() => handleDateClick()}>
              <div>
                Data <DateFilter />
              </div>
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredMedicineData.map((medicine) => {
            return (
              <tr key={medicine.id}>
                
                <td><Link to={`/medicine/details?id=${medicine.id}`}>{medicine.name}</Link></td>
                <td><Link to={`/medicine/details?id=${medicine.id}`}>{medicine.active_principles[0].name}</Link></td>
                <td><Link to={`/medicine/details?id=${medicine.id}`}>{medicine.company}</Link></td>
                <td><Link to={`/medicine/details?id=${medicine.id}`}>{dayjs(medicine.published_at).format("DD/MM/YYYY")}</Link></td>
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
