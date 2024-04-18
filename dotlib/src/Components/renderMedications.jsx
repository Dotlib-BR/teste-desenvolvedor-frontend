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
            <ul>
                {currentItems.map((medication) => (
                    <li key={medication.id}>
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
                        <button onClick={() => handleExpandDocument(medication.id)}>Documentos</button>
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
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Página Anterior
                </button>
                <button
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
