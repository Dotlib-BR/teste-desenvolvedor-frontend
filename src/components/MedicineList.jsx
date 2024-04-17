import React from 'react';

function MedicineList({ medicines }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Resultados da Pesquisa</h2>
      <ul className="divide-y divide-gray-200">
        {medicines.map((medicine, index) => (
          <li key={index} className="py-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.3 6.3a1 1 0 011.4-1.4L10 8.586l2.3-2.3a1 1 0 111.4 1.4L11.414 10l2.3 2.3a1 1 0 11-1.4 1.4L10 11.414l-2.3 2.3a1 1 0 01-1.4-1.4L8.586 10 6.3 7.7a1 1 0 01-1.4-1.4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <div className="text-sm font-medium text-gray-900">{medicine.name}</div>
                <div className="text-sm text-gray-500">{medicine.company}</div>
                <div className="text-sm text-gray-500">Publicado em: {new Date(medicine.published_at).toLocaleDateString()}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MedicineList;
