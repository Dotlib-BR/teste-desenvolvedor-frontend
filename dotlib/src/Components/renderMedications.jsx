import React from 'react';

const RenderMedications = ({ filteredMedications, currentPage, handleExpandDocument, expandedDocument, handlePageChange }) => {
    if (filteredMedications.length === 0) {
        return null;
    }

    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = filteredMedications.slice(startIndex, endIndex);

    return (
        <>
        <div className="medications-container"> {/* Adicione uma div container para os blocos de 2 */}
            {currentItems.map((medication, index) => (
                <div key={medication.id} className="medication-details"> {/* Adicione a classe para estilização */}
                    <div>
                        <strong>ID:</strong> {medication.id}
                    </div>
                    <div>
                        <strong>Nome:</strong> {medication.name}
                    </div>
                    <div>
                        <strong>Data de Publicação:</strong> {medication.published_at}
                    </div>
                    <div>
                        <strong>Empresa:</strong> {medication.company}
                    </div>
                    <button 
                    className="expand-button"
                    onClick={() => handleExpandDocument(medication.id)}
                    >
                        Documentos
                    </button>
                    {expandedDocument === medication.id && (
                        <div>
                            <strong>Documents:</strong>
                            <ul>
                                {medication.documents.map((document) => (
                                    <li key={document.id}>
                                        <div>
                                            <strong>Expediente:</strong> {document.expedient}
                                        </div>
                                        <div>
                                            <strong>Id:</strong> {document.id}
                                        </div>
                                        <div>
                                            <strong>Tipo:</strong> {document.type}
                                        </div>
                                        <div>
                                            <strong>Url:</strong> <a href={document.url} download>{document.url}</a>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    )}
                    <div>
                        <strong>Princípios Ativos:</strong>
                        <ul>
                            {medication.active_principles.map((principle) => (
                                <li key={principle.id}>
                                    <div>
                                        <strong>ID:</strong> {principle.id}
                                    </div>
                                    <div>
                                        <strong>Nome:</strong> {principle.name}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
            <div>
                <button className='pagination-button ' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Página Anterior
                </button>
                <button
                    className='pagination-button '
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentItems.length < itemsPerPage}
                >
                    Próxima Página
                </button>
            </div>
        </>
    );
};

export default RenderMedications;
