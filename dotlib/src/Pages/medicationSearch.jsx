import React, { useState, useEffect } from 'react';
import { fetchAllData } from '../Utils/fetchData';
import RenderMedications from '../Components/renderMedications';

const MedicationSearch = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredMedications, setFilteredMedications] = useState([]);
    const [searchNotFound, setSearchNotFound] = useState(false);
    const [expandedDocument, setExpandedDocument] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetchAllData();
                setData(result);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = () => {
        if (searchQuery.length >= 3) {
            const filteredData = data.filter((medication) => {
                const lowerCaseQuery = searchQuery.toLowerCase();
                const lowerCaseCompanyName = medication.company.toLowerCase();
                return (
                    medication.name.toLowerCase() === lowerCaseQuery ||
                    lowerCaseCompanyName.includes(lowerCaseQuery) ||
                    lowerCaseCompanyName.split(' ')[0].includes(lowerCaseQuery)
                );
            });
            filteredData.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
            setFilteredMedications(filteredData);
            setSearchNotFound(filteredData.length === 0);
            setCurrentPage(1);
        } else {
            setFilteredMedications([]);
            setSearchNotFound(false);
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleExpandDocument = (medicationId) => {
        setExpandedDocument(expandedDocument === medicationId ? null : medicationId);
    };


    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Digite o nome do medicamento ou da empresa fabricante"
                />
                <button onClick={handleSearch}>Buscar</button>
            </form>
            {searchNotFound && <p>Busca não encontrada.</p>}
            <RenderMedications
                filteredMedications={filteredMedications}
                currentPage={currentPage}
                handleExpandDocument={handleExpandDocument}
                expandedDocument={expandedDocument}
                handlePageChange={handlePageChange}
            />
        </div>
    );
};

export default MedicationSearch;
