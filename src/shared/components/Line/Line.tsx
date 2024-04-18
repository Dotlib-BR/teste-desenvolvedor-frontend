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
    const handleDownloadPatient = (e: MouseEvent) => {
        e.stopPropagation();
        console.log(patient);
    };

    const handleDownloadProfessional = (e: MouseEvent) => {
        e.stopPropagation();
        console.log(professional);
    };

    return (
        <tr className="tableLine" onClick={() => console.log(id)}>
            <td>{name}</td>
            <td>{company}</td>
            <td>{formatDate(date)}</td>
            <td>
                <IconPdf
                    width="20px"
                    height="20px"
                    onClick={(e: MouseEvent) => handleDownloadPatient(e)}
                />
            </td>
            <td>
                <IconPdf
                    width="20px"
                    height="20px"
                    onClick={(e: MouseEvent) => handleDownloadProfessional(e)}
                />
            </td>
        </tr>
    );
}
