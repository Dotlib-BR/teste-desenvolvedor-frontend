import React, { useState } from 'react';
import './SearchBar.css';
import jsPDF from 'jspdf';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = () => {
    const results = [
      
        {
          "id": "9fd2789c-50f5-4743-857b-bbfa746ed633",
          "name": "PARACETAMOL",
          "registration_number": "3845267013",
          "active_principle": "PARACETAMOL",
          "company": "LABORATÓRIO ABC LTDA.",
          "published_at": "2023-02-16T18:24:24.000Z",
          "documents": [
            {
              "id": "57a35a05-1615-491c-b5ae-48ad770cdd54",
              "expedient": "5064642230",
              "type": "PROFESSIONAL",
              "url": "http://localhost:3000/pdf_sample.pdf"
            },
            {
              "id": "dcc3ecc6-5b62-4236-8dfe-f61f4da93fad",
              "expedient": "5064642230",
              "type": "PATIENT",
              "url": "http://localhost:3000/pdf_sample.pdf"
            }
          ],
          "active_principles": [
            {
              "id": "595aeb0d-5b0d-4a05-a6f6-574a291ad575",
              "name": "PARACETAMOL"
            }
          ]
        },
        {
          "id": "9fd2789c-50f5-4743-857b-bbfa746ed634",
          "name": "DIPIRONA",
          "registration_number": "3845267014",
          "active_principle": "DIPIRONA",
          "company": "LABORATÓRIO XYZ S/A",
          "published_at": "2023-06-16T18:24:24.000Z",
          "documents": [
            {
              "id": "57a35a05-1615-491c-b5ae-48ad770cdd55",
              "expedient": "5064642231",
              "type": "PROFESSIONAL",
              "url": "http://localhost:3000/pdf_sample.pdf"
            },
            {
              "id": "dcc3ecc6-5b62-4236-8dfe-f61f4da93fae",
              "expedient": "5064642231",
              "type": "PATIENT",
              "url": "http://localhost:3000/pdf_sample.pdf"
            }
          ],
          "active_principles": [
            {
              "id": "595aeb0d-5b0d-4a05-a6f6-574a291ad576",
              "name": "DIPIRONA"
            }
          ]
        },
        {
          "id": "9fd2789c-50f5-4743-857b-bbfa746ed635",
          "name": "OMEPRAZOL",
          "registration_number": "3845267015",
          "active_principle": "OMEPRAZOL",
          "company": "LABORATÓRIO OMEGA LTDA.",
          "published_at": "2023-08-16T18:24:24.000Z",
          "documents": [
            {
              "id": "57a35a05-1615-491c-b5ae-48ad770cdd56",
              "expedient": "5064642232",
              "type": "PROFESSIONAL",
              "url": "http://localhost:3000/pdf_sample.pdf"
            },
            {
              "id": "dcc3ecc6-5b62-4236-8dfe-f61f4da93faf",
              "expedient": "5064642232",
              "type": "PATIENT",
              "url": "http://localhost:3000/pdf_sample.pdf"
            }
          ],
          "active_principles": [
            {
              "id": "595aeb0d-5b0d-4a05-a6f6-574a291ad577",
              "name": "OMEPRAZOL"
            }
          ]
        },
        {
          "id": "9fd2789c-50f5-4743-857b-bbfa746ed636",
          "name": "IBUPROFENO",
          "registration_number": "3845267016",
          "active_principle": "IBUPROFENO",
          "company": "LABORATÓRIO BETA LTDA.",
          "published_at": "2023-10-16T18:24:24.000Z",
          "documents": [
            {
              "id": "57a35a05-1615-491c-b5ae-48ad770cdd57",
              "expedient": "5064642233",
              "type": "PROFESSIONAL",
              "url": "http://localhost:3000/pdf_sample.pdf"
            },
            {
              "id": "dcc3ecc6-5b62-4236-8dfe-f61f4da93fag",
              "expedient": "5064642233",
              "type": "PATIENT",
              "url": "http://localhost:3000/pdf_sample.pdf"
            }
          ],
          "active_principles": [
            {
              "id": "595aeb0d-5b0d-4a05-a6f6-574a291ad578",
              "name": "IBUPROFENO"
            }
          ]
        },
        {
          "id": "9fd2789c-50f5-4743-857b-bbfa746ed637",
          "name": "CIPROFLOXACINO",
          "registration_number": "3845267017",
          "active_principle": "CIPROFLOXACINO",
          "company": "LABORATÓRIO GAMA LTDA.",
          "published_at": "2023-12-16T18:24:24.000Z",
          "documents": [
            {
              "id": "57a35a05-1615-491c-b5ae-48ad770cdd58",
              "expedient": "5064642234",
              "type": "PROFESSIONAL",
              "url": "http://localhost:3000/pdf_sample.pdf"
            },
            {
              "id": "dcc3ecc6-5b62-4236-8dfe-f61f4da93fah",
              "expedient": "5064642234",
              "type": "PATIENT",
              "url": "http://localhost:3000/pdf_sample.pdf"
            }
          ],
          "active_principles": [
            {
              "id": "595aeb0d-5b0d-4a05-a6f6-574a291ad579",
              "name": "CIPROFLOXACINO"
            }
          ]
        },
        {
          "id": "9fd2789c-50f5-4743-857b-bbfa746ed638",
          "name": "DIPENIDOL",
          "registration_number": "3845267018",
          "active_principle": "DIPENIDOL",
          "company": "LABORATÓRIO DELTA LTDA.",
          "published_at": "2024-02-16T18:24:24.000Z",
          "documents": [
            {
              "id": "57a35a05-1615-491c-b5ae-48ad770cdd59",
              "expedient": "5064642235",
              "type": "PROFESSIONAL",
              "url": "http://localhost:3000/pdf_sample.pdf"
            },
            {
              "id": "dcc3ecc6-5b62-4236-8dfe-f61f4da93fai",
              "expedient": "5064642235",
              "type": "PATIENT",
              "url": "http://localhost:3000/pdf_sample.pdf"
            }
          ],
          "active_principles": [
            {
              "id": "595aeb0d-5b0d-4a05-a6f6-574a291ad580",
              "name": "DIPENIDOL"
            }
          ]
        },
        {
          "id": "9fd2789c-50f5-4743-857b-bbfa746ed639",
          "name": "LORATADINA",
          "registration_number": "3845267019",
          "active_principle": "LORATADINA",
          "company": "LABORATÓRIO EPSILON LTDA.",
          "published_at": "2024-04-16T18:24:24.000Z",
          "documents": [
            {
              "id": "57a35a05-1615-491c-b5ae-48ad770cdd60",
              "expedient": "5064642236",
              "type": "PROFESSIONAL",
              "url": "http://localhost:3000/pdf_sample.pdf"
            },
            {
              "id": "dcc3ecc6-5b62-4236-8dfe-f61f4da93faj",
              "expedient": "5064642236",
              "type": "PATIENT",
              "url": "http://localhost:3000/pdf_sample.pdf"
            }
          ],
          "active_principles": [
            {
              "id": "595aeb0d-5b0d-4a05-a6f6-574a291ad581",
              "name": "LORATADINA"
            }
          ]
        },
        {
          "id": "9fd2789c-50f5-4743-857b-bbfa746ed640",
          "name": "CLORIDRATO DE CIPROHEPTADINA",
          "registration_number": "3845267020",
          "active_principle": "CIPROHEPTADINA",
          "company": "LABORATÓRIO ZETA LTDA.",
          "published_at": "2024-06-16T18:24:24.000Z",
          "documents": [
            {
              "id": "57a35a05-1615-491c-b5ae-48ad770cdd61",
              "expedient": "5064642237",
              "type": "PROFESSIONAL",
              "url": "http://localhost:3000/pdf_sample.pdf"
            },
            {
              "id": "dcc3ecc6-5b62-4236-8dfe-f61f4da93fak",
              "expedient": "5064642237",
              "type": "PATIENT",
              "url": "http://localhost:3000/pdf_sample.pdf"
            }
          ],
          "active_principles": [
            {
              "id": "595aeb0d-5b0d-4a05-a6f6-574a291ad582",
              "name": "CIPROHEPTADINA"
            }
          ]
        }
      ]
      
    // Filtra os resultados com base no termo de pesquisa
    const filteredResults = results.filter(medication =>
      medication.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medication.company.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
    setShowResults(true); // Mostra os resultados
  };

  // Baixar PDF
  const handlePrintPDF = (medication) => {
    const doc = new jsPDF();
    doc.setFontSize(12);
  
    doc.text(20, 20, `Medicamento: ${medication.name}`);
    doc.text(20, 35, `Número de Registro: ${medication.registration_number}`);
    doc.text(20, 50, `Princípio Ativo: ${medication.active_principle}`);
    doc.text(20, 65, `Laboratório: ${medication.company}`);
  
   
  
    doc.save(`${medication.name}.pdf`);
  };

  return (
    <div className="search-bar-container">
      <h2>Critério para Consulta</h2>
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Medicamento" 
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="button" onClick={handleSearchSubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
      <div className="medicine-info-container" style={{ width: showResults ? '100%' : 'auto' }}>
        {showResults && searchResults.length > 0 ? (
          searchResults.map((medication, index) => (
            <div key={index} className="medicine-info">
              <h3>{medication.name}</h3>
              <p>N° Registro: {medication.registration_number}</p>
              <p>Princípio ativo: {medication.active_principle}</p>
              <p>Laboratório: {medication.company}</p>
              <button type="button" onClick={() => handlePrintPDF(medication)}>
                Imprimir PDF
              </button>
            </div>
          ))
        ) : (
          <p>Nenhum resultado encontrado</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;