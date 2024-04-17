import './Line.css';

interface LineProps {
    name: string;
    company: string;
    date: string;
    patient: string;
    professional: string;
}

export default function Line({
    name,
    company,
    date,
    patient,
    professional,
}: LineProps) {
    return (
        <tr className="tableLine">
            <td>{name}</td>
            <td>{company}</td>
            <td>{date}</td>
            <td>{patient}</td>
            <td>{professional}</td>
        </tr>
    );
}
