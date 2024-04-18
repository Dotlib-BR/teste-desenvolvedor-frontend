import IconPdf from '../../icons/Pdf/IconPdf';
import { formatDate } from '../../services/utils/formatDate';
import './Line.css';

interface LineProps {
    id: string;
    name: string;
    company: string;
    date: string;
    patient: string;
    professional: string;
}

export default function Line({
    id,
    name,
    company,
    date,
    patient,
    professional,
}: LineProps) {
    const handleDownloadPatient = (
        e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>,
    ) => {
        e.stopPropagation();
        console.log(patient);
    };

    const handleDownloadProfessional = (
        e: React.MouseEvent<HTMLTableDataCellElement, MouseEvent>,
    ) => {
        e.stopPropagation();
        console.log(professional);
    };

    return (
        <tr className="tableLine" onClick={() => console.log(id)}>
            <td>{name}</td>
            <td>{company}</td>
            <td className="align">{formatDate(date)}</td>
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
        </tr>
    );
}
