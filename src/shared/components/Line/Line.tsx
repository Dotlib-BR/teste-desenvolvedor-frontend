import './Line.css';

import IconPdf from '../../icons/Pdf/IconPdf';
import { DataServices } from '../../services/api/data/DataService';
import { formatDate } from '../../services/utils/formatDate';

interface LineProps {
    id: string;
    name: string;
    company: string;
    date: string;
    patient?: string;
    professional?: string;
}

export default function Line({ id, name, company, date }: LineProps) {
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

    return (
        <tr className="tableLine" onClick={() => console.log(id)}>
            <td>{name}</td>
            <td>{company}</td>
            <td
                className="align download"
                onClick={(e) => handleDownloadPatient(e)}
            >
                <IconPdf width="20px" height="20px" />
            </td>
            <td
                className="align download"
                onClick={(e) => handleDownloadProfessional(e)}
            >
                <IconPdf width="20px" height="20px" />
            </td>
            <td className="align">{formatDate(date)}</td>
        </tr>
    );
}
