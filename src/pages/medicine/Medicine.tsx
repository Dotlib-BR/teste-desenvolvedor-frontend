import './Medicine.css';

import { useEffect, useState } from 'react';
import { DataServices } from '../../shared/services/api/data/DataService';
import { useParams } from 'react-router-dom';
import { MedicineInterface } from '../../shared/services/api/interfaces/MedicineInterface';
import Container from '../../shared/components/Container';
import { formatDate } from '../../shared/services/utils/formatDate';
import Button from '../../shared/components/Button/Button';

export default function Medicine() {
    const { id } = useParams();

    const [medicine, setMedicine] = useState<MedicineInterface | null>(null);

    useEffect(() => {
        if (!id) return;

        DataServices.getById(id).then((result: MedicineInterface | Error) => {
            if (result instanceof Error) {
                alert(result);
            } else {
                setMedicine(result);
                console.log(result);
            }
        });
    }, [id]);

    const handleDownload = () => {
        DataServices.downloadPdf();
    };

    return (
        <Container>
            <div className="containerInfo">
                <div className="headerContainer">Detalhe do Produto</div>
                <ul className="medicineList">
                    <li className="medicineListLine">
                        <b>Medicamento</b>
                        <span>{medicine?.name}</span>
                    </li>
                    <li className="medicineListLine">
                        <b>Empresa</b>
                        <span>{medicine?.company}</span>
                    </li>
                    <li className="medicineListLine">
                        <b>Publicação</b>
                        <span>
                            {medicine ? formatDate(medicine?.published_at) : ''}
                        </span>
                    </li>
                    <li className="medicineListLine">
                        <b>Princípio ativo</b>
                        {medicine?.active_principles.map((principle) => {
                            return <span>{principle.name}</span>;
                        })}
                    </li>
                </ul>
            </div>
            <div className="containerInfo">
                <div className="headerContainer">Documentos</div>
                <div>
                    {medicine?.documents.map((document) => {
                        return (
                            <div className="documentContainer">
                                <div className="documentContainerTitle">
                                    <div className="documentContainerTitleTwo">
                                        <div className="documentTitle">
                                            <p>Tipo: </p>
                                            <p>{document.type}</p>
                                        </div>
                                        <div className="documentTitle">
                                            <p>Expediente: </p>
                                            <p>{document.expedient}</p>
                                        </div>
                                    </div>
                                    <Button onClick={() => handleDownload()}>
                                        Download
                                    </Button>
                                </div>

                                <iframe src="/pdf_sample.pdf" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </Container>
    );
}
