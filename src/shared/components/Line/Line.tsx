import './Line.css';

import IconPdf from '../../icons/Pdf/IconPdf';
import { DataServices } from '../../services/api/data/DataService';
import { formatDate } from '../../services/utils/formatDate';
import { useNavigate } from 'react-router-dom';

interface LineProps {
    id: string;
    name: string;
    company: string;
    date: string;
    patient?: string;
    professional?: string;
}

export default function Line({ id, name, company, date }: LineProps) {
    const navigate = useNavigate();

    const handleDownloadPatient = async (
        e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>,
    ) => {
        e.stopPropagation();

        await DataServices.downloadPdf();
    };

    const handleDownloadProfessional = async (
        e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>,
    ) => {
        e.stopPropagation();

        await DataServices.downloadPdf();
    };

    const handleRedirect = () => {
        navigate(`/medicine/${id}`);
    };

    return (
        <tr className="tableLine" onClick={() => handleRedirect()}>
            <td>{name}</td>
            <td className="columCompany">{company}</td>
            <td
                className="align download columleaflet"
                onClick={(e) => handleDownloadPatient(e)}
            >
                <IconPdf width="20px" height="20px" />
            </td>
            <td
                className="align download columleaflet"
                onClick={(e) => handleDownloadProfessional(e)}
            >
                <IconPdf width="20px" height="20px" />
            </td>
            <td className="align columData">{formatDate(date)}</td>
        </tr>
    );
}
