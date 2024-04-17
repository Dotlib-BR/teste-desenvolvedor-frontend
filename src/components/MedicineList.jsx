import { useState } from "react";

function sortByDate(data, order = "asc") {
  const toDate = (dateString) => new Date(dateString);

  data.sort((a, b) => {
    const dateA = toDate(a.published_at);
    const dateB = toDate(b.published_at);

    if (order === "asc") {
      return dateA - dateB;
    } else if (order === "desc") {
      return dateB - dateA;
    } else {
      console.error('Invalid order parameter. Using default order: "asc"');
      return dateA - dateB;
    }
  });

  return data;
}

function MedicinePopup({ medicine, onClose }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg p-10 max-w-xl relative">
          <button className="close-btn absolute top-2 right-2 mt-1 mr-1" onClick={onClose}>Fechar</button>
          <h2 className="text-xl font-semibold mb-4">{medicine.name}</h2>
          <p><strong>Companhia:</strong> {medicine.company}</p>
          <p><strong>Data de Publicação:</strong> {new Date(medicine.published_at).toLocaleDateString()}</p>
          <h3 className="mt-4 mb-2 text-lg font-semibold">Princípios Ativos:</h3>
          <ul>
            {medicine.active_principles.map(principle => (
              <li key={principle.id}>{principle.name}</li>
            ))}
          </ul>
          <h3 className="mt-4 mb-2 text-lg font-semibold">Documentos:</h3>
          <ul>
            {medicine.documents.map(document => (
              <li key={document.id} className="text-blue-500 underline">
                <a href={document.url} target="_blank" rel="noopener noreferrer">{document.type} Document</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

function MedicineList({ medicines = [], sortOrder = "asc" }) {
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const noResults = medicines.length === 0;

  if (!Array.isArray(medicines)) {
    medicines = medicines.data || [];
  }

  medicines = sortByDate(medicines, sortOrder);

  const handleMedicineClick = async (medicineId) => {
    try {
      // Fetch medicine details from the API using medicine ID
      const response = await fetch(`http://localhost:3000/data/${medicineId}`);
      const data = await response.json();
      setSelectedMedicine(data);
    } catch (error) {
      console.error("Error fetching medicine details:", error);
    }
  };

  const handleClosePopup = () => {
    setSelectedMedicine(null);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Resultados da Pesquisa</h2>
      {noResults && (
        <p className="text-red-500">Nenhum resultado encontrado.</p>
      )}
      <ul className="divide-y divide-gray-200">
        {medicines.map((medicine, index) => (
          <li key={index} className="py-4 cursor-pointer hover:bg-gray-200" onClick={() => handleMedicineClick(medicine.id)}>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.3 6.3a1 1 0 011.4-1.4L10 8.586l2.3-2.3a1 1 0 111.4 1.4L11.414 10l2.3 2.3a1 1 0 11-1.4 1.4L10 11.414l-2.3 2.3a1 1 0 01-1.4-1.4L8.586 10 6.3 7.7a1 1 0 01-1.4-1.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900">
                  {medicine.name}
                </div>
                <div className="text-sm text-gray-500">{medicine.company}</div>
                <div className="text-sm text-gray-500">
                  Publicado em:{" "}
                  {new Date(medicine.published_at).toLocaleDateString()}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
        {selectedMedicine && <MedicinePopup medicine={selectedMedicine} onClose={handleClosePopup} />}
    </div>
  );
}

export default MedicineList;
